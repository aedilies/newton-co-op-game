import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Git: как перестать терять версии',
  description: 'Автономная минималистичная презентация по дисциплине «Введение в ИВТ» для 1 курса.',
  openGraph: {
    title: 'Git: как перестать терять версии',
    description: 'Автономная минималистичная презентация по дисциплине «Введение в ИВТ» для 1 курса.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Git: как перестать терять версии',
    description: 'Автономная минималистичная презентация по дисциплине «Введение в ИВТ» для 1 курса.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body
        suppressHydrationWarning
        className="bg-[#0B0B0C] text-[#F3F2EE] antialiased selection:bg-[#F25C2A]/25"
        style={{ fontFamily: "system-ui, -apple-system, 'Inter', sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
