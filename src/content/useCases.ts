export type UseCase = {
  slug: string;
  number: string;
  title: string;
  short: string;
  question: string;
  friction: string[];
  flow: { label: string; body: string }[];
  proof: string;
};

export const useCases: UseCase[] = [
  {
    slug: 'owner-operations',
    number: '01',
    title: 'Your daily list',
    short: 'See what needs your attention before the day gets away from you.',
    question: 'What needs my attention before the day gets away from us?',
    friction: [
      'Job details are split across records, messages, and people.',
      'Real problems get buried under routine noise.',
      'Even a good answer is useless when nobody owns the next step.',
    ],
    flow: [
      { label: 'Ask', body: 'Ask the question the way you would ask your office manager.' },
      { label: 'Gather', body: 'Put the useful job details in one place.' },
      { label: 'Decide', body: 'Send the next step to the person who makes the call.' },
      { label: 'Check', body: 'Show what changed and what still needs attention.' },
    ],
    proof: 'A good test should help you reach the right call with less chasing. Your team should still be able to see how the answer was reached.',
  },
  {
    slug: 'ai-receptionist',
    number: '02',
    title: 'Customer calls and messages',
    short: 'Give each new customer a clear next step, even when the office is slammed.',
    question: 'Can this customer get a clear next step without losing the job details?',
    friction: [
      'Calls and messages do not wait for a slow day.',
      'A fast reply can still miss an important job detail.',
      'Your crew needs to know when a person should take over.',
    ],
    flow: [
      { label: 'Receive', body: 'Catch the customer’s question and what they need.' },
      { label: 'Check', body: 'Look at the job details needed for a useful reply.' },
      { label: 'Route', body: 'Give the next step or send it to a person.' },
      { label: 'Update', body: 'Keep the message and job record on the same page.' },
    ],
    proof: 'Before a test starts, we need to confirm which messages Rokko can handle, when a person takes over, and which tools are connected.',
  },
  {
    slug: 'speed-to-lead',
    number: '03',
    title: 'Fast lead follow-up',
    short: 'See who needs a call back before a good lead goes cold.',
    question: 'Which new leads need a reply, and who owns the next step?',
    friction: [
      'New leads come in through more than one place.',
      'A fast reply without the right details can create more back-and-forth.',
      'Follow-up slips when the first reply and the next task have different owners.',
    ],
    flow: [
      { label: 'Spot', body: 'Catch a new lead that needs a reply.' },
      { label: 'Prepare', body: 'Put the known details and next reply together.' },
      { label: 'Assign', body: 'Show who owns the call back and who must approve it.' },
      { label: 'Confirm', body: 'Let the team see whether the follow-up happened.' },
    ],
    proof: 'We won’t promise faster replies or more booked jobs until a real test has a clear start date, end date, and trusted numbers.',
  },
  {
    slug: 'no-show-rescheduling',
    number: '04',
    title: 'Missed appointments',
    short: 'Get a missed visit back on track without losing notes or double-booking the crew.',
    question: 'Which missed visits need a new time, and what can we offer?',
    friction: [
      'A missed visit creates customer, schedule, and crew work at the same time.',
      'The next open time is not always the right time.',
      'The office and field crew need to see what was offered, approved, and booked.',
    ],
    flow: [
      { label: 'Find', body: 'Show the missed visit and the details that matter.' },
      { label: 'Prepare', body: 'Get a few sensible next steps ready to review.' },
      { label: 'Approve', body: 'Wait for the right person before changing the schedule.' },
      { label: 'Confirm', body: 'Show the new time and any follow-up that is still open.' },
    ],
    proof: 'Judge the test by whether the customer, office, and crew can see the same new plan. We won’t claim fewer no-shows without real proof.',
  },
  {
    slug: 'sales-to-operations',
    number: '05',
    title: 'Job handoff',
    short: 'Pass the promise, scope, and open questions from sales to the team doing the work.',
    question: 'What does the crew need to know before this job moves forward?',
    friction: [
      'What sales promised does not always make it into the job record.',
      'One missing detail can turn into a schedule, equipment, or callback problem.',
      'A handoff is not done until the person receiving it can move the job forward.',
    ],
    flow: [
      { label: 'Start', body: 'Catch the job when it is ready to move from sales to the crew.' },
      { label: 'Gather', body: 'Put the scope, promise, access notes, and open questions together.' },
      { label: 'Review', body: 'Let the receiving team flag gaps before saying yes.' },
      { label: 'Confirm', body: 'Show that the handoff was accepted and what is still missing.' },
    ],
    proof: 'Agree on what a complete handoff looks like before the test. Then your team can check whether fewer details are getting dropped.',
  },
];
