'use client';

import { useEffect, useMemo, useState } from 'react';
import { panicFlowTemplates } from '@/data/tools';
import { Button } from './Button';
import { Progress } from './Progress';

const EMERGENCY_NUMBERS = {
  US: '911',
  UK: '999',
  EU: '112',
  AU: '000',
  IN: '112'
};

type DurationKey = keyof typeof panicFlowTemplates;

export function PanicFlow() {
  const [selectedDuration, setSelectedDuration] = useState<DurationKey | null>(null);
  const [stepIndex, setStepIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [soundOn, setSoundOn] = useState(false);
  const [showWorse, setShowWorse] = useState(false);
  const [country, setCountry] = useState<keyof typeof EMERGENCY_NUMBERS>('US');

  const activeSteps = useMemo(() => (selectedDuration ? panicFlowTemplates[selectedDuration] : []), [selectedDuration]);
  const currentStep = activeSteps[stepIndex];

  useEffect(() => {
    const saved = sessionStorage.getItem('anxt-panic-state');
    if (!saved) return;
    const parsed = JSON.parse(saved) as {
      selectedDuration: DurationKey;
      stepIndex: number;
      timeLeft: number;
      soundOn: boolean;
    };
    if (parsed.selectedDuration) {
      setSelectedDuration(parsed.selectedDuration);
      setStepIndex(parsed.stepIndex);
      setTimeLeft(parsed.timeLeft);
      setSoundOn(parsed.soundOn);
    }
  }, []);

  useEffect(() => {
    if (!selectedDuration) return;
    sessionStorage.setItem('anxt-panic-state', JSON.stringify({ selectedDuration, stepIndex, timeLeft, soundOn }));
  }, [selectedDuration, stepIndex, timeLeft, soundOn]);

  useEffect(() => {
    if (!currentStep) return;
    if (!timeLeft) {
      setTimeLeft(currentStep.seconds ?? 20);
      return;
    }
    const tick = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          if (soundOn) {
            const audio = new Audio('data:audio/wav;base64,UklGRigAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQQAAAAA');
            audio.play().catch(() => undefined);
          }
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(tick);
  }, [currentStep, timeLeft, soundOn]);

  useEffect(() => {
    if (!currentStep || timeLeft !== 0) return;
    if (stepIndex < activeSteps.length - 1) {
      setStepIndex((i) => i + 1);
    }
  }, [timeLeft, currentStep, activeSteps.length, stepIndex]);

  const start = (duration: DurationKey) => {
    setSelectedDuration(duration);
    setStepIndex(0);
    setTimeLeft(0);
  };

  const reset = () => {
    setSelectedDuration(null);
    setStepIndex(0);
    setTimeLeft(0);
    sessionStorage.removeItem('anxt-panic-state');
  };

  return (
    <div className="space-y-6">
      <p className="text-lg font-medium">You&apos;re safe. Let&apos;s slow it down.</p>
      {!selectedDuration ? (
        <div className="grid gap-3 sm:grid-cols-3">
          <Button block className="text-lg" onClick={() => start(60)}>60 seconds</Button>
          <Button block className="text-lg" onClick={() => start(180)}>3 minutes</Button>
          <Button block className="text-lg" onClick={() => start(600)}>10 minutes</Button>
        </div>
      ) : (
        <div className="space-y-4 rounded-2xl bg-white p-5 shadow-sm">
          <Progress value={stepIndex + 1} total={activeSteps.length} />
          <h2 className="text-2xl font-semibold">{currentStep?.title}</h2>
          <p className="text-lg leading-relaxed">{currentStep?.instruction}</p>
          <p className="rounded-lg bg-accentSoft px-4 py-2 text-xl font-bold tabular-nums">{timeLeft}s</p>
          <div className="flex flex-wrap gap-3">
            <Button variant="secondary" onClick={() => setSoundOn((s) => !s)}>
              Sound: {soundOn ? 'On' : 'Off'}
            </Button>
            <Button variant="ghost" onClick={() => setStepIndex((i) => Math.min(i + 1, activeSteps.length - 1))}>Skip</Button>
            <Button variant="danger" onClick={reset}>End flow</Button>
          </div>
          {stepIndex === activeSteps.length - 1 && timeLeft === 0 ? (
            <div className="rounded-xl bg-accentSoft p-4">
              <p className="font-semibold">You made it through this wave.</p>
              <p className="text-sm">Take another sip of water and choose what you need next.</p>
            </div>
          ) : null}
        </div>
      )}

      <button type="button" className="focus-ring text-sm underline" onClick={() => setShowWorse((s) => !s)}>
        I&apos;m feeling worse
      </button>

      {showWorse ? (
        <div className="space-y-3 rounded-2xl border border-[#a85757] bg-[#fff4f4] p-4">
          <p className="font-semibold">If you are in immediate danger, call emergency services now.</p>
          <label className="flex items-center gap-2 text-sm" htmlFor="country">
            Country
            <select
              id="country"
              className="focus-ring rounded-lg border border-slate-300 px-2 py-1"
              value={country}
              onChange={(e) => setCountry(e.target.value as keyof typeof EMERGENCY_NUMBERS)}
            >
              {Object.keys(EMERGENCY_NUMBERS).map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </label>
          <p>Emergency number: <strong>{EMERGENCY_NUMBERS[country]}</strong></p>
          <p className="text-sm">Contact a trusted person and let them know you need support right now.</p>
        </div>
      ) : null}
      <p className="text-sm text-slate-600">ANXT is not a medical device. If you feel unsafe or might harm yourself, contact local emergency services.</p>
    </div>
  );
}
