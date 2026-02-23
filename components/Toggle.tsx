'use client';

type Props = {
  checked: boolean;
  onChange: (value: boolean) => void;
  label: string;
  id: string;
};

export function Toggle({ checked, onChange, label, id }: Props) {
  return (
    <label htmlFor={id} className="flex items-center justify-between gap-3 rounded-xl bg-white/90 p-3">
      <span className="text-sm font-medium">{label}</span>
      <button
        id={id}
        aria-label={label}
        aria-pressed={checked}
        type="button"
        onClick={() => onChange(!checked)}
        className={`focus-ring h-8 w-14 rounded-full p-1 transition ${checked ? 'bg-accent' : 'bg-slate-300'}`}
      >
        <span
          className={`block h-6 w-6 rounded-full bg-white transition ${checked ? 'translate-x-6' : 'translate-x-0'}`}
        />
      </button>
    </label>
  );
}
