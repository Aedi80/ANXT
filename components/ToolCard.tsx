import Link from 'next/link';
import { Tool } from '@/lib/types';
import { Card } from './Card';
import { Button } from './Button';

export function ToolCard({ tool }: { tool: Tool }) {
  return (
    <Card className="flex h-full flex-col gap-3">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{tool.category}</p>
      <h3 className="text-xl font-semibold">{tool.title}</h3>
      <p className="text-sm text-slate-700">{tool.whenToUse}</p>
      <p className="text-sm text-slate-600">{Math.min(...tool.durationOptions)}-{Math.max(...tool.durationOptions)} sec</p>
      <Link className="mt-auto" href={`/tools/${tool.slug}`}>
        <Button block>Start</Button>
      </Link>
    </Card>
  );
}
