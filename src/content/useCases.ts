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
    title: 'Owner operations',
    short: 'Turn a broad operating question into a short, reviewable decision queue.',
    question: 'What needs my attention before the day gets away from us?',
    friction: [
      'Operating context is split across records, conversations, and people.',
      'Urgent work and merely noisy work arrive in the same view.',
      'A useful answer still needs an accountable next move.',
    ],
    flow: [
      { label: 'Ask', body: 'Frame the owner question in ordinary operating language.' },
      { label: 'Assemble', body: 'Bring the relevant source context into one reviewable view.' },
      { label: 'Approve', body: 'Keep the proposed next move with the accountable person.' },
      { label: 'Verify', body: 'Return what changed, what did not, and what still needs attention.' },
    ],
    proof: 'A useful pilot should reduce the work required to reach a trustworthy decision without hiding how the decision was formed.',
  },
  {
    slug: 'ai-receptionist',
    number: '02',
    title: 'AI receptionist',
    short: 'Give inbound conversations a defined path to a person, a next step, or an approved workflow.',
    question: 'Can this customer get a clear next step without losing the operating context?',
    friction: [
      'Inbound demand does not arrive on the team’s preferred schedule.',
      'A quick response can still be incomplete or disconnected from the record.',
      'Escalation must be visible when the conversation leaves the supported path.',
    ],
    flow: [
      { label: 'Receive', body: 'Capture the conversation and identify the supported intent.' },
      { label: 'Check', body: 'Review the allowed operating context for the next response.' },
      { label: 'Route', body: 'Present the supported next step or escalate to a person.' },
      { label: 'Return', body: 'Keep the conversation state and operating outcome aligned.' },
    ],
    proof: 'The capability boundary, channels, escalation policy, and integrations must be verified for each implementation before publication.',
  },
  {
    slug: 'speed-to-lead',
    number: '03',
    title: 'Speed to lead',
    short: 'Bring new opportunities into view while the context is still useful.',
    question: 'Which new opportunities need a response, and who owns the next move?',
    friction: [
      'New inquiries arrive through more than one path.',
      'Fast response without context can create another handoff instead of progress.',
      'Ownership becomes ambiguous when the first response and the next action separate.',
    ],
    flow: [
      { label: 'Detect', body: 'Identify a newly supported opportunity in the operating context.' },
      { label: 'Prepare', body: 'Assemble the known context and the intended response path.' },
      { label: 'Assign', body: 'Make the accountable owner and approval boundary explicit.' },
      { label: 'Confirm', body: 'Return a visible outcome to the team.' },
    ],
    proof: 'Any response-time or conversion claim remains blocked until it is tied to an approved source and a defined measurement window.',
  },
  {
    slug: 'no-show-rescheduling',
    number: '04',
    title: 'No-show rescheduling',
    short: 'Coordinate the follow-up work around a missed appointment without hiding the decision.',
    question: 'Which missed appointments need a new path, and what is safe to propose?',
    friction: [
      'A missed appointment creates customer, schedule, and ownership work at once.',
      'The next available slot is not always the right operating decision.',
      'The team needs to know what was proposed, approved, and confirmed.',
    ],
    flow: [
      { label: 'Identify', body: 'Bring the supported missed-appointment state into view.' },
      { label: 'Prepare', body: 'Form a reviewable next-step proposal using allowed context.' },
      { label: 'Approve', body: 'Keep schedule changes inside the configured authority boundary.' },
      { label: 'Verify', body: 'Return the confirmed outcome and unresolved follow-up.' },
    ],
    proof: 'The workflow should be judged by the clarity of the recovered appointment state, not an unqualified no-show reduction claim.',
  },
  {
    slug: 'sales-to-operations',
    number: '05',
    title: 'Sales to operations',
    short: 'Carry important context from a won job into the team responsible for delivery.',
    question: 'What does operations need to know before this job moves forward?',
    friction: [
      'The customer promise and the delivery record do not always move together.',
      'Small missing details become schedule, equipment, or expectation problems later.',
      'A handoff is only complete when the receiving owner can act on it.',
    ],
    flow: [
      { label: 'Trigger', body: 'Recognize the supported stage or handoff event.' },
      { label: 'Assemble', body: 'Bring the required source context into a consistent handoff.' },
      { label: 'Review', body: 'Let the accountable team confirm gaps and next actions.' },
      { label: 'Return', body: 'Make the accepted handoff and remaining exception visible.' },
    ],
    proof: 'The implementation should define handoff completeness before measuring downstream improvement.',
  },
];
