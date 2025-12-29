"use client";

import React from 'react';
import { ArrowRight, Award } from 'lucide-react';
import { Button } from '~/components/ui/button';
import { motion } from 'framer-motion';
import { Reveal } from '~/components/reveal';
import Image from 'next/image';

export default function Hero() {
  return (
    <>
      <section id="home" className="relative h-screen min-h-[800px] flex items-center overflow-hidden bg-slate-900">
        {/* Animated Background */}
        <motion.div
          className="absolute inset-0 z-0 opacity-40"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        >
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop"
            alt="Escritório Moderno"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-900/40 z-10"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 z-10 mix-blend-overlay"></div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="w-full">
            <Reveal>
              <div className="flex items-center space-x-4 mb-6">
                <div className="h-[1px] w-12 bg-amber-500"></div>
                <span className="text-amber-500 font-bold tracking-[0.2em] uppercase text-sm">
                  Excelência Jurídica desde 2003
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-8 leading-[1.1]">
                Defesa <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">Estratégica</span> <br />
                Para Tempos Complexos.
              </h1>
            </Reveal>

            <Reveal delay={0.4}>
              <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-10 font-light leading-relaxed border-l-2 border-slate-700 pl-6">
                Combinamos tradição jurídica com inovação tecnológica para entregar resultados que protegem seu patrimônio e garantem seu legado.
              </p>
            </Reveal>

            <Reveal delay={0.6}>
              <div className="flex flex-col sm:flex-row gap-5">
                <Button className="group">
                  <span className="flex items-center gap-2">
                    Falar com Advogado
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
                <Button variant="ghost">
                  Explorar Áreas de Atuação
                </Button>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/30 flex flex-col items-center gap-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/0 via-white/50 to-white/0"></div>
        </motion.div>
      </section>

      {/* Marquee */}
      <div className="bg-slate-950 border-b border-slate-800 py-10 overflow-hidden relative z-20">
        <div className="max-w-7xl mx-auto px-4 mb-6">
          <p className="text-center text-slate-500 text-xs uppercase tracking-widest">Reconhecimento e Afiliações</p>
        </div>
        <div className="flex w-full overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap opacity-40 hover:opacity-100 transition-opacity duration-500">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="flex items-center gap-2 text-slate-300 font-serif text-xl font-bold mx-8">
                <Award className="h-8 w-8" />
                <span>PREMIO JURÍDICO <span className="text-amber-600">{2020 + (i % 5)}</span></span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}