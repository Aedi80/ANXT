import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-slate-200 px-4 py-8 text-sm text-slate-700">
      <div className="mx-auto flex max-w-5xl flex-col gap-3">
        <p>ANXT is not a medical device or emergency service. It offers supportive grounding tools only.</p>
        <p>
          If you feel unsafe or might harm yourself, contact local emergency services immediately and reach out to a
          trusted person.
        </p>
        <div className="flex gap-4">
          <Link href="/learn" className="underline">Learn</Link>
          <Link href="/about" className="underline">About</Link>
          <Link href="/tools" className="underline">Tools</Link>
        </div>
      </div>
    </footer>
  );
}
