import React from 'react';
import { Clock, ShieldCheck, Gavel } from 'lucide-react';

export default function Differentials() {
  return (
    <section id="diferenciais" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
                <span className="block text-amber-600 font-bold tracking-widest text-xs uppercase mb-3">
                    Por que nos escolher
                </span>
                <h2 className="text-3xl md:text-5xl font-serif text-slate-900 font-bold relative inline-block">
                    Diferenciais Exclusivos
                </h2>
            </div>
          
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                { 
                    icon: <Clock className="w-8 h-8" />, 
                    title: "Atendimento 24h", 
                    text: "Para casos urgentes de direito penal ou empresarial, nossa equipe de plantão está sempre disponível." 
                },
                { 
                    icon: <ShieldCheck className="w-8 h-8" />, 
                    title: "Sigilo Absoluto", 
                    text: "Infraestrutura digital criptografada e salas de reunião com isolamento acústico para sua total privacidade." 
                },
                { 
                    icon: <Gavel className="w-8 h-8" />, 
                    title: "Advocacia Combativa", 
                    text: "Não aceitamos 'não' como resposta. Lutamos até a última instância para garantir o seu direito." 
                }
                ].map((item, i) => (
                    <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                        <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mb-6 text-amber-600">
                            {item.icon}
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 mb-3 font-serif">{item.title}</h4>
                        <p className="text-slate-600 leading-relaxed">
                            {item.text}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
}