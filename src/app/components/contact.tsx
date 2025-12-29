"use client";
import React from 'react';
import { Phone, Mail, MapPin, Linkedin, Instagram, Facebook } from 'lucide-react';
import { Button } from '~/components/ui/button';

export default function Contact() {
  return (
    <section id="contato" className="py-24 bg-white relative">
      <div className="absolute top-0 inset-x-0 h-1/2 bg-slate-50"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">

          {/* Info Side */}
          <div className="bg-slate-950 p-12 lg:w-2/5 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-amber-600/20 rounded-full blur-3xl"></div>

            <div>
              <h3 className="text-3xl font-serif font-bold mb-2">Vamos conversar?</h3>
              <p className="text-slate-400 mb-10">
                A primeira consulta é essencial para entendermos a viabilidade do seu caso.
              </p>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-amber-500 h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-widest mb-1">Telefone</p>
                    <p className="font-medium text-lg hover:text-amber-500 transition-colors cursor-pointer">(11) 99999-9999</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-amber-500 h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-widest mb-1">Email</p>
                    <p className="font-medium text-lg hover:text-amber-500 transition-colors cursor-pointer">contato@magalhaes.adv</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-amber-500 h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-widest mb-1">Escritório</p>
                    <p className="font-medium text-lg">Av. Paulista, 1000<br />São Paulo, SP</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <p className="text-slate-500 text-sm mb-4">Siga-nos nas redes:</p>
              <div className="flex space-x-4">
                {[Linkedin, Instagram, Facebook].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-amber-600 hover:border-amber-600 hover:text-white transition-all duration-300 text-slate-400">
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="p-12 lg:w-3/5 bg-white">
            <form onSubmit={(e) => { e.preventDefault(); alert("Mensagem enviada com sucesso!"); }}>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wide">Nome</label>
                    <input type="text" className="w-full bg-slate-50 border-b-2 border-slate-200 px-4 py-3 focus:border-amber-500 focus:bg-white outline-none transition-colors" placeholder="Seu nome completo" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wide">Telefone</label>
                    <input type="tel" className="w-full bg-slate-50 border-b-2 border-slate-200 px-4 py-3 focus:border-amber-500 focus:bg-white outline-none transition-colors" placeholder="(00) 00000-0000" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wide">Email</label>
                  <input type="email" className="w-full bg-slate-50 border-b-2 border-slate-200 px-4 py-3 focus:border-amber-500 focus:bg-white outline-none transition-colors" placeholder="seu@email.com" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wide">Assunto</label>
                  <select className="w-full bg-slate-50 border-b-2 border-slate-200 px-4 py-3 focus:border-amber-500 focus:bg-white outline-none transition-colors text-slate-600">
                    <option>Selecione a área de interesse</option>
                    <option>Direito Empresarial</option>
                    <option>Direito Civil</option>
                    <option>Outros</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wide">Mensagem</label>
                  <textarea rows={4} className="w-full bg-slate-50 border-b-2 border-slate-200 px-4 py-3 focus:border-amber-500 focus:bg-white outline-none transition-colors resize-none" placeholder="Descreva brevemente seu caso..."></textarea>
                </div>

                <Button className="w-full !py-5 text-lg shadow-xl hover:shadow-2xl">
                  Enviar Solicitação
                </Button>
                <p className="text-center text-xs text-slate-400 mt-4">
                  Seus dados estão protegidos pela LGPD. Não enviamos spam.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}