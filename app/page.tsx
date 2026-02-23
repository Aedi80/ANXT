import Link from 'next/link';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';

export default function HomePage() {
  return (
    <div className="space-y-8">
      <Card className="space-y-5 p-8 text-center">
        <h1 className="text-5xl font-bold tracking-tight">ANXT</h1>
        <p className="text-2xl">Ground yourself, right now.</p>
        <div className="mx-auto flex max-w-xl flex-col gap-3 sm:flex-row">
          <Link href="/panic" className="w-full"><Button block className="text-lg">I need help now</Button></Link>
          <Link href="/tools" className="w-full"><Button block variant="secondary" className="text-lg">Explore tools</Button></Link>
        </div>
        <p className="text-sm text-slate-600">No login. No judgement. Just support.</p>
      </Card>

      <Card>
        <h2 className="mb-2 text-xl font-semibold">Start with one small step</h2>
        <p>Choose Panic Mode for a guided flow or open Tools to pick the exercise that feels right for this moment.</p>
      </Card>
    </div>
  );
}
