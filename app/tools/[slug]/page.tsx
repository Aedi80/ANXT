'use client';

import Link from 'next/link';
import { notFound } from 'next/navigation';
import { useState } from 'react';
import { Button } from '@/components/Button';
import { Timer } from '@/components/Timer';
import { tools } from '@/data/tools';

export default function ToolDetailPage({ params }: { params: { slug: string } }) {
  const tool = tools.find((t) => t.slug === params.slug);
  const [activeStep, setActiveStep] = useState(0);
  const [started, setStarted] = useState(false);

  if (!tool) notFound();

  const step = tool.steps[activeStep];

  return (
    <div className="mx-auto max-w-2xl space-y-5">
      <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">{tool.category}</p>
      <h1 className="text-3xl font-bold">{tool.title}</h1>
      <p>{tool.whenToUse}</p>

      <div className="rounded-2xl bg-white p-5 shadow-sm">
        <h2 className="text-xl font-semibold">{step.title}</h2>
        <p className="mt-2 text-lg">{step.instruction}</p>
        {started && step.seconds ? <Timer key={`${tool.slug}-${activeStep}`} seconds={step.seconds} /> : null}

        <div className="mt-4 flex flex-wrap gap-3">
          {!started ? <Button onClick={() => setStarted(true)}>Start</Button> : null}
          <Button variant="secondary" onClick={() => setActiveStep((s) => Math.min(s + 1, tool.steps.length - 1))}>Next step</Button>
          <Button variant="ghost" onClick={() => { setActiveStep(0); setStarted(false); }}>Reset</Button>
        </div>
      </div>

      {tool.cautions ? <p className="rounded-xl bg-[#fff8e8] p-3 text-sm">Caution: {tool.cautions}</p> : null}

      <div className="flex gap-3">
        <Link href="/tools"><Button variant="secondary">Back to Tools</Button></Link>
        <Link href="/panic"><Button>Panic Mode</Button></Link>
      </div>
    </div>
  );
}
