export type Presence = 'online' | 'away' | 'offline';

export type Reaction = {
  emoji: string;
  label: string;
  count: number;
  reacted?: boolean;
};

export type ThreadReply = {
  author: string;
  avatar: string;
  avatarKind?: 'rokko' | 'person' | 'team';
  time: string;
  body: string;
};

export type WorkspaceMessage = {
  id: string;
  author: string;
  role?: string;
  avatar: string;
  avatarKind?: 'rokko' | 'person' | 'team';
  presence?: Presence;
  time: string;
  datetime: string;
  body: string[];
  reactions?: Reaction[];
  card?: {
    label: string;
    title: string;
    body: string;
    primaryAction?: string;
    secondaryAction?: string;
  };
  replies?: ThreadReply[];
  editable?: boolean;
};

export type WorkspaceChannel = {
  id: string;
  label: string;
  kind: 'channel' | 'dm';
  category: 'Operating rooms' | 'Direct messages';
  topic: string;
  unread?: number;
  presence?: Presence;
  messages: WorkspaceMessage[];
};

export const productChannels: WorkspaceChannel[] = [
  {
    id: 'owner-brief',
    label: 'owner-brief',
    kind: 'channel',
    category: 'Operating rooms',
    topic: 'Today’s owner list · sample only',
    messages: [
      {
        id: 'owner-question',
        author: 'Maya Chen',
        avatar: 'MC',
        avatarKind: 'person',
        presence: 'online',
        time: '8:42 AM',
        datetime: '2026-08-19T08:42:00',
        body: ['What needs my attention before the morning meeting?'],
        editable: true,
      },
      {
        id: 'owner-answer',
        author: 'Rokko',
        role: 'Work assistant',
        avatar: 'R',
        avatarKind: 'rokko',
        presence: 'online',
        time: '8:43 AM',
        datetime: '2026-08-19T08:43:00',
        body: [
          'I found three items in this sample list. Two need your call. One is already finished.',
          'I put the job details below so you can check them before anything moves.',
        ],
        card: {
          label: 'Approval requested',
          title: 'Check two schedule changes',
          body: 'The job notes and time limits are ready for you to review.',
          primaryAction: 'Check changes',
          secondaryAction: 'Hold for later',
        },
        reactions: [
          { emoji: '✓', label: 'check mark', count: 3, reacted: true },
          { emoji: '👀', label: 'eyes', count: 1 },
        ],
        replies: [
          { author: 'Field crew', avatar: 'FC', avatarKind: 'team', time: '8:47 AM', body: 'The access time is confirmed. Keep the second change on hold.' },
          { author: 'Rokko', avatar: 'R', avatarKind: 'rokko', time: '8:48 AM', body: 'Got it. One change is ready for your yes. The other is still on hold.' },
        ],
      },
      {
        id: 'owner-followup',
        author: 'Field crew',
        avatar: 'FC',
        avatarKind: 'team',
        presence: 'away',
        time: '8:46 AM',
        datetime: '2026-08-19T08:46:00',
        body: ['The first item is ours. Open the thread and we’ll confirm the access time.'],
        reactions: [{ emoji: '👍', label: 'thumbs up', count: 2 }],
      },
    ],
  },
  {
    id: 'inbound-review',
    label: 'inbound-review',
    kind: 'channel',
    category: 'Operating rooms',
    topic: 'Customer follow-up · sample only',
    unread: 4,
    messages: [
      {
        id: 'inbound-1',
        author: 'Office team',
        avatar: 'CO',
        avatarKind: 'team',
        presence: 'online',
        time: '9:06 AM',
        datetime: '2026-08-19T09:06:00',
        body: ['A customer asked to change the service time. The job is waiting for the owner.'],
      },
      {
        id: 'inbound-2',
        author: 'Rokko',
        role: 'Work assistant',
        avatar: 'R',
        avatarKind: 'rokko',
        presence: 'online',
        time: '9:07 AM',
        datetime: '2026-08-19T09:07:00',
        body: ['I put the call notes and current appointment together. Nothing has changed yet.'],
        card: {
          label: 'Ready to check',
          title: 'One time change needs your call',
          body: 'The customer request, current time, and owner are all here.',
          primaryAction: 'Check the job',
        },
        reactions: [{ emoji: '✓', label: 'check mark', count: 1 }],
      },
      {
        id: 'inbound-3',
        author: 'Maya Chen',
        avatar: 'MC',
        avatarKind: 'person',
        presence: 'online',
        time: '9:09 AM',
        datetime: '2026-08-19T09:09:00',
        body: ['Keep the customer note with this when it goes to scheduling.'],
        editable: true,
      },
    ],
  },
  {
    id: 'schedule-recovery',
    label: 'schedule-recovery',
    kind: 'channel',
    category: 'Operating rooms',
    topic: 'Missed visits · sample only',
    messages: [
      {
        id: 'schedule-1',
        author: 'Office team',
        avatar: 'SC',
        avatarKind: 'team',
        presence: 'online',
        time: '9:18 AM',
        datetime: '2026-08-19T09:18:00',
        body: ['The 11:30 visit needs a closer look. The customer did not confirm.'],
      },
      {
        id: 'schedule-2',
        author: 'Rokko',
        role: 'Work assistant',
        avatar: 'R',
        avatarKind: 'rokko',
        presence: 'online',
        time: '9:19 AM',
        datetime: '2026-08-19T09:19:00',
        body: ['I prepared two sample ways to get the visit back on track. Neither one moves until you pick.'],
        card: {
          label: 'Decision required',
          title: 'Choose how to get this visit back on track',
          body: 'Nothing changes until the right person checks the options.',
          primaryAction: 'Compare choices',
          secondaryAction: 'Ask the office',
        },
        replies: [
          { author: 'Maya Chen', avatar: 'MC', avatarKind: 'person', time: '9:21 AM', body: 'Hold the second choice until the field crew checks the access note.' },
          { author: 'Field crew', avatar: 'FC', avatarKind: 'team', time: '9:23 AM', body: 'Confirmed. The access note is current.' },
        ],
      },
    ],
  },
  {
    id: 'lead-response',
    label: 'lead-response',
    kind: 'channel',
    category: 'Operating rooms',
    topic: 'New leads · sample follow-up list',
    unread: 3,
    messages: [
      {
        id: 'lead-1',
        author: 'Sales desk',
        avatar: 'SD',
        avatarKind: 'team',
        presence: 'away',
        time: '9:31 AM',
        datetime: '2026-08-19T09:31:00',
        body: ['Which new leads still need someone to call them back?'],
      },
      {
        id: 'lead-2',
        author: 'Rokko',
        role: 'Work assistant',
        avatar: 'R',
        avatarKind: 'rokko',
        presence: 'online',
        time: '9:32 AM',
        datetime: '2026-08-19T09:32:00',
        body: ['Three sample leads are waiting. The replies are ready, but nobody owns the call backs yet.'],
        reactions: [{ emoji: '👀', label: 'eyes', count: 2 }],
      },
      {
        id: 'lead-3',
        author: 'Maya Chen',
        avatar: 'MC',
        avatarKind: 'person',
        presence: 'online',
        time: '9:34 AM',
        datetime: '2026-08-19T09:34:00',
        body: ['Put the first lead on my list. Leave the other two unassigned.'],
        editable: true,
      },
    ],
  },
  {
    id: 'sales-handoff',
    label: 'sales-handoff',
    kind: 'channel',
    category: 'Operating rooms',
    topic: 'Sales-to-crew handoff · sample checklist',
    messages: [
      {
        id: 'handoff-1',
        author: 'Sales desk',
        avatar: 'SD',
        avatarKind: 'team',
        presence: 'away',
        time: '9:45 AM',
        datetime: '2026-08-19T09:45:00',
        body: ['This sample job is ready for the crew to check. The customer promise and access notes are attached.'],
      },
      {
        id: 'handoff-2',
        author: 'Rokko',
        role: 'Work assistant',
        avatar: 'R',
        avatarKind: 'rokko',
        presence: 'online',
        time: '9:46 AM',
        datetime: '2026-08-19T09:46:00',
        body: ['One detail is still missing. I kept the handoff on hold instead of marking it done.'],
        card: {
          label: 'Handoff incomplete',
          title: 'Someone needs to confirm the equipment',
          body: 'The crew can check the missing detail before taking the job.',
          primaryAction: 'Check what’s missing',
        },
      },
    ],
  },
  {
    id: 'rokko-dm',
    label: 'Rokko',
    kind: 'dm',
    category: 'Direct messages',
    topic: 'Online · ask Rokko',
    presence: 'online',
    messages: [
      {
        id: 'rokko-dm-1',
        author: 'Maya Chen',
        avatar: 'MC',
        avatarKind: 'person',
        presence: 'online',
        time: '10:02 AM',
        datetime: '2026-08-19T10:02:00',
        body: ['Tell me what you do in one line.'],
        editable: true,
      },
      {
        id: 'rokko-dm-2',
        author: 'Rokko',
        role: 'Work assistant',
        avatar: 'R',
        avatarKind: 'rokko',
        presence: 'online',
        time: '10:02 AM',
        datetime: '2026-08-19T10:02:30',
        body: ['Ask what needs attention. Check the details. Make the call. See what happened.'],
        reactions: [{ emoji: '✓', label: 'check mark', count: 4 }],
      },
    ],
  },
  {
    id: 'maya-dm',
    label: 'Maya C.',
    kind: 'dm',
    category: 'Direct messages',
    topic: 'Away · owner check',
    presence: 'away',
    unread: 1,
    messages: [
      {
        id: 'maya-dm-1',
        author: 'Field crew',
        avatar: 'FC',
        avatarKind: 'team',
        presence: 'online',
        time: '10:12 AM',
        datetime: '2026-08-19T10:12:00',
        body: ['The access time is confirmed. The owner list is ready to check again.'],
      },
      {
        id: 'maya-dm-2',
        author: 'Maya Chen',
        avatar: 'MC',
        avatarKind: 'person',
        presence: 'away',
        time: '10:14 AM',
        datetime: '2026-08-19T10:14:00',
        body: ['Got it. Keep the change on hold until I’m back.'],
        editable: true,
      },
    ],
  },
];
