'use client';

import { useState } from 'react';
import { useCalmSettings } from './CalmSettingsProvider';
import { Toggle } from './Toggle';

export function CalmModePanel() {
  const [open, setOpen] = useState(false);
  const { largeText, highContrast, reducedMotion, setLargeText, setHighContrast, setReducedMotion } = useCalmSettings();

  return (
    <div className="fixed bottom-4 right-4 z-40 w-72">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="focus-ring w-full rounded-xl bg-accent px-4 py-3 text-left font-semibold text-white"
      >
        Calm Mode Settings
      </button>
      {open ? (
        <div className="mt-2 space-y-2 rounded-2xl bg-accentSoft p-3 shadow-lg">
          <Toggle id="large-text" checked={largeText} onChange={setLargeText} label="Large text" />
          <Toggle id="high-contrast" checked={highContrast} onChange={setHighContrast} label="High contrast" />
          <Toggle id="reduced-motion" checked={reducedMotion} onChange={setReducedMotion} label="Reduce motion" />
        </div>
      ) : null}
    </div>
  );
}
