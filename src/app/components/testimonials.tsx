import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
    {
      text: "A equipe foi fundamental para a reestruturação da minha empresa. O conhecimento técnico e a clareza nas explicações me deram total segurança.",
      author: "Carlos Eduardo",
      role: "CEO, TechSolutions"
    },
    {
      text: "Profissionais extremamente competentes e humanos. Me senti acolhida durante todo o processo. Recomendo de olhos fechados pela integridade.",
      author: "Ana Beatriz",
      role: "Diretora Comercial"
    },
    {
      text: "Excelente atuação no meu processo. Conseguiram um acordo muito superior ao que eu esperava. Agradeço a dedicação de todos.",
      author: "Ricardo Gomes",
      role: "Engenheiro Civil"
    },
    {
      text: "A clareza jurídica e a estratégia adotada salvaram meu patrimônio. Eternamente grato ao Dr. Roberto.",
      author: "Fernando S.",
      role: "Investidor"
    }
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 bg-slate-900 overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 relative z-10 mb-12 text-center">
         <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">O que dizem nossos clientes</h2>
      </div>

      <div className="relative w-full">
         <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none"></div>
         <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none"></div>
         
         <div className="flex w-full overflow-hidden">
             <div className="flex gap-8 animate-marquee hover:[animation-play-state:paused] whitespace-nowrap px-4">
                {[...testimonials, ...testimonials, ...testimonials].map((test, idx) => (
                    <div key={idx} className="w-[400px] bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 flex-shrink-0 whitespace-normal">
                    <Quote className="text-amber-600 mb-4 w-8 h-8 opacity-50" />
                    <p className="text-slate-300 italic mb-6 text-lg leading-relaxed">{'"'}{test.text}{'"'}</p>
                    <div className="flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-br from-slate-600 to-slate-500 rounded-full mr-3 flex items-center justify-center text-white font-bold shadow-lg">
                        {test.author.charAt(0)}
                        </div>
                        <div>
                        <p className="font-bold text-white text-sm">{test.author}</p>
                        <p className="text-slate-500 text-xs">{test.role}</p>
                        </div>
                    </div>
                    </div>
                ))}
             </div>
         </div>
      </div>
    </section>
  );
}