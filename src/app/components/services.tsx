import React from 'react';
import { ShieldCheck, Scale, Users, Award, MapPin, ArrowRight, ArrowUpRight } from 'lucide-react';

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
            Expertise Multidisciplinar
          </h2>
          <p className="text-slate-400 text-lg">
            Atuamos de forma integrada em diversas áreas do direito para garantir uma proteção 360º para você e sua empresa.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">
           {/* Featured Service - Large */}
           <div className="lg:col-span-2 lg:row-span-2 group relative p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-800 hover:border-amber-600/50 transition-colors overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                <ShieldCheck size={120} />
             </div>
             <div className="relative z-10 h-full flex flex-col justify-between">
               <div>
                 <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center mb-6">
                   <ShieldCheck className="text-white" />
                 </div>
                 <h3 className="text-3xl font-serif font-bold mb-4">Direito Empresarial</h3>
                 <p className="text-slate-400 leading-relaxed text-lg max-w-md">
                   Assessoria jurídica completa para o seu negócio. Desde a constituição societária, planejamento tributário, até fusões e aquisições complexas. Protegemos sua operação para que você foque no crescimento.
                 </p>
               </div>
               <div className="mt-8 flex items-center text-amber-500 font-bold tracking-wide uppercase text-sm group-hover:translate-x-2 transition-transform cursor-pointer">
                 Saiba mais <ArrowRight className="ml-2 w-4 h-4" />
               </div>
             </div>
           </div>

           {/* Other Services */}
           {[
            { title: 'Direito Civil', icon: <Scale />, desc: 'Contratos, responsabilidade civil e proteção patrimonial.' },
            { title: 'Direito de Família', icon: <Users />, desc: 'Inventários, divórcios e planejamento sucessório com sigilo absoluto.' },
            { title: 'Direito Tributário', icon: <Award />, desc: 'Recuperação de créditos e defesa em autuações fiscais.' },
            { title: 'Direito Imobiliário', icon: <MapPin />, desc: 'Regularização, incorporações e contratos de alto valor.' },
          ].map((service, idx) => (
            <div 
              key={idx}
              className="group p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:bg-slate-800 transition-colors hover:shadow-2xl hover:shadow-black/50"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="text-slate-400 group-hover:text-amber-500 transition-colors">
                  {service.icon}
                </div>
                <ArrowUpRight className="text-slate-700 group-hover:text-white transition-colors" size={20} />
              </div>
              <h3 className="text-xl font-bold mb-2 font-serif">{service.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4 group-hover:text-slate-300 transition-colors">
                {service.desc}
              </p>
            </div>
          ))}

          {/* CTA Card */}
          <div className="group p-8 rounded-2xl bg-amber-600 text-white flex flex-col justify-center items-center text-center cursor-pointer overflow-hidden relative hover:scale-[1.02] transition-transform duration-300">
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-serif font-bold mb-2">Precisa de outra área?</h3>
              <p className="text-amber-100 text-sm mb-6">Nossa equipe multidisciplinar pode analisar seu caso.</p>
              <span className="inline-block bg-white text-amber-700 px-6 py-2 rounded-full font-bold text-sm hover:bg-amber-50 transition-colors">Fale Conosco</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}