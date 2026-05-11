import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Gamepad2, Calendar, Settings, Zap, LineChart,
  Star, Code, PenTool, Search, ChevronLeft, ChevronRight, ArrowUp, Menu, X,
  MessageSquare, LayoutDashboard, GitMerge, Users, Target, Award
} from 'lucide-react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Введение', href: '#about' },
    { name: 'Проблема', href: '#problem' },
    { name: 'Концепция', href: '#concept' },
    { name: 'Роли', href: '#roles' },
    { name: 'Демо', href: '#demo' },
    { name: 'Итоги', href: '#results' },
  ];

  return (
    <div className="min-h-screen relative selection:bg-brand-accent selection:text-white pb-10 sm:pb-0">
      {/* Header */}
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-brand-bg/90 backdrop-blur-md border-b border-brand-card shadow-lg py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Gamepad2 className="w-8 h-8 text-brand-accent" />
            <span className="font-heading font-bold text-xl hidden sm:block tracking-wide">
              tCOFELET Sim
            </span>
          </div>
          
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-gray-400 hover:text-white transition-colors font-medium text-xs tracking-widest uppercase"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <button 
            className="md:hidden text-white" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-brand-card border-b border-gray-800 py-4 px-4 flex flex-col gap-4">
             {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-300 hover:text-white transition-colors py-3 text-sm tracking-widest uppercase border-b border-white/5"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section id="about" className="min-h-[100svh] flex flex-col justify-center px-4 relative overflow-hidden pt-24 pb-12 w-full">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-accent/10 rounded-full blur-[120px] pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="w-8 h-[1px] bg-brand-accent"></span>
                <span className="text-brand-accent uppercase tracking-widest text-xs font-bold">Магистерская диссертация</span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-heading leading-[1.1] mb-8">
                Симулятор <br />
                <span className="font-light text-gray-300">
                  ИТ-команды
                </span>
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed mb-12 max-w-lg font-light">
                Кооперативная 3D-среда, обучающая студентов слаженной работе. Основана на методологии tCOFELET.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[400px] sm:h-[500px] w-full flex items-center justify-center perspective-1000"
            >
               <InteractiveShapes />
            </motion.div>
          </div>
        </section>

        {/* Problem Statement */}
        <section id="problem" className="min-h-[100svh] flex flex-col justify-center py-24 w-full border-t border-gray-800 bg-[#111215]/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-8 h-[1px] bg-red-500"></span>
                  <span className="text-red-500 uppercase tracking-widest text-xs font-bold">Актуальность проблемы</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-light mb-8 leading-tight">
                  Разрыв между <span className="font-bold">академической теорией</span> и <span className="font-bold">реалиями бизнеса</span>
                </h2>
                <div className="space-y-6 text-gray-400 font-light text-sm md:text-base leading-relaxed">
                  <p>
                    Система высшего образования отлично справляется с задачей обучения синтаксису языков программирования и алгоритмам. Однако, по статистике, более 70% IT-проектов терпят неудачу или выходят за рамки бюджета не из-за технической некомпетентности, а из-за <strong>кризиса коммуникаций</strong>.
                  </p>
                  <p>
                    Студенты не умеют работать в условиях неопределенности, распределять ответственность в команде и пользоваться инструментами коллективной разработки на профессиональном уровне.
                  </p>
                </div>
              </div>
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                <div className="p-8 border border-gray-800 bg-[#111215]/80 text-center">
                  <div className="text-5xl font-light text-red-400 mb-4">60%</div>
                  <div className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">Выпускников ВУЗов</div>
                  <div className="text-sm font-light text-gray-400">испытывают стресс при первой работе в команде</div>
                </div>
                <div className="p-8 border border-gray-800 bg-[#111215]/80 text-center">
                  <div className="text-5xl font-light text-yellow-500 mb-4">3-6</div>
                  <div className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">Месяцев</div>
                  <div className="text-sm font-light text-gray-400">тратит бизнес на первичную адаптацию Junior-а</div>
                </div>
                <div className="p-8 border border-gray-800 bg-[#111215]/80 text-center sm:col-span-2">
                  <div className="text-3xl font-light text-white mb-2">Решение:</div>
                  <div className="text-sm font-light text-brand-accent">Симуляционная игровая практика до трудоустройства</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Concept Section */}
        <section id="concept" className="min-h-[100svh] flex flex-col justify-center py-24 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-light mb-4">Концепция</h2>
              <p className="text-gray-400 max-w-2xl text-lg font-light">Цикл игры построен на методологии Team-Centric e-Learning Framework (tCOFELET)</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ConceptCard 
                icon={<Calendar className="w-5 h-5 text-brand-accent" />}
                title="Планирование"
                desc="Команда распределяет роли и задачи на спринт"
                delay={0}
              />
              <ConceptCard 
                icon={<Settings className="w-5 h-5 text-brand-accent" />}
                title="Выполнение"
                desc="Каждый игрок выполняет свою роль: Backend, Frontend, QA, PM"
                delay={0.1}
              />
              <ConceptCard 
                icon={<Zap className="w-5 h-5 text-brand-accent" />}
                title="Кризисы"
                desc="Случайные события требуют срочной координации всей команды"
                delay={0.2}
              />
              <ConceptCard 
                icon={<LineChart className="w-5 h-5 text-brand-accent" />}
                title="Рефлексия"
                desc="Аналитика и обсуждение результатов после сессии"
                delay={0.3}
              />
            </div>
          </div>
        </section>

        {/* Roles Section */}
        <section id="roles" className="min-h-[100svh] flex flex-col justify-center py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-4">Роли в игре</h2>
            <p className="text-gray-400">Каждый студент берет на себя уникальную ответственность</p>
          </div>
          
          <RolesTabs />
        </section>

        {/* Features / Mechanics */}
        <section id="features" className="min-h-[100svh] flex flex-col justify-center py-24 border-t border-gray-800 bg-brand-bg/50 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-light mb-4">Ключевые особенности</h2>
              <p className="text-gray-400 max-w-2xl text-lg font-light">Взаимодействие и погружение в рабочий процесс IT-команды</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard 
                icon={<MessageSquare className="w-6 h-6" />}
                title="Командное взаимодействие"
                desc="Система эффективного обмена информацией и синхронизации статусов между участниками."
              />
              <FeatureCard 
                icon={<LayoutDashboard className="w-6 h-6" />}
                title="Канбан-доска"
                desc="Интерактивная доска задач, синхронизирующаяся между всеми игроками в реальном времени."
              />
              <FeatureCard 
                icon={<GitMerge className="w-6 h-6" />}
                title="Ветвление и интеграция"
                desc="Симуляция Git-процессов. Игроки 'коммитят' свои мини-игры в общую сборку проекта."
              />
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section id="stack" className="min-h-[100svh] flex flex-col justify-center py-24 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-light mb-16">Технологии</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 border-y border-gray-800 py-16">
              {[
                { name: 'Unity', short: 'U' },
                { name: 'C#', short: 'C#' },
                { name: 'PUN 2', short: 'PUN' },
                { name: 'WebGL', short: 'WGL' },
                { name: 'SQLite', short: 'SQL' },
                { name: 'Nginx', short: 'NGX' },
              ].map((tech, i) => (
                <motion.div 
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center gap-6 group"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-gray-800 flex items-center justify-center text-xl font-light text-gray-300 group-hover:border-brand-accent group-hover:text-brand-accent transition-colors cursor-pointer">
                    {tech.short}
                  </div>
                  <span className="text-xs tracking-widest font-medium uppercase text-gray-600 text-center">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="min-h-[100svh] flex flex-col justify-center py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h2 className="text-3xl md:text-4xl font-light mb-16">Ход игры</h2>
          
          <div className="relative border-l border-gray-800 ml-4 md:ml-0 md:space-y-0">
            <TimelineItem time="00:00" title="Вход и лобби" desc="Игроки присоединяются к сессии и выбирают профессиональные роли." />
            <TimelineItem time="02:00" title="Планирование" desc="Project Manager распределяет задачи на общей канбан-доске. Обсуждение спринта." />
            <TimelineItem time="05:00" title="Выполнение" desc="Все расходятся по виртуальным рабочим местам для выполнения мини-игр своей профессии." />
            <TimelineItem time="10:00" title="Кризис" desc="Внезапное событие: 'Сервер перегружен!' или 'Изменились требования'. Требует срочной перегруппировки." />
            <TimelineItem time="14:00" title="Завершение" desc="Экран статистики. Анализ эффективности команды и индивидуальный вклад. Рефлексия." isLast />
          </div>
        </section>

        {/* Demo Carousel */}
        <section id="demo" className="min-h-[100svh] flex flex-col justify-center py-24 overflow-hidden w-full">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-light mb-4">Интерфейсы игры</h2>
              <p className="text-gray-400">Демонстрация рабочих зон игроков</p>
            </div>
            
            <DemoCarousel />
          </div>
        </section>

        {/* Target Audience */}
        <section className="min-h-[100svh] flex flex-col justify-center py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-gray-800 w-full">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-light mb-10">Целевая аудитория</h2>
              <div className="space-y-8">
                <div className="border-l-2 border-brand-accent pl-6 py-1">
                  <h4 className="text-xl font-medium mb-3">Студенты IT-направлений</h4>
                  <p className="text-gray-400 font-light text-sm leading-relaxed">
                    Студенты 2-4 курсов, которым не хватает реальной практики работы в команде и понимания процессов разработки.
                  </p>
                </div>
                <div className="border-l-2 border-purple-500 pl-6 py-1">
                  <h4 className="text-xl font-medium mb-3">Начинающие специалисты (Junior)</h4>
                  <p className="text-gray-400 font-light text-sm leading-relaxed">
                    Выпускники, проходящие онбординг или стажировку в IT-компаниях, для быстрой адаптации к корпоративной среде.
                  </p>
                </div>
                <div className="border-l-2 border-green-500 pl-6 py-1">
                  <h4 className="text-xl font-medium mb-3">Преподаватели ВУЗов</h4>
                  <p className="text-gray-400 font-light text-sm leading-relaxed">
                    Как инструмент для проведения лабораторных работ и практических занятий по дисциплинам программной инженерии.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-1 relative w-full">
              <div className="aspect-square max-h-[400px] border border-gray-800 flex items-center justify-center p-8 relative overflow-hidden bg-[#111215]/50 group mx-auto">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/20 rounded-full blur-3xl group-hover:bg-brand-accent/30 transition-colors"></div>
                 <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl group-hover:bg-purple-500/30 transition-colors"></div>
                 <Users className="w-32 h-32 text-gray-700/50 mx-auto relative z-10" strokeWidth={1} />
                 <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#111215] to-transparent z-10"></div>
                 <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Scientific Novelty */}
        <section className="min-h-[100svh] flex flex-col justify-center py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-gray-800 w-full">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-4">Научная новизна</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">Вклад исследования в развитие образовательных технологий</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 border border-gray-800 bg-[#111215]/50 group hover:border-brand-accent transition-colors">
              <h4 className="text-xl font-medium mb-4 text-gray-200 group-hover:text-brand-accent transition-colors">Симбиоз tCOFELET и 3D-симуляций</h4>
              <p className="text-gray-400 font-light text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                Доказательство эффективности применения фреймворка tCOFELET в иммерсивных 3D-средах для симуляции реальных производственных IT-процессов, в отличие от классических текстовых систем.
              </p>
            </div>
            <div className="p-8 border border-gray-800 bg-[#111215]/50 group hover:border-purple-400 transition-colors">
              <h4 className="text-xl font-medium mb-4 text-gray-200 group-hover:text-purple-400 transition-colors">Генерация проектных кризисов</h4>
              <p className="text-gray-400 font-light text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                Разработка алгоритма динамической генерации внештатных ситуаций (уязвимости, падения серверов, изменения требований), требующих мгновенной межролевой координации.
              </p>
            </div>
            <div className="p-8 border border-gray-800 bg-[#111215]/50 group hover:border-green-400 transition-colors">
              <h4 className="text-xl font-medium mb-4 text-gray-200 group-hover:text-green-400 transition-colors">Интегрированная система рефлексии</h4>
              <p className="text-gray-400 font-light text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                Автоматизированный сбор метрик взаимодействия (частота коммуникаций, скорость перераспределения задач) с последующей визуализацией для этапа командной рефлексии.
              </p>
            </div>
            <div className="p-8 border border-gray-800 bg-[#111215]/50 group hover:border-yellow-400 transition-colors">
              <h4 className="text-xl font-medium mb-4 text-gray-200 group-hover:text-yellow-400 transition-colors">Универсальность ролевой модели</h4>
              <p className="text-gray-400 font-light text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                Создание масштабируемой архитектуры профессиональных ролей, позволяющей легко добавлять новые специальности в базовый игровой цикл без изменения ядра симулятора.
              </p>
            </div>
          </div>
        </section>

        {/* Expected Results */}
        <section id="results" className="min-h-[100svh] flex flex-col justify-center py-24 border-t border-gray-800 overflow-hidden relative w-full">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-3xl md:text-4xl font-light text-center mb-16">Ожидаемые результаты исследования</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center border border-gray-800 bg-[#111215]/80 p-12 sm:p-16">
              <div>
                 <div className="flex justify-center mb-6">
                   <Target className="w-10 h-10 text-brand-accent stroke-[1]" />
                 </div>
                 <div className="text-5xl font-light text-white mb-4">↑ 40%</div>
                 <h4 className="border-b border-gray-800 pb-4 tracking-widest uppercase text-gray-500 text-xs font-bold mb-4">Вовлеченность</h4>
                 <p className="text-gray-400 font-light text-sm leading-relaxed">Повышение студенческой мотивации к изучению сложных методологий разработки за счет геймификации.</p>
              </div>
              
              <div>
                 <div className="flex justify-center mb-6">
                   <Users className="w-10 h-10 text-brand-accent stroke-[1]" />
                 </div>
                 <div className="text-5xl font-light text-white mb-4">× 3</div>
                 <h4 className="border-b border-gray-800 pb-4 tracking-widest uppercase text-gray-500 text-xs font-bold mb-4">Слаженность</h4>
                 <p className="text-gray-400 font-light text-sm leading-relaxed">Быстрое формирование привычек регулярно обмениваться статусами и понимать зоны ответственности смежных специалистов.</p>
              </div>
              
              <div>
                 <div className="flex justify-center mb-6">
                   <Award className="w-10 h-10 text-brand-accent stroke-[1]" />
                 </div>
                 <div className="text-5xl font-light text-white mb-4">8/10</div>
                 <h4 className="border-b border-gray-800 pb-4 tracking-widest uppercase text-gray-500 text-xs font-bold mb-4">Практика</h4>
                 <p className="text-gray-400 font-light text-sm leading-relaxed">Оценка готовности выпускников к реальной работе в интенсивном проекте после прохождения симуляции.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#111217] py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center sm:text-left">
             © 2026, Магистерская диссертация. Все права защищены.
          </p>
          <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">
            Политика конфиденциальности
          </a>
        </div>
      </footer>

      {/* Scroll to top button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: showScrollTop ? 1 : 0, scale: showScrollTop ? 1 : 0.5 }}
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-12 h-12 rounded-full bg-brand-accent text-white flex items-center justify-center shadow-lg hover:bg-blue-500 transition-colors z-50 ${showScrollTop ? 'pointer-events-auto' : 'pointer-events-none'}`}
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>
    </div>
  );
}

// --- Subcomponents ---

function ConceptCard({ icon, title, desc, delay }: { icon: React.ReactNode, title: string, desc: string, delay: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="p-8 rounded-none border border-gray-800 bg-transparent hover:border-gray-600 transition-colors"
    >
      <div className="w-12 h-12 rounded-full border border-gray-800 flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-light mb-3">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed font-light">{desc}</p>
    </motion.div>
  );
}

function RolesTabs() {
  const roles = [
    {
      id: 'pm',
      name: 'Project Manager',
      icon: <Star className="w-6 h-6 absolute z-10 text-brand-accent" />,
      color: 'text-white',
      bgColor: 'bg-white',
      desc: 'Отвечает за успех проекта. Следит за бюджетом, временем и коммуникацией. Распределяет задачи на доске и урегулирует конфликты.',
      avatarShape: 'rounded-full border border-gray-800'
    },
    {
      id: 'backend',
      name: 'Backend Dev',
      icon: <Code className="w-6 h-6 absolute z-10 text-brand-accent" />,
      color: 'text-white',
      bgColor: 'bg-white',
      desc: 'Работает в серверном терминале. Настраивает базы данных, пишет API, закрывает уязвимости безопасности при кризисных событиях.',
      avatarShape: 'rounded-none border border-gray-800'
    },
    {
      id: 'frontend',
      name: 'Frontend Dev',
      icon: <PenTool className="w-6 h-6 absolute z-10 text-brand-accent" />,
      color: 'text-white',
      bgColor: 'bg-white',
      desc: 'Верстает интерфейсы на мобильном макете. Собирает UI из компонентов, настраивает цвета и адаптирует дизайн под требования заказчика.',
      avatarShape: 'rounded-3xl border border-gray-800'
    },
    {
      id: 'qa',
      name: 'QA Engineer',
      icon: <Search className="w-6 h-6 absolute z-10 text-brand-accent" />,
      color: 'text-white',
      bgColor: 'bg-white',
      desc: 'Тестирует собранные сборки на эмуляторе. Ловит баги, отправляет подробные баг-репорты разработчикам и дает добро на релиз.',
      avatarShape: 'rounded-tr-3xl rounded-bl-3xl border border-gray-800'
    }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {roles.map((role, idx) => (
        <motion.div
              key={role.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4, ease: "easeOut" }}
              className="flex flex-col md:flex-row items-center md:items-start gap-8 p-10 border border-gray-800 bg-[#111215]/50 hover:bg-[#111215] transition-colors"
        >
              <div className="w-24 h-24 shrink-0 relative flex items-center justify-center">
                <div className={`w-full h-full flex items-center justify-center bg-transparent ${role.avatarShape} relative z-10`}>
                  {role.icon}
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-light mb-4 tracking-wide">{role.name}</h3>
                <p className="text-gray-400 text-sm font-light leading-relaxed mb-6">
                  {role.desc}
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  <span className="text-[10px] tracking-widest uppercase text-gray-500">Командная работа</span>
                  <span className="text-[10px] tracking-widest uppercase text-gray-500">Ответственность</span>
                </div>
              </div>
        </motion.div>
      ))}
    </div>
  );
}

function TimelineItem({ time, title, desc, isLast = false }: { time: string, title: string, desc: string, isLast?: boolean }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className={`relative pl-8 md:pl-0 pb-12 md:pb-0 ${isLast ? '' : 'md:mb-16'}`}
    >
      <div className="md:grid md:grid-cols-[1fr_auto_1fr] items-start gap-12">
        <div className="hidden md:block text-right pt-1">
          <span className="text-gray-500 font-light font-mono text-xl">{time}</span>
        </div>
        
        <div className="absolute left-[-4px] top-2 md:relative md:left-0 md:top-3 w-2 h-2 bg-brand-accent rounded-full z-10"></div>
        
        <div className="md:-mt-1">
          <span className="md:hidden text-gray-500 font-light font-mono block mb-2">{time}</span>
          <h4 className="text-xl font-light tracking-wide mb-3">{title}</h4>
          <p className="text-gray-400 text-sm leading-relaxed max-w-sm">{desc}</p>
        </div>
      </div>
    </motion.div>
  );
}

function DemoCarousel() {
  const [current, setCurrent] = useState(0);
  
  const slides = [
    {
      title: "Дашборд Project Manager",
      type: "pm",
      content: (
        <div className="w-full h-full bg-[#111215] p-6 rounded-xl border border-gray-800 flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h5 className="font-bold">Project Overview</h5>
            <div className="flex gap-4 text-xs font-mono">
              <span className="text-yellow-400">Budget: $10k</span>
              <span className="text-red-400">Time: 14:00</span>
            </div>
          </div>
          <div className="flex gap-4 h-full">
            <div className="flex-1 bg-white/5 rounded border border-white/5 p-2">
              <div className="text-xs text-gray-500 mb-2">TODO</div>
              <div className="bg-brand-card p-3 rounded shadow text-sm mb-2 border-l-2 border-red-500">Setup Database</div>
              <div className="bg-brand-card p-3 rounded shadow text-sm border-l-2 border-blue-500">Design Login UI</div>
            </div>
            <div className="flex-1 bg-white/5 rounded border border-white/5 p-2">
              <div className="text-xs text-gray-500 mb-2">IN PROGRESS</div>
              <div className="bg-brand-card p-3 rounded shadow text-sm border-l-2 border-green-500 animate-pulse">Fix Authentication</div>
            </div>
            <div className="flex-1 bg-white/5 rounded border border-white/5 p-2">
              <div className="text-xs text-gray-500 mb-2">DONE</div>
              <div className="bg-brand-card p-3 rounded shadow text-sm border-l-2 border-gray-500 opacity-50 line-through">Init Repository</div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Терминал Backend-разработчика",
      type: "back",
      content: (
        <div className="w-full h-full bg-black p-6 rounded-xl border border-gray-800 font-mono text-sm shadow-[inset_0_0_20px_rgba(0,0,0,0.8)]">
          <div className="flex gap-2 mb-4 pb-2 border-b border-gray-800">
             <div className="w-3 h-3 rounded-full bg-red-500"></div>
             <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
             <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="text-green-500 space-y-1 opacity-90">
            <p>user@server:~$ cd project_api</p>
            <p>user@server:~/project_api$ npm start</p>
            <p className="text-gray-400">[info] Server running on port 8080</p>
            <p className="text-gray-400">[info] Connected to MainDB</p>
            <p className="mt-4 text-red-400 font-bold">WARNING: High CPU load detected.</p>
            <p>user@server:~/project_api$ htop<span className="w-2 h-4 bg-gray-400 inline-block align-middle ml-1 animate-pulse"></span></p>
          </div>
        </div>
      )
    },
    {
      title: "Макет Frontend-разработчика",
      type: "front",
      content: (
        <div className="w-full h-full bg-[#1e1e1e] rounded-xl border border-gray-800 flex items-center justify-center relative overflow-hidden">
           <div className="w-full max-w-[280px] h-full py-6 pr-6 flex justify-between gap-6">
              {/* Toolbar */}
              <div className="w-16 bg-[#252526] rounded border border-[#333] flex flex-col items-center py-4 gap-4">
                 <div className="w-10 h-10 bg-brand-accent/20 rounded text-brand-accent flex items-center justify-center p-2"><div className="w-full h-4 bg-current rounded-sm"></div></div>
                 <div className="w-10 h-10 hover:bg-white/5 rounded text-gray-400 flex items-center justify-center p-2"><div className="w-full h-full border-2 border-current rounded-full"></div></div>
                 <div className="w-10 h-10 hover:bg-white/5 rounded text-gray-400 flex items-center justify-center p-2"><div className="w-6 h-6 border-b-2 border-current"></div></div>
              </div>
              {/* Canvas/Phone */}
              <div className="flex-1 bg-white rounded-t-3xl border-8 border-gray-900 border-b-0 p-4 shadow-2xl relative">
                  <div className="w-1/2 h-4 bg-gray-200 rounded-full mb-6 mx-auto mt-2"></div>
                  <div className="w-full h-32 bg-gray-100 rounded-xl mb-4 border border-blue-400 border-dashed"></div>
                  <div className="w-2/3 h-6 bg-gray-200 rounded mb-2"></div>
                  <div className="w-full h-10 bg-brand-accent rounded mt-auto absolute bottom-4 left-4 right-4 w-auto text-center leading-10 text-white font-bold text-xs shadow-lg">Submit</div>
              </div>
           </div>
        </div>
      )
    },
    {
      title: "Эмулятор QA-инженера",
      type: "qa",
      content: (
        <div className="w-full h-full bg-gradient-to-br from-gray-900 to-brand-bg rounded-xl border border-gray-800 flex items-center justify-center relative">
           <div className="w-[260px] h-[480px] bg-white rounded-3xl border-[12px] border-gray-800 shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col relative overflow-hidden">
              <div className="h-6 w-full flex items-center justify-center absolute top-0 z-10 bg-white">
                <div className="w-1/3 h-4 bg-gray-800 rounded-b-xl"></div>
              </div>
              <div className="flex-1 mt-10 p-4">
                 <div className="w-full h-32 bg-blue-50 rounded-xl mb-4 flex items-center justify-center border border-red-500 relative before:content-[''] before:absolute before:inset-0 before:ring-2 before:ring-red-500 before:animate-ping before:rounded-xl">
                   <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center">
                     <span className="text-white text-xs font-bold">BUG</span>
                   </div>
                 </div>
                 <div className="space-y-3 pt-4">
                   <div className="w-full h-4 bg-gray-200 rounded"></div>
                   <div className="w-3/4 h-4 bg-gray-200 rounded"></div>
                   <div className="w-1/2 h-8 bg-gray-300 rounded mt-4"></div>
                 </div>
              </div>
           </div>
           
           <div className="absolute right-6 top-6 bottom-6 w-48 bg-black/50 backdrop-blur-md rounded-xl border border-white/10 p-4 flex flex-col gap-2">
              <span className="text-xs font-bold text-gray-400 mb-2">РЕПОРТ #402</span>
              <textarea placeholder="Опишите ошибку..." className="w-full h-24 bg-white/5 rounded border border-white/10 text-xs p-2 text-white resize-none"></textarea>
              <button className="w-full py-2 bg-red-600 hover:bg-red-700 rounded text-xs font-bold mt-auto transition-colors">Отправить PM'у</button>
           </div>
        </div>
      )
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative max-w-5xl mx-auto w-full">
      <div className="aspect-[4/3] sm:aspect-video w-full relative">
         {slides.map((slide, idx) => (
           <motion.div
             key={idx}
             initial={{ opacity: 0 }}
             animate={{ opacity: current === idx ? 1 : 0 }}
             transition={{ duration: 0.5 }}
             className={`absolute inset-0 z-10 ${current === idx ? 'pointer-events-auto' : 'pointer-events-none'}`}
           >
             {slide.content}
             
             {/* Label overlay */}
             <div className="absolute bottom-4 left-6 bg-black/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10">
               <span className="font-medium text-sm">{slide.title}</span>
             </div>
           </motion.div>
         ))}
      </div>
      
      {/* Controls */}
      <div className="flex justify-between items-center mt-6">
        <button 
          onClick={() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)}
          className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white/5 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        
        <div className="flex gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                current === idx ? 'bg-brand-accent w-6' : 'bg-gray-600 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
        
        <button 
          onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
          className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white/5 transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="p-8 border border-gray-800 hover:border-gray-600 transition-colors bg-brand-bg relative group overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/5 rounded-full blur-2xl group-hover:bg-brand-accent/10 transition-colors"></div>
      <div className="w-12 h-12 text-brand-accent mb-6 relative z-10">
        {icon}
      </div>
      <h3 className="text-xl font-light mb-3 relative z-10">{title}</h3>
      <p className="text-gray-400 font-light text-sm leading-relaxed relative z-10">{desc}</p>
    </motion.div>
  );
}

function InteractiveShapes() {
  return (
    <div className="relative w-full h-full min-h-[400px] max-w-md mx-auto perspective-1000 group">
       <div className="absolute inset-x-0 inset-y-10 sm:inset-0 border border-gray-800 rounded-3xl backdrop-blur-sm -z-10 bg-white/5 transform sm:rotate-y-12 sm:rotate-x-6 overflow-hidden transition-all duration-700 group-hover:border-gray-600 group-hover:bg-white/10 pointer-events-auto">
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-24 h-24 bg-blue-500/80 rounded-full top-[15%] left-[20%] shadow-[0_10px_40px_rgba(59,130,246,0.4)] border border-white/10"
          />
          <motion.div
            animate={{ y: [0, 15, 0], rotate: [12, 16, 12] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute w-32 h-32 bg-purple-500/80 rounded-2xl top-[45%] left-[15%] shadow-[0_10px_40px_rgba(168,85,247,0.4)] border border-white/10"
          />
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute w-28 h-28 bg-green-500/80 rounded-full bottom-[15%] right-[25%] shadow-[0_10px_40px_rgba(34,197,94,0.4)] border border-white/10"
          />
          <motion.div
            animate={{ y: [0, 12, 0], rotate: [-12, -8, -12] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute w-20 h-20 bg-yellow-500/80 rounded-2xl top-[25%] right-[20%] shadow-[0_10px_40px_rgba(234,179,8,0.4)] border border-white/10"
          />
       </div>
    </div>
  );
}
