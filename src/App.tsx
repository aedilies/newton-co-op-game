/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { 
  Rocket, 
  Users, 
  Zap, 
  Shield, 
  Cpu, 
  Globe, 
  ChevronRight, 
  Play, 
  Download,
  AlertCircle,
  CheckCircle2,
  Box,
  Layers,
  Code2
} from "lucide-react";

const Section = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <motion.section
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className={`py-24 px-6 md:px-12 max-w-7xl mx-auto ${className}`}
  >
    {children}
  </motion.section>
);

export default function App() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <div className="min-h-screen font-sans overflow-x-hidden">
      {/* Hero Section */}
      <header ref={targetRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Overlay with Gradient */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-[#050505]" />
          <img 
            src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=2000" 
            alt="Space Station Background" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          {/* Animated Grid lines */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        <motion.div 
          style={{ opacity, scale }}
          className="relative z-10 text-center px-6 max-w-4xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-8"
          >
            <Zap size={14} />
            <span>Проект: Newton Co-op Game</span>
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter mb-6 leading-none">
            Изучай физику через <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">командную работу</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-zinc-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Кооперативная игра, где законы Ньютона становятся игровыми правилами выживания.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-10 py-5 bg-white text-black font-bold rounded-xl hover:bg-orange-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 text-lg group">
              Начать игру <Play size={20} className="fill-current group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-10 py-5 bg-zinc-900 text-white font-bold rounded-xl border border-zinc-800 hover:border-zinc-600 transition-all duration-300 flex items-center justify-center gap-2 text-lg">
              Играть в демо
            </button>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-500"
        >
          <div className="w-6 h-10 border-2 border-zinc-700 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-zinc-500 rounded-full" />
          </div>
        </motion.div>
      </header>

      {/* Problem Section */}
      <Section className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 tracking-tight">
            Почему физика — это <span className="text-zinc-600">сложно?</span>
          </h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500">
                <AlertCircle size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Потеря интереса</h3>
                <p className="text-zinc-400">Традиционные методы обучения часто не вовлекают студентов, превращая физику в скучную рутину.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500">
                <AlertCircle size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Отсутствие практики</h3>
                <p className="text-zinc-400">Абстрактные формулы трудно визуализировать. Мало инструментов, объединяющих реальную физику и социальное взаимодействие.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative aspect-video rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900/50 group">
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="text-zinc-700 flex flex-col items-center gap-4">
               <Play size={64} className="opacity-20 group-hover:opacity-40 transition-opacity" />
               <span className="text-sm font-mono uppercase tracking-widest">Геймплей (заглушка)</span>
             </div>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&q=80&w=1000" 
            alt="Визуализация геймплея" 
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
        </div>
      </Section>

      {/* Solution Section */}
      <Section className="bg-zinc-900/30 rounded-[3rem] border border-zinc-800/50">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Решение Newton</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">Мы превратили фундаментальные законы движения в интерактивные игровые механики, требующие настоящей кооперации.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              law: "I Закон",
              title: "Инерция",
              desc: "Синхронность — это ключ. Объекты не сдвинутся, пока команда не начнет действовать одновременно.",
              icon: <Users className="text-blue-400" />,
              color: "blue"
            },
            {
              law: "II Закон",
              title: "F = ma",
              desc: "Управляйте силой и массой. Роль каждого игрока напрямую влияет на ускорение команды.",
              icon: <Zap className="text-orange-400" />,
              color: "orange"
            },
            {
              law: "III Закон",
              title: "Действие-Противодействие",
              desc: "Каждое действие вызывает равную реакцию. Балансируйте силы или столкнитесь с последствиями.",
              icon: <Shield className="text-green-400" />,
              color: "green"
            }
          ].map((item, i) => (
            <div key={i} className="p-8 rounded-2xl bg-black border border-zinc-800 hover:border-zinc-600 transition-colors group">
              <div className="text-xs font-mono text-zinc-500 mb-4 uppercase tracking-widest">{item.law}</div>
              <div className="mb-6 p-3 rounded-xl bg-zinc-900 w-fit">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Levels Section */}
      <Section>
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Уровни миссий</h2>
            <p className="text-zinc-400">Исследуйте испытания, созданные для проверки вашего понимания физики и командной работы.</p>
          </div>
          <div className="flex gap-2">
            <div className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-white hover:border-zinc-600 cursor-pointer transition-all">
              <ChevronRight className="rotate-180" />
            </div>
            <div className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-white hover:border-zinc-600 cursor-pointer transition-all">
              <ChevronRight />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              level: "01",
              name: "Дрейф инерции",
              task: "Объект не сдвинется, пока команда не начнет действовать одновременно.",
              img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
            },
            {
              level: "02",
              name: "Вектор силы",
              task: "Ускорение зависит от комбинированных ролей всех игроков.",
              img: "https://images.unsplash.com/photo-1614726365930-627c75da663e?auto=format&fit=crop&q=80&w=800"
            },
            {
              level: "03",
              name: "Пустота реакции",
              task: "Поддерживайте баланс между командами, чтобы не улететь в открытый космос.",
              img: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=800"
            }
          ].map((lvl, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="relative aspect-[4/5] rounded-3xl overflow-hidden group cursor-pointer"
            >
              <img 
                src={lvl.img} 
                alt={lvl.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="text-orange-500 font-mono text-sm mb-2">УРОВЕНЬ {lvl.level}</div>
                <h3 className="text-2xl font-bold mb-2">{lvl.name}</h3>
                <p className="text-zinc-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">{lvl.task}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* How it Works */}
      <Section className="grid md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="aspect-square rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                <Users size={40} className="text-orange-500" />
              </div>
              <div className="aspect-square rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                <Layers size={40} className="text-blue-500" />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="aspect-square rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                <Box size={40} className="text-green-500" />
              </div>
              <div className="aspect-square rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                <Cpu size={40} className="text-purple-500" />
              </div>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">Как это работает</h2>
          <ul className="space-y-8">
            {[
              { title: "Командная игра", desc: "Подключайтесь к друзьям или одноклассникам в реальном времени." },
              { title: "Разделение ролей", desc: "Каждый игрок управляет определенным физическим параметром (Сила, Масса или Направление)." },
              { title: "Физика в основе", desc: "Задачи решаются через применение законов Ньютона к игровым объектам." }
            ].map((item, i) => (
              <li key={i} className="flex gap-6">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-bold text-sm">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-zinc-400">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Technologies */}
      <Section className="text-center">
        <h2 className="text-2xl font-display font-bold mb-12 text-zinc-500 uppercase tracking-[0.2em]">Технологии</h2>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex items-center gap-3">
            <Globe size={32} />
            <span className="text-xl font-bold">Unity</span>
          </div>
          <div className="flex items-center gap-3">
            <Code2 size={32} />
            <span className="text-xl font-bold">C#</span>
          </div>
          <div className="flex items-center gap-3">
            <Zap size={32} />
            <span className="text-xl font-bold">Photon</span>
          </div>
          <div className="flex items-center gap-3">
            <Box size={32} />
            <span className="text-xl font-bold">Blender</span>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="relative overflow-hidden rounded-[4rem] bg-gradient-to-br from-orange-600 to-red-700 text-center py-32">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
        <div className="relative z-10 max-w-2xl mx-auto px-6">
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 tracking-tighter">Готовы бросить вызов гравитации?</h2>
          <p className="text-xl text-white/80 mb-12">Присоединяйтесь к миссии и осваивайте законы вселенной вместе со своей командой.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#" 
              className="w-full sm:w-auto px-12 py-6 bg-white text-black font-black rounded-2xl text-xl hover:scale-105 transition-transform flex items-center justify-center gap-3 shadow-2xl shadow-black/20"
            >
              Играть сейчас <Play size={24} className="fill-current" />
            </a>
            <a 
              href="#" 
              className="w-full sm:w-auto px-12 py-6 bg-black/20 backdrop-blur-md text-white font-bold rounded-2xl text-xl border border-white/20 hover:bg-black/30 transition-all flex items-center justify-center gap-3"
            >
              Скачать <Download size={24} />
            </a>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-zinc-900 mt-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center font-black text-xl">N</div>
            <span className="font-display font-bold text-xl tracking-tight">Newton Co-op</span>
          </div>
          
          <div className="flex gap-8 text-zinc-500 text-sm">
            <a href="#" className="hover:text-white transition-colors">Конфиденциальность</a>
            <a href="#" className="hover:text-white transition-colors">Условия</a>
            <a href="#" className="hover:text-white transition-colors">Поддержка</a>
          </div>

          <div className="text-zinc-500 text-sm font-light">
            © 2026 • Designed by <span className="text-zinc-300 font-medium">Edil Mukanbetov</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
