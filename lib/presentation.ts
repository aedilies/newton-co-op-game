export const SLIDES_COUNT = 11;

export const SLIDE_TOPICS = [
  'Титул',
  'Проблема',
  'Суть Git',
  'Три зоны',
  'Основной цикл',
  'Коммит',
  'Ветки и слияние',
  'Git ≠ GitHub',
  'Мини-демо',
  'Зачем сейчас',
  'Итог',
] as const;

export function clampSlideIndex(index: number, total: number = SLIDES_COUNT): number {
  if (total <= 0) return 0;
  if (!Number.isFinite(index)) return 0;
  return Math.max(0, Math.min(total - 1, Math.trunc(index)));
}

export function nextSlideIndex(current: number, total: number = SLIDES_COUNT): number {
  return clampSlideIndex(current + 1, total);
}

export function prevSlideIndex(current: number, total: number = SLIDES_COUNT): number {
  return clampSlideIndex(current - 1, total);
}

export function formatSlideCounter(index: number, total: number = SLIDES_COUNT): string {
  const safeIndex = clampSlideIndex(index, total) + 1;
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${pad(safeIndex)} / ${pad(Math.max(1, total))}`;
}

export function getSlideProgressPercent(index: number, total: number = SLIDES_COUNT): number {
  const safeTotal = Math.max(1, total);
  const safeIndex = clampSlideIndex(index, safeTotal);
  return ((safeIndex + 1) / safeTotal) * 100;
}

export type SlideDirection = 'next' | 'prev' | null;

export function resolveSlideKeyAction(key: string): SlideDirection {
  if (key === 'ArrowRight') return 'next';
  if (key === 'ArrowLeft') return 'prev';
  return null;
}
