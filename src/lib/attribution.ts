// Ad-click attribution for GHL iframe embeds.
//
// Why: a GHL form or calendar inside an iframe cannot read the parent page's URL, so the
// utm_* and click ids (gclid, fbclid, ...) from an ad are lost unless we hand them over.
// This module keeps the first and latest ad touch in localStorage for 90 days and appends the
// latest touch to every GHL embed URL, where GHL records it on the contact.
//
// Pure functions only (no DOM), so scripts/test-attribution.mjs can test them in Node.

export const ATTRIBUTION_KEYS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
  'gclid',
  'gbraid',
  'wbraid',
  'fbclid',
  'msclkid',
] as const;

export type AttributionKey = (typeof ATTRIBUTION_KEYS)[number];
export type Touch = Partial<Record<AttributionKey, string>>;
export type StoredAttribution = { first?: Touch; last?: Touch; firstAt?: number; lastAt?: number };

export const STORAGE_KEY = 'grk_attribution_v1';
export const MAX_AGE_MS = 90 * 24 * 60 * 60 * 1000;
const MAX_VALUE_LENGTH = 512;
// Printable ASCII without spaces or quotes. Click ids and our UTM values fit; anything else is dropped.
const SAFE_VALUE = /^[A-Za-z0-9._~\-+:%|/=]+$/;

export function parseTouch(search: string): Touch {
  const params = new URLSearchParams(search);
  const touch: Touch = {};
  for (const key of ATTRIBUTION_KEYS) {
    const raw = params.get(key);
    if (raw === null) continue;
    const value = raw.trim();
    if (!value || value.length > MAX_VALUE_LENGTH || !SAFE_VALUE.test(value)) continue;
    touch[key] = value;
  }
  return touch;
}

export function hasTouch(touch: Touch | undefined): touch is Touch {
  return !!touch && Object.keys(touch).length > 0;
}

export function mergeTouch(stored: StoredAttribution | null, current: Touch, now: number): StoredAttribution {
  const fresh = (at?: number) => typeof at === 'number' && now - at >= 0 && now - at < MAX_AGE_MS;
  const next: StoredAttribution = {};
  if (stored && hasTouch(stored.first) && fresh(stored.firstAt)) {
    next.first = stored.first;
    next.firstAt = stored.firstAt;
  }
  if (stored && hasTouch(stored.last) && fresh(stored.lastAt)) {
    next.last = stored.last;
    next.lastAt = stored.lastAt;
  }
  if (hasTouch(current)) {
    next.last = current;
    next.lastAt = now;
    if (!next.first) {
      next.first = current;
      next.firstAt = now;
    }
  }
  return next;
}

export function touchForEmbed(stored: StoredAttribution): Touch {
  if (hasTouch(stored.last)) return stored.last;
  if (hasTouch(stored.first)) return stored.first;
  return {};
}

export function withTouch(baseUrl: string, touch: Touch): string {
  const url = new URL(baseUrl);
  for (const key of ATTRIBUTION_KEYS) {
    const value = touch[key];
    if (value && !url.searchParams.has(key)) url.searchParams.set(key, value);
  }
  return url.toString();
}

export function readStored(raw: string | null): StoredAttribution | null {
  if (!raw) return null;
  try {
    const value = JSON.parse(raw);
    if (!value || typeof value !== 'object') return null;
    const clean = (touch: unknown): Touch | undefined => {
      if (!touch || typeof touch !== 'object') return undefined;
      const query = new URLSearchParams();
      for (const key of ATTRIBUTION_KEYS) {
        const v = (touch as Record<string, unknown>)[key];
        if (typeof v === 'string') query.set(key, v);
      }
      const parsed = parseTouch(query.toString());
      return hasTouch(parsed) ? parsed : undefined;
    };
    return {
      first: clean(value.first),
      last: clean(value.last),
      firstAt: typeof value.firstAt === 'number' ? value.firstAt : undefined,
      lastAt: typeof value.lastAt === 'number' ? value.lastAt : undefined,
    };
  } catch {
    return null;
  }
}
