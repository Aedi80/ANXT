'use client';

import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from 'react';

type Settings = {
  largeText: boolean;
  highContrast: boolean;
  reducedMotion: boolean;
  setLargeText: (value: boolean) => void;
  setHighContrast: (value: boolean) => void;
  setReducedMotion: (value: boolean) => void;
};

const CalmContext = createContext<Settings | null>(null);

const defaultState = {
  largeText: false,
  highContrast: false,
  reducedMotion: false
};

export function CalmSettingsProvider({ children }: { children: ReactNode }) {
  const [largeText, setLargeText] = useState(defaultState.largeText);
  const [highContrast, setHighContrast] = useState(defaultState.highContrast);
  const [reducedMotion, setReducedMotion] = useState(defaultState.reducedMotion);

  useEffect(() => {
    const stored = localStorage.getItem('anxt-calm-settings');
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (stored) {
      const parsed = JSON.parse(stored) as typeof defaultState;
      setLargeText(parsed.largeText);
      setHighContrast(parsed.highContrast);
      setReducedMotion(parsed.reducedMotion || prefersReduced);
    } else {
      setReducedMotion(prefersReduced);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('anxt-calm-settings', JSON.stringify({ largeText, highContrast, reducedMotion }));
    document.body.classList.toggle('large-text', largeText);
    document.body.classList.toggle('high-contrast', highContrast);
    document.body.classList.toggle('reduce-motion', reducedMotion);
  }, [largeText, highContrast, reducedMotion]);

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(() => undefined);
    }
  }, []);

  const value = useMemo(
    () => ({ largeText, highContrast, reducedMotion, setLargeText, setHighContrast, setReducedMotion }),
    [largeText, highContrast, reducedMotion]
  );

  return <CalmContext.Provider value={value}>{children}</CalmContext.Provider>;
}

export function useCalmSettings() {
  const ctx = useContext(CalmContext);
  if (!ctx) {
    throw new Error('useCalmSettings must be used in CalmSettingsProvider');
  }
  return ctx;
}
