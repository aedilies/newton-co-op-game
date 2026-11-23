'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import minimalTitleImg from '@/src/assets/images/minimal_title.png';
import minimalCloudImg from '@/src/assets/images/minimal_cloud.png';
import minimalWorkImg from '@/src/assets/images/minimal_work.png';
import {
  SLIDES_COUNT,
  formatSlideCounter,
  getSlideProgressPercent,
  nextSlideIndex,
  prevSlideIndex,
  resolveSlideKeyAction,
} from '@/lib/presentation';

export default function PresentationDeck() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const action = resolveSlideKeyAction(event.key);
      if (action === 'next') {
        event.preventDefault();
        setCurrent((prev) => nextSlideIndex(prev, SLIDES_COUNT));
      } else if (action === 'prev') {
        event.preventDefault();
        setCurrent((prev) => prevSlideIndex(prev, SLIDES_COUNT));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const slideClass = (index: number) =>
    `absolute inset-0 flex items-center py-[clamp(1.5rem,4vh,3rem)] transition-opacity duration-300 ease-out ${
      current === index
        ? 'opacity-100 visible pointer-events-auto'
        : 'opacity-0 invisible pointer-events-none'
    }`;

  return (
    <main
      className="relative w-screen h-[100dvh] bg-[#0B0B0C] text-[#F3F2EE] grid grid-rows-[1fr_auto] px-[clamp(1.5rem,6vw,5rem)] overflow-hidden"
      aria-label="Презентация: Git — как перестать терять версии"
    >
      <div className="relative w-full max-w-[1120px] mx-auto min-h-0">
        {/* Slide 1 */}
        <section className={slideClass(0)} aria-hidden={current !== 0}>
          <div className="w-full grid grid-cols-1 md:grid-cols-[1.2fr_1fr] items-center gap-[clamp(1.75rem,4vw,4rem)]">
            <div>
              <h1 className="text-[clamp(2rem,4.6vw,3.75rem)] font-semibold leading-[1.08] tracking-[-0.03em] [text-wrap:balance] mb-[clamp(1.5rem,4vh,2.5rem)]">
                Git: как перестать терять версии
              </h1>
              <div className="w-16 h-px bg-[#F25C2A] mb-[clamp(1.25rem,3vh,1.75rem)]" />
              <p className="text-[clamp(1.2rem,2.1vw,1.6rem)] font-normal text-[#C8C6C0] leading-[1.45] tracking-[-0.01em]">
                Дисциплина «Введение в ИВТ» <span className="text-[#F25C2A]">·</span> 1 курс
              </p>
            </div>
            <div className="relative w-full aspect-[4/3] max-h-[28vh] md:max-h-none rounded-[2px] overflow-hidden">
              <Image
                src={minimalTitleImg}
                alt="Минималистичная графика: папки версий"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 440px"
                className="object-contain mix-blend-lighten"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </section>

        {/* Slide 2 */}
        <section className={slideClass(1)} aria-hidden={current !== 1}>
          <div className="w-full">
            <h2 className="text-[clamp(2rem,5vw,4rem)] font-semibold leading-[1.08] tracking-[-0.03em] [text-wrap:balance] mb-[clamp(1.75rem,4.5vh,3rem)]">
              Знакомая папка?
            </h2>
            <div className="flex flex-col max-w-[38rem] border-t border-[#242428] mb-[clamp(1.75rem,4.5vh,3rem)]">
              {[
                ['01', 'курсовая_финал.docx'],
                ['02', 'курсовая_финал_2.docx'],
                ['03', 'курсовая_ТОЧНО_ФИНАЛ.docx'],
              ].map(([idx, name]) => (
                <div
                  key={idx}
                  className="grid grid-cols-[3.5rem_1fr] gap-4 items-baseline text-[clamp(1.15rem,2vw,1.5rem)] py-[0.9rem] border-b border-[#242428] tracking-[-0.01em]"
                >
                  <span className="text-[1.1rem] tabular-nums text-[#F25C2A]">{idx}</span>
                  <span>{name}</span>
                </div>
              ))}
            </div>
            <p className="text-[clamp(1.3rem,2.4vw,1.85rem)] font-medium text-[#F25C2A]">
              Какой сдавать?
            </p>
          </div>
        </section>

        {/* Slide 3 */}
        <section className={slideClass(2)} aria-hidden={current !== 2}>
          <div className="w-full">
            <h2 className="text-[clamp(2rem,5vw,4rem)] font-semibold leading-[1.08] tracking-[-0.03em] [text-wrap:balance] mb-[clamp(1.75rem,4.5vh,3rem)]">
              Что такое Git
            </h2>
            <div className="flex flex-col gap-[clamp(0.85rem,2vh,1.35rem)] max-w-[56ch]">
              <p className="text-[clamp(1.2rem,2.2vw,1.6rem)] leading-[1.5]">
                Git — это <span className="text-[#F25C2A] font-medium">машина времени</span> для папки с проектом.
              </p>
              <p className="text-[clamp(1.2rem,2.2vw,1.6rem)] leading-[1.5]">
                Он запоминает <span className="text-[#F25C2A] font-medium">снимки</span> состояния, а не «разницу» между файлами.
              </p>
            </div>
            <div className="mt-[clamp(2rem,5vh,3.25rem)] max-w-[680px]">
              <svg
                viewBox="0 0 680 96"
                fill="none"
                className="w-full h-auto block overflow-visible"
                role="img"
                aria-label="Шкала снимков состояния во времени"
              >
                <line x1="20" y1="36" x2="650" y2="36" stroke="#3A3A40" strokeWidth="1" />
                <polyline points="642,31 651,36 642,41" stroke="#F25C2A" strokeWidth="1" fill="none" />
                <circle cx="90" cy="36" r="6" fill="#0B0B0C" stroke="#F3F2EE" strokeWidth="1" />
                <circle cx="240" cy="36" r="6" fill="#0B0B0C" stroke="#F3F2EE" strokeWidth="1" />
                <circle cx="390" cy="36" r="6" fill="#0B0B0C" stroke="#F3F2EE" strokeWidth="1" />
                <circle cx="540" cy="36" r="7" fill="#0B0B0C" stroke="#F25C2A" strokeWidth="1" />
                <text x="64" y="74" fill="#8E8D88" fontSize="18">снимок 1</text>
                <text x="214" y="74" fill="#8E8D88" fontSize="18">снимок 2</text>
                <text x="364" y="74" fill="#8E8D88" fontSize="18">снимок 3</text>
                <text x="514" y="74" fill="#F25C2A" fontSize="18">сейчас</text>
              </svg>
            </div>
          </div>
        </section>

        {/* Slide 4 */}
        <section className={slideClass(3)} aria-hidden={current !== 3}>
          <div className="w-full">
            <h2 className="text-[clamp(2rem,5vw,4rem)] font-semibold leading-[1.08] tracking-[-0.03em] [text-wrap:balance] mb-[clamp(1.75rem,4.5vh,3rem)]">
              Три зоны
            </h2>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-[clamp(0.75rem,2vw,1.5rem)] mt-2">
              <div className="flex-1 min-w-0 border border-[#3A3A40] rounded-[2px] px-[clamp(1rem,2vw,1.5rem)] py-[clamp(1.25rem,3vw,2.15rem)] flex flex-col gap-[0.55rem]">
                <div className="text-[1.1rem] tabular-nums text-[#F25C2A] mb-1">01</div>
                <div className="text-[clamp(1.15rem,2vw,1.5rem)] font-medium">Рабочая зона</div>
                <div className="text-[clamp(1.1rem,1.6vw,1.25rem)] text-[#8E8D88]">стол</div>
              </div>
              <div className="flex items-center justify-center rotate-90 md:rotate-0 py-1 md:py-0" aria-hidden="true">
                <svg width="40" height="16" viewBox="0 0 40 16" fill="none">
                  <line x1="0" y1="8" x2="37" y2="8" stroke="#F25C2A" strokeWidth="1" />
                  <polyline points="31,3 38,8 31,13" stroke="#F25C2A" strokeWidth="1" fill="none" />
                </svg>
              </div>
              <div className="flex-1 min-w-0 border border-[#3A3A40] rounded-[2px] px-[clamp(1rem,2vw,1.5rem)] py-[clamp(1.25rem,3vw,2.15rem)] flex flex-col gap-[0.55rem]">
                <div className="text-[1.1rem] tabular-nums text-[#F25C2A] mb-1">02</div>
                <div className="text-[clamp(1.15rem,2vw,1.5rem)] font-medium">Staging</div>
                <div className="text-[clamp(1.1rem,1.6vw,1.25rem)] text-[#8E8D88]">коробка</div>
              </div>
              <div className="flex items-center justify-center rotate-90 md:rotate-0 py-1 md:py-0" aria-hidden="true">
                <svg width="40" height="16" viewBox="0 0 40 16" fill="none">
                  <line x1="0" y1="8" x2="37" y2="8" stroke="#F25C2A" strokeWidth="1" />
                  <polyline points="31,3 38,8 31,13" stroke="#F25C2A" strokeWidth="1" fill="none" />
                </svg>
              </div>
              <div className="flex-1 min-w-0 border border-[#3A3A40] rounded-[2px] px-[clamp(1rem,2vw,1.5rem)] py-[clamp(1.25rem,3vw,2.15rem)] flex flex-col gap-[0.55rem]">
                <div className="text-[1.1rem] tabular-nums text-[#F25C2A] mb-1">03</div>
                <div className="text-[clamp(1.15rem,2vw,1.5rem)] font-medium">Репозиторий</div>
                <div className="text-[clamp(1.1rem,1.6vw,1.25rem)] text-[#8E8D88]">склад</div>
              </div>
            </div>
            <p className="mt-[clamp(1.75rem,4vh,2.5rem)] text-[clamp(1.15rem,1.9vw,1.45rem)] text-[#8E8D88]">
              стол <span className="text-[#F25C2A] font-medium">→</span> коробка{' '}
              <span className="text-[#F25C2A] font-medium">→</span> склад
            </p>
          </div>
        </section>

        {/* Slide 5 */}
        <section className={slideClass(4)} aria-hidden={current !== 4}>
          <div className="w-full">
            <h2 className="text-[clamp(2rem,5vw,4rem)] font-semibold leading-[1.08] tracking-[-0.03em] [text-wrap:balance] mb-[clamp(1.75rem,4.5vh,3rem)]">
              Основной цикл
            </h2>
            <div className="flex flex-col md:flex-row items-start md:items-end gap-3 md:gap-[clamp(1rem,2.5vw,2rem)] mt-4 md:py-5 md:border-t md:border-b border-[#242428] w-fit max-w-full">
              <div className="flex flex-col gap-[0.65rem]">
                <span className="text-[clamp(1.1rem,1.5vw,1.2rem)] text-[#F25C2A] font-medium">проверь</span>
                <span className="text-[clamp(1.15rem,1.9vw,1.5rem)] font-medium leading-[1.2] whitespace-nowrap">
                  git status
                </span>
              </div>
              <div className="flex items-center h-[1.8rem] rotate-90 md:rotate-0 select-none" aria-hidden="true">
                <svg width="28" height="14" viewBox="0 0 28 14" fill="none">
                  <line x1="0" y1="7" x2="25" y2="7" stroke="#F25C2A" strokeWidth="1" />
                  <polyline points="20,2 26,7 20,12" stroke="#F25C2A" strokeWidth="1" fill="none" />
                </svg>
              </div>
              <div className="flex flex-col gap-[0.65rem]">
                <span className="text-[clamp(1.1rem,1.5vw,1.2rem)] text-[#F25C2A] font-medium">подготовь</span>
                <span className="text-[clamp(1.15rem,1.9vw,1.5rem)] font-medium leading-[1.2] whitespace-nowrap">
                  git add
                </span>
              </div>
              <div className="flex items-center h-[1.8rem] rotate-90 md:rotate-0 select-none" aria-hidden="true">
                <svg width="28" height="14" viewBox="0 0 28 14" fill="none">
                  <line x1="0" y1="7" x2="25" y2="7" stroke="#F25C2A" strokeWidth="1" />
                  <polyline points="20,2 26,7 20,12" stroke="#F25C2A" strokeWidth="1" fill="none" />
                </svg>
              </div>
              <div className="flex flex-col gap-[0.65rem]">
                <span className="text-[clamp(1.1rem,1.5vw,1.2rem)] text-[#F25C2A] font-medium">сохрани</span>
                <span className="text-[clamp(1.15rem,1.9vw,1.5rem)] font-medium leading-[1.2] whitespace-nowrap">
                  git commit -m &quot;...&quot;
                </span>
              </div>
              <div className="flex items-center h-[1.8rem] rotate-90 md:rotate-0 select-none" aria-hidden="true">
                <svg width="28" height="14" viewBox="0 0 28 14" fill="none">
                  <line x1="0" y1="7" x2="25" y2="7" stroke="#F25C2A" strokeWidth="1" />
                  <polyline points="20,2 26,7 20,12" stroke="#F25C2A" strokeWidth="1" fill="none" />
                </svg>
              </div>
              <div className="flex flex-col gap-[0.65rem]">
                <span className="text-[clamp(1.1rem,1.5vw,1.2rem)] text-[#F25C2A] font-medium">отправь</span>
                <span className="text-[clamp(1.15rem,1.9vw,1.5rem)] font-medium leading-[1.2] whitespace-nowrap">
                  git push
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 6 */}
        <section className={slideClass(5)} aria-hidden={current !== 5}>
          <div className="w-full">
            <h2 className="text-[clamp(2rem,5vw,4rem)] font-semibold leading-[1.08] tracking-[-0.03em] [text-wrap:balance] mb-[clamp(1.75rem,4.5vh,3rem)]">
              Коммит
            </h2>
            <p className="text-[clamp(1.25rem,2.3vw,1.7rem)] font-medium mb-[clamp(2rem,5vh,3rem)]">
              Коммит = <span className="text-[#F25C2A]">снимок</span> + сообщение + автор + время
            </p>
            <div className="flex flex-col border-t border-[#242428] max-w-[46rem]">
              <div className="grid grid-cols-1 md:grid-cols-[11rem_1fr] gap-1 md:gap-4 items-baseline py-[1.15rem] border-b border-[#242428] text-[clamp(1.15rem,1.9vw,1.45rem)]">
                <span className="text-[#8E8D88]">Плохо</span>
                <span className="text-[#8E8D88]">«fix»</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-[11rem_1fr] gap-1 md:gap-4 items-baseline py-[1.15rem] border-b border-[#242428] text-[clamp(1.15rem,1.9vw,1.45rem)]">
                <span className="text-[#F25C2A] font-medium">Хорошо</span>
                <span>«добавил вывод массива в консоль»</span>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 7 */}
        <section className={slideClass(6)} aria-hidden={current !== 6}>
          <div className="w-full">
            <h2 className="text-[clamp(2rem,5vw,4rem)] font-semibold leading-[1.08] tracking-[-0.03em] [text-wrap:balance] mb-[clamp(1.75rem,4.5vh,3rem)]">
              Ветки и слияние
            </h2>
            <div className="flex flex-col gap-[clamp(0.85rem,2vh,1.35rem)] max-w-[56ch]">
              <p className="text-[clamp(1.2rem,2.2vw,1.6rem)] leading-[1.5]">
                <span className="text-[#F25C2A] font-medium">Ветка</span> — параллельная версия проекта.
              </p>
              <p className="text-[clamp(1.2rem,2.2vw,1.6rem)] leading-[1.5]">
                <span className="text-[#F25C2A] font-medium">Слияние</span> возвращает изменения в основную ветку.
              </p>
            </div>
            <div className="mt-[clamp(1.75rem,4vh,2.75rem)] w-full max-w-[780px]">
              <svg
                viewBox="0 0 760 210"
                fill="none"
                className="w-full h-auto block overflow-visible"
                role="img"
                aria-label="Схема ветки и слияния в main"
              >
                <text x="8" y="67" fill="#F3F2EE" fontSize="22">
                  main
                </text>
                <line x1="88" y1="60" x2="720" y2="60" stroke="#F3F2EE" strokeWidth="1" />
                <polyline points="712,55 721,60 712,65" stroke="#F25C2A" strokeWidth="1" fill="none" />

                <path
                  d="M 224 64 C 260 110, 270 148, 315 148 L 485 148 C 530 148, 545 105, 575 65"
                  stroke="#F25C2A"
                  strokeWidth="1"
                  fill="none"
                />
                <polyline points="564,69 575,65 574,76" stroke="#F25C2A" strokeWidth="1" fill="none" />

                <circle cx="130" cy="60" r="6" fill="#0B0B0C" stroke="#F3F2EE" strokeWidth="1" />
                <circle cx="220" cy="60" r="6" fill="#0B0B0C" stroke="#F3F2EE" strokeWidth="1" />
                <circle cx="400" cy="60" r="6" fill="#0B0B0C" stroke="#F3F2EE" strokeWidth="1" />
                <circle cx="580" cy="60" r="6" fill="#0B0B0C" stroke="#F25C2A" strokeWidth="1" />
                <circle cx="670" cy="60" r="6" fill="#0B0B0C" stroke="#F3F2EE" strokeWidth="1" />

                <circle cx="345" cy="148" r="6" fill="#0B0B0C" stroke="#F25C2A" strokeWidth="1" />
                <circle cx="455" cy="148" r="6" fill="#0B0B0C" stroke="#F25C2A" strokeWidth="1" />

                <text x="372" y="190" fill="#F25C2A" fontSize="22">
                  ветка
                </text>
                <text x="554" y="34" fill="#F25C2A" fontSize="22">
                  merge
                </text>
              </svg>
            </div>
          </div>
        </section>

        {/* Slide 8 */}
        <section className={slideClass(7)} aria-hidden={current !== 7}>
          <div className="w-full grid grid-cols-1 md:grid-cols-[1.15fr_1fr] items-center gap-[clamp(1.75rem,4vw,3.5rem)]">
            <div>
              <h2 className="text-[clamp(2rem,5vw,4rem)] font-semibold leading-[1.08] tracking-[-0.03em] [text-wrap:balance] mb-[clamp(1.5rem,4vh,2.5rem)]">
                Git <span className="text-[#F25C2A]">≠</span> GitHub
              </h2>
              <div className="flex flex-col border-t border-[#242428]">
                <div className="py-[clamp(1.1rem,2.5vh,1.75rem)] border-b border-[#242428] flex flex-col gap-2">
                  <div className="text-[clamp(1.2rem,2vw,1.5rem)] font-medium text-[#F25C2A]">Git</div>
                  <p className="text-[clamp(1.15rem,1.9vw,1.45rem)] leading-[1.45]">
                    Программа-дневник на вашем компьютере.
                  </p>
                </div>
                <div className="py-[clamp(1.1rem,2.5vh,1.75rem)] border-b border-[#242428] flex flex-col gap-2">
                  <div className="text-[clamp(1.2rem,2vw,1.5rem)] font-medium text-[#F25C2A]">GitHub / GitLab</div>
                  <p className="text-[clamp(1.15rem,1.9vw,1.45rem)] leading-[1.45]">
                    Сайт, где дневник лежит в облаке.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative w-full aspect-[4/3] max-h-[26vh] md:max-h-none rounded-[2px] overflow-hidden">
              <Image
                src={minimalCloudImg}
                alt="Минималистичная графика: локальный узел и облачная сеть"
                fill
                sizes="(max-width: 768px) 100vw, 440px"
                className="object-contain mix-blend-lighten"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </section>

        {/* Slide 9 */}
        <section className={slideClass(8)} aria-hidden={current !== 8}>
          <div className="w-full">
            <h2 className="text-[clamp(2rem,5vw,4rem)] font-semibold leading-[1.08] tracking-[-0.03em] [text-wrap:balance] mb-[clamp(1.75rem,4.5vh,3rem)]">
              Мини-демо
            </h2>
            <div className="flex flex-col border-t border-[#242428] max-w-[54rem]">
              {[
                ['01', 'git init', 'создаёт репозиторий в папке проекта'],
                ['02', 'git status', 'показывает, какие файлы изменились'],
                ['03', 'git add .', 'отправляет изменения в Staging'],
                ['04', 'git commit -m "..."', 'сохраняет снимок состояния с описанием'],
                ['05', 'git log --oneline', 'показывает историю коммитов списком'],
              ].map(([idx, cmd, desc]) => (
                <div
                  key={cmd}
                  className="grid grid-cols-1 md:grid-cols-[3.25rem_18rem_1fr] gap-1 md:gap-5 items-baseline py-[clamp(0.7rem,1.5vh,1rem)] border-b border-[#242428]"
                >
                  <span className="text-[1.1rem] tabular-nums text-[#F25C2A]">{idx}</span>
                  <span className="text-[clamp(1.15rem,1.8vw,1.45rem)] font-medium text-[#F25C2A] whitespace-nowrap">
                    {cmd}
                  </span>
                  <span className="text-[clamp(1.1rem,1.7vw,1.35rem)]">{desc}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Slide 10 */}
        <section className={slideClass(9)} aria-hidden={current !== 9}>
          <div className="w-full grid grid-cols-1 md:grid-cols-[1.15fr_1fr] items-center gap-[clamp(1.75rem,4vw,3.5rem)]">
            <div>
              <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-semibold leading-[1.08] tracking-[-0.03em] [text-wrap:balance] mb-[clamp(1.5rem,4vh,2.5rem)]">
                Зачем это уже сейчас
              </h2>
              <div className="flex flex-col border-t border-[#242428]">
                <div className="grid grid-cols-[3.25rem_1fr] gap-3 items-baseline py-[clamp(0.9rem,2vh,1.25rem)] border-b border-[#242428]">
                  <span className="text-[1.1rem] tabular-nums text-[#F25C2A]">01</span>
                  <div>
                    <div className="text-[clamp(1.15rem,1.9vw,1.45rem)] font-medium">Лабы</div>
                    <p className="text-[clamp(1.1rem,1.6vw,1.25rem)] text-[#8E8D88] mt-1">
                      Откат назад, если программа перестала запускаться
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-[3.25rem_1fr] gap-3 items-baseline py-[clamp(0.9rem,2vh,1.25rem)] border-b border-[#242428]">
                  <span className="text-[1.1rem] tabular-nums text-[#F25C2A]">02</span>
                  <div>
                    <div className="text-[clamp(1.15rem,1.9vw,1.45rem)] font-medium">Курсовые</div>
                    <p className="text-[clamp(1.1rem,1.6vw,1.25rem)] text-[#8E8D88] mt-1">
                      Одна папка и полная история правок
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-[3.25rem_1fr] gap-3 items-baseline py-[clamp(0.9rem,2vh,1.25rem)] border-b border-[#242428]">
                  <span className="text-[1.1rem] tabular-nums text-[#F25C2A]">03</span>
                  <div>
                    <div className="text-[clamp(1.15rem,1.9vw,1.45rem)] font-medium">Командные проекты</div>
                    <p className="text-[clamp(1.1rem,1.6vw,1.25rem)] text-[#8E8D88] mt-1">
                      Работа без пересылки архивов
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-full aspect-[4/3] max-h-[26vh] md:max-h-none rounded-[2px] overflow-hidden">
              <Image
                src={minimalWorkImg}
                alt="Минималистичная графика: три параллельных трека с контрольными точками"
                fill
                sizes="(max-width: 768px) 100vw, 440px"
                className="object-contain mix-blend-lighten"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </section>

        {/* Slide 11 */}
        <section className={slideClass(10)} aria-hidden={current !== 10}>
          <div className="w-full">
            <h2 className="text-[clamp(2rem,5vw,4rem)] font-semibold leading-[1.08] tracking-[-0.03em] [text-wrap:balance] mb-[clamp(1.75rem,4.5vh,3rem)]">
              Итог
            </h2>
            <ul className="list-none flex flex-col border-t border-[#242428] max-w-[48rem]">
              <li className="grid grid-cols-[3.5rem_1fr] gap-4 items-baseline text-[clamp(1.2rem,2.1vw,1.6rem)] leading-[1.45] py-[clamp(0.9rem,2vh,1.35rem)] border-b border-[#242428]">
                <span className="text-[1.1rem] tabular-nums text-[#F25C2A]">01</span>
                <span>Git = <span className="text-[#F25C2A] font-medium">снимки</span></span>
              </li>
              <li className="grid grid-cols-[3.5rem_1fr] gap-4 items-baseline text-[clamp(1.2rem,2.1vw,1.6rem)] leading-[1.45] py-[clamp(0.9rem,2vh,1.35rem)] border-b border-[#242428]">
                <span className="text-[1.1rem] tabular-nums text-[#F25C2A]">02</span>
                <span>Цикл <span className="text-[#F25C2A] font-medium">status → add → commit → push</span></span>
              </li>
              <li className="grid grid-cols-[3.5rem_1fr] gap-4 items-baseline text-[clamp(1.2rem,2.1vw,1.6rem)] leading-[1.45] py-[clamp(0.9rem,2vh,1.35rem)] border-b border-[#242428]">
                <span className="text-[1.1rem] tabular-nums text-[#F25C2A]">03</span>
                <span>Ветки — это <span className="text-[#F25C2A] font-medium">безопасно</span></span>
              </li>
            </ul>
          </div>
        </section>
      </div>

      <footer className="relative w-full max-w-[1120px] mx-auto flex items-center justify-end gap-6 text-[1.1rem] text-[#8E8D88] pt-[clamp(0.85rem,2vh,1.35rem)] pb-[clamp(1.1rem,2.8vh,2rem)] border-t border-[#242428] select-none">
        <div
          className="absolute -top-px left-0 h-px bg-[#F25C2A] transition-[width] duration-300 ease-out"
          style={{ width: `${getSlideProgressPercent(current, SLIDES_COUNT)}%` }}
        />
        <span className="text-[1.1rem] tabular-nums text-[#F25C2A] tracking-[0.02em]" aria-live="polite">
          {formatSlideCounter(current, SLIDES_COUNT)}
        </span>
      </footer>
    </main>
  );
}
