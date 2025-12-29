import React from 'react';
import { CheckCircle2, FileText, Download } from 'lucide-react';
import { Button } from '~/components/ui/button';
import PhotoCarousel from './photo-carousel';

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-20">

          {/* Sticky Image / Carousel */}
          <div className="hidden lg:block relative">
            <div className="sticky top-32 h-[600px] w-full">
              <div className="absolute inset-0 bg-slate-900 rounded-lg transform rotate-3 translate-x-2 translate-y-2 opacity-10"></div>
              <PhotoCarousel />
              <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-6 rounded-sm shadow-lg border-l-4 border-amber-600 max-w-xs z-10">
                <p className="font-serif text-slate-900 italic text-lg leading-relaxed">
                  {'"'}A justiça não consiste em ser neutro entre o certo e o errado, mas em descobrir o certo e sustentá-lo.{'"'}
                </p>
                <p className="mt-4 text-xs font-bold uppercase tracking-wider text-amber-600">— Dr. Roberto Magalhães</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-24">
            <div>
              <span className="text-amber-600 font-bold tracking-widest text-xs uppercase mb-4 block">Sobre Nós</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
                Uma trajetória marcada pela <span className="italic text-amber-600">integridade</span>.
              </h2>
              <div className="lg:hidden mb-8 h-96">
                <PhotoCarousel />
              </div>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Fundado em 2003, nosso escritório nasceu com um propósito claro: oferecer advocacia de alto nível técnico combinada com um atendimento profundamente humano.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Entendemos que por trás de cada processo existe uma vida, uma empresa, um legado. Por isso, não tratamos casos em massa. Nossa abordagem é artesanal, desenhada especificamente para a complexidade da sua demanda.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 border-t border-slate-100 pt-8">
              {[
                { val: '20+', label: 'Anos de Experiência' },
                { val: '1.5k+', label: 'Casos Resolvidos' },
                { val: '98%', label: 'Taxa de Sucesso' },
                { val: 'R$ 50mi', label: 'Em causas ganhas' },
              ].map((stat, idx) => (
                <div key={idx}>
                  <h3 className="text-4xl font-bold text-slate-900 mb-2">{stat.val}</h3>
                  <p className="text-sm text-slate-500 uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>

            <div>
              <h3 className="text-2xl font-serif font-bold text-slate-900 mb-6">Certificações & Expertise</h3>
              <ul className="space-y-4 mb-8">
                {[
                  'Mestre em Direito Civil pela USP',
                  'Especialista em Fusões e Aquisições (M&A)',
                  'Membro da Comissão de Direito Empresarial OAB/SP',
                  'Reconhecido pelo Ranking Análise Advocacia'
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center space-x-3 bg-slate-50 p-4 rounded-lg hover:bg-slate-100 transition-colors cursor-default hover:translate-x-2 duration-300"
                  >
                    <div className="bg-amber-100 p-1 rounded-full">
                      <CheckCircle2 className="text-amber-600 h-5 w-5" />
                    </div>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <Button variant="outline" className="gap-3 group border-slate-400 hover:border-amber-600 hover:text-amber-700">
                  <FileText className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>Baixar Currículo (PDF)</span>
                  <Download className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-y-1 transition-all" />
                </Button>
                <span className="text-slate-400 text-xs italic max-w-xs">
                  Faça o download do histórico acadêmico e profissional completo.
                </span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}