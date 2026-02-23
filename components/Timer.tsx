'use client';

import { useEffect, useMemo, useState } from 'react';

export function Timer({ seconds, onDone }: { seconds: number; onDone?: () => void }) {
  const [remaining, setRemaining] = useState(seconds);

  useEffect(() => {
    setRemaining(seconds);
  }, [seconds]);

  useEffect(() => {
    if (remaining <= 0) {
      onDone?.();
      return;
    }
    const id = setInterval(() => setRemaining((r) => r - 1), 1000);
    return () => clearInterval(id);
  }, [remaining, onDone]);

  const mmss = useMemo(() => {
    const m = Math.floor(remaining / 60)
      .toString()
      .padStart(2, '0');
    const s = (remaining % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  }, [remaining]);

  return (
    <div className="rounded-xl bg-accentSoft p-4 text-center" aria-live="polite">
      <p className="text-sm text-slate-700">Time</p>
      <p className="text-3xl font-bold tabular-nums">{mmss}</p>
    </div>
  );
}
