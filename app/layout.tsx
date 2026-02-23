import type { Metadata } from 'next';
import './globals.css';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { CalmSettingsProvider } from '@/components/CalmSettingsProvider';
import { CalmModePanel } from '@/components/CalmModePanel';

export const metadata: Metadata = {
  title: 'ANXT',
  description: 'Ground yourself, right now.'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <CalmSettingsProvider>
          <SiteHeader />
          <main className="mx-auto min-h-[calc(100vh-180px)] w-full max-w-5xl px-4 py-8">{children}</main>
          <SiteFooter />
          <CalmModePanel />
        </CalmSettingsProvider>
      </body>
    </html>
  );
}
