import { PanicFlow } from '@/components/PanicFlow';

export default function PanicPage() {
  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <h1 className="text-3xl font-bold">Panic Mode</h1>
      <PanicFlow />
    </div>
  );
}
