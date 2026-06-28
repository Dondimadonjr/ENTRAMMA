import type { Metadata } from 'next';
import { siteMetadata } from '@/app/metadata';
import './globals.css';

export const metadata: Metadata = siteMetadata;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
