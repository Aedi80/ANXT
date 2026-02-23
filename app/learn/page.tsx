'use client';

const sections = [
  {
    title: 'What anxiety is',
    points: [
      'Anxiety is your body\'s alarm system trying to protect you.',
      'It can feel uncomfortable, but it does not mean you are broken.',
      'Common signs include fast heartbeat, racing thoughts, and tension.'
    ]
  },
  {
    title: 'What panic is',
    points: [
      'Panic can feel intense and sudden, with strong body sensations.',
      'Panic attacks usually peak and then settle, even if they feel scary.',
      'You are not failing; your nervous system is overloaded.'
    ]
  },
  {
    title: 'Why grounding works',
    points: [
      'Grounding brings attention back to the present moment.',
      'Slow exhale breathing can help signal safety to the nervous system.',
      'Simple sensory tasks reduce cognitive overload.'
    ]
  },
  {
    title: 'When to seek professional help',
    points: [
      'If anxiety or panic interrupts daily life often.',
      'If you avoid places or tasks due to fear.',
      'If you feel unsafe, contact emergency services and a trusted person now.'
    ]
  }
];

export default function LearnPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <h1 className="text-3xl font-bold">Learn</h1>
      <p className="text-slate-700">Short, practical information. No overwhelm.</p>
      {sections.map((section) => (
        <details key={section.title} className="rounded-2xl bg-white p-4 shadow-sm" open={section.title === 'What anxiety is'}>
          <summary className="cursor-pointer text-xl font-semibold">{section.title}</summary>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            {section.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </details>
      ))}
    </div>
  );
}
