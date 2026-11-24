// node --experimental-strip-types scripts/test-attribution.mjs  (Node 22.6+; Node 24 strips types by default)
import assert from 'node:assert/strict';
import { parseTouch, mergeTouch, touchForEmbed, withTouch, readStored, MAX_AGE_MS } from '../src/lib/attribution.ts';

let passed = 0;
const test = (name, fn) => { fn(); passed += 1; console.log(`ok - ${name}`); };
const CAL = 'https://links.serviceosllc.com/widget/booking/6goTW1YljKlb3R1fjnNd';

test('keeps only allowlisted keys', () => {
  assert.deepEqual(parseTouch('?utm_source=google&utm_medium=cpc&gclid=Cj0KCQ_abc-123&foo=bar&email=a@b.c'),
    { utm_source: 'google', utm_medium: 'cpc', gclid: 'Cj0KCQ_abc-123' });
});

test('drops empty, oversized and unsafe values', () => {
  const long = 'x'.repeat(513);
  assert.deepEqual(parseTouch(`?utm_source=&utm_medium=%20&utm_campaign=${long}&utm_term=<script>&utm_content=ok`),
    { utm_content: 'ok' });
});

test('first touch is kept, latest touch replaces last', () => {
  const a = mergeTouch(null, { utm_source: 'google' }, 1000);
  const b = mergeTouch(a, { utm_source: 'facebook', fbclid: 'IwAR1' }, 2000);
  assert.deepEqual(b.first, { utm_source: 'google' });
  assert.deepEqual(b.last, { utm_source: 'facebook', fbclid: 'IwAR1' });
  assert.equal(b.lastAt, 2000);
});

test('a visit without params keeps the stored touch', () => {
  const a = mergeTouch(null, { gclid: 'abc' }, 1000);
  const b = mergeTouch(a, {}, 5000);
  assert.deepEqual(touchForEmbed(b), { gclid: 'abc' });
});

test('touches older than 90 days expire', () => {
  const a = mergeTouch(null, { gclid: 'abc' }, 0);
  const b = mergeTouch(a, {}, MAX_AGE_MS + 1);
  assert.deepEqual(touchForEmbed(b), {});
});

test('embed URL gets params, encoded, without overriding existing ones', () => {
  const url = withTouch(`${CAL}?utm_source=keep`, { utm_source: 'google', utm_campaign: 'fl|hvac', gclid: 'a/b=c' });
  const parsed = new URL(url);
  assert.equal(parsed.origin + parsed.pathname, CAL);
  assert.equal(parsed.searchParams.get('utm_source'), 'keep');
  assert.equal(parsed.searchParams.get('utm_campaign'), 'fl|hvac');
  assert.equal(parsed.searchParams.get('gclid'), 'a/b=c');
});

test('no touch leaves the embed URL unchanged', () => {
  assert.equal(withTouch(CAL, {}), new URL(CAL).toString());
});

test('corrupt or hostile storage is ignored safely', () => {
  assert.equal(readStored('not json'), null);
  assert.equal(readStored('null'), null);
  const r = readStored(JSON.stringify({ first: { gclid: 'ok', evil: 'x' }, last: { utm_source: '<b>' }, firstAt: 1 }));
  assert.deepEqual(r.first, { gclid: 'ok' });
  assert.equal(r.last, undefined);
});

console.log(`${passed} passed`);
