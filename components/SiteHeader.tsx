'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from './Button';

export function SiteHeader() {
  const router = useRouter();

  const quickExit = () => {
    sessionStorage.removeItem('anxt-panic-state');
    router.push('https://weather.com');
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-calmBg/95 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 p-3">
        <Link href="/" className="focus-ring rounded-lg px-2 py-1 text-xl font-bold tracking-wide">
          ANXT
        </Link>
        <div className="flex items-center gap-2">
          <Link href="/panic">
            <Button className="min-h-10 px-4" aria-label="Go to panic mode">
              Panic Mode
            </Button>
          </Link>
          <Button variant="secondary" onClick={quickExit} className="min-h-10 px-4" aria-label="Quick exit to neutral page">
            Quick Exit
          </Button>
        </div>
      </div>
    </header>
  );
}
