'use client';

import { useMemo, useState } from 'react';
import { ToolCard } from '@/components/ToolCard';
import { tools } from '@/data/tools';

export default function ToolsPage() {
  const [query, setQuery] = useState('');
  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return tools.filter((tool) => [tool.title, tool.category, tool.tags.join(' ')].join(' ').toLowerCase().includes(q));
  }, [query]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Tools Library</h1>
        <p className="text-slate-700">Search by feeling, method, or keyword.</p>
      </div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="focus-ring w-full rounded-xl border border-slate-300 px-4 py-3 text-lg"
        placeholder="Search tools"
        aria-label="Search tools"
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((tool) => (
          <ToolCard key={tool.slug} tool={tool} />
        ))}
      </div>
    </div>
  );
}
