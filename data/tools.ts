import { Tool } from '@/lib/types';

export const tools: Tool[] = [
  {
    slug: 'box-breathing',
    title: 'Box Breathing',
    durationOptions: [60, 180, 300],
    category: 'Breathing',
    whenToUse: 'When your breathing feels fast or shallow.',
    steps: [
      { title: 'Inhale', instruction: 'Breathe in gently through your nose for 4 seconds.', seconds: 4 },
      { title: 'Hold', instruction: 'Hold your breath softly for 4 seconds.', seconds: 4 },
      { title: 'Exhale', instruction: 'Breathe out slowly through your mouth for 4 seconds.', seconds: 4 },
      { title: 'Hold', instruction: 'Pause for 4 seconds before the next breath.', seconds: 4 }
    ],
    tags: ['breathing', 'panic', 'quick relief']
  },
  {
    slug: '478-breathing',
    title: '4-7-8 Breathing',
    durationOptions: [120, 180],
    category: 'Breathing',
    whenToUse: 'When you want to settle your nervous system before sleep or after stress.',
    steps: [
      { title: 'Inhale', instruction: 'Inhale through your nose for 4 seconds.', seconds: 4 },
      { title: 'Hold', instruction: 'Hold the breath gently for 7 seconds.', seconds: 7 },
      { title: 'Exhale', instruction: 'Exhale slowly through your mouth for 8 seconds.', seconds: 8 }
    ],
    cautions: 'Skip this if breath holds feel uncomfortable. Use steady breathing instead.',
    tags: ['breathing', 'sleep', 'calm']
  },
  {
    slug: '54321-grounding',
    title: '5-4-3-2-1 Grounding',
    durationOptions: [180, 300],
    category: 'Grounding',
    whenToUse: 'When your thoughts are spiraling or you feel disconnected.',
    steps: [
      { title: '5 things you see', instruction: 'Name five things you can see around you.' },
      { title: '4 things you feel', instruction: 'Name four sensations you can feel (clothing, chair, feet).' },
      { title: '3 things you hear', instruction: 'Name three sounds you can hear right now.' },
      { title: '2 things you smell', instruction: 'Name two scents you notice, or two smells you remember.' },
      { title: '1 thing you taste', instruction: 'Name one taste or sip water and notice it.' }
    ],
    tags: ['grounding', 'senses', 'panic']
  },
  {
    slug: 'body-scan-short',
    title: 'Body Scan (Short)',
    durationOptions: [180, 420],
    category: 'Body',
    whenToUse: 'When your body feels tense and busy.',
    steps: [
      { title: 'Settle', instruction: 'Sit or stand safely. Unclench your jaw and lower your shoulders.' },
      { title: 'Scan down', instruction: 'Move attention from head to toes, noticing tension without judging it.' },
      { title: 'Soften', instruction: 'On each exhale, imagine each area softening a little.' }
    ],
    tags: ['body', 'relaxation', 'awareness']
  },
  {
    slug: 'progressive-muscle-relaxation',
    title: 'Progressive Muscle Relaxation (Short)',
    durationOptions: [180, 480],
    category: 'Body',
    whenToUse: 'When your muscles feel clenched and restless.',
    steps: [
      { title: 'Hands and arms', instruction: 'Tense for 5 seconds, then release for 10 seconds.', seconds: 15 },
      { title: 'Shoulders and neck', instruction: 'Lift and tense for 5 seconds, then release for 10 seconds.', seconds: 15 },
      { title: 'Legs and feet', instruction: 'Tense for 5 seconds, then release for 10 seconds.', seconds: 15 }
    ],
    tags: ['muscle', 'relaxation', 'body']
  },
  {
    slug: 'thought-labeling',
    title: 'Thought Labeling',
    durationOptions: [120, 300],
    category: 'Cognitive',
    whenToUse: 'When thoughts are loud and repetitive.',
    steps: [
      { title: 'Name it', instruction: 'Say: “I am noticing the thought that …” and fill in the thought.' },
      { title: 'Label it', instruction: 'Label it gently: worry, prediction, memory, or self-criticism.' },
      { title: 'Return', instruction: 'Bring attention back to one breath or one object in the room.' }
    ],
    tags: ['thoughts', 'cognitive', 'defusion']
  },
  {
    slug: 'safe-place-visualization',
    title: 'Safe Place Visualization',
    durationOptions: [180, 420],
    category: 'Imagery',
    whenToUse: 'When you need an emotional reset.',
    steps: [
      { title: 'Choose a place', instruction: 'Picture a real or imagined place where you feel safe enough.' },
      { title: 'Add details', instruction: 'Notice colors, sounds, temperature, and textures.' },
      { title: 'Anchor phrase', instruction: 'Repeat quietly: “In this moment, I can be here and breathe.”' }
    ],
    tags: ['visualization', 'safe', 'calm']
  },
  {
    slug: 'mini-journaling',
    title: 'Mini Journaling',
    durationOptions: [180, 600],
    category: 'Reflection',
    whenToUse: 'When your mind feels crowded and you need clarity.',
    steps: [
      { title: 'Prompt 1', instruction: 'What am I feeling in my body right now?' },
      { title: 'Prompt 2', instruction: 'What do I need in the next 10 minutes?' },
      { title: 'Prompt 3', instruction: 'What is one kind thing I can tell myself?' }
    ],
    tags: ['journaling', 'reflection', 'self-compassion']
  },
  {
    slug: 'cold-water-reset',
    title: 'Cold Water / Temperature Change',
    durationOptions: [60, 180],
    category: 'Physical',
    whenToUse: 'When panic feels intense and you need a quick body interrupt.',
    steps: [
      { title: 'Cool sensation', instruction: 'Splash cool water on your face or hold a cool compress to cheeks.' },
      { title: 'Breathe slowly', instruction: 'Take 4 slow exhale-focused breaths.' },
      { title: 'Re-check', instruction: 'Notice if intensity has shifted even slightly.' }
    ],
    cautions: 'Avoid very cold exposure if you have heart, circulation, or temperature sensitivity concerns.',
    tags: ['physical', 'temperature', 'panic']
  }
];

export const panicFlowTemplates = {
  60: [
    { title: 'Paced breathing', instruction: 'Inhale for 4, exhale for 6. Keep shoulders soft.', seconds: 30 },
    { title: 'Name 5 neutral facts', instruction: 'Example: “My shirt is blue.” “The floor is steady.”', seconds: 20 },
    { title: 'Ground your feet', instruction: 'Press feet into the floor and notice support beneath you.', seconds: 10 }
  ],
  180: [
    { title: 'Box breathing', instruction: 'Follow inhale-hold-exhale-hold at 4 seconds each.', seconds: 60 },
    { title: '5-4-3-2-1 grounding', instruction: 'Name sensory details around you.', seconds: 75 },
    { title: 'Muscle release', instruction: 'Tense and release shoulders, hands, and jaw.', seconds: 25 },
    { title: 'Name 5 neutral facts', instruction: 'Use plain objective statements about your surroundings.', seconds: 20 }
  ],
  600: [
    { title: 'Paced breathing', instruction: 'Slow inhale and longer exhale with gentle rhythm.', seconds: 180 },
    { title: '5-4-3-2-1 grounding', instruction: 'Move through all five sensory categories.', seconds: 180 },
    { title: 'Progressive muscle relaxation', instruction: 'Hands, shoulders, legs: tense then release.', seconds: 120 },
    { title: 'Name 5 neutral facts', instruction: 'Anchor in objective facts and present safety.', seconds: 60 },
    { title: 'Reassure and orient', instruction: 'Say: “This wave will pass. I can take one next breath.”', seconds: 60 }
  ]
} as const;
