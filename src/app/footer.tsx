import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-8 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-slate-900 pb-12 mb-8">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <span className="text-2xl font-serif font-bold text-white block tracking-wider">MAGALHÃES</span>
            <span className="text-xs uppercase tracking-[0.3em] mt-2 block text-amber-600">Associados</span>
          </div>
          <div className="flex space-x-8 text-sm font-medium uppercase tracking-widest">
            {['Início', 'Sobre', 'Áreas', 'Contato'].map((item) => (
                <a key={item} href={`#${item.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")}`} className="hover:text-white transition-colors">
                    {item}
                </a>
            ))}
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Magalhães & Associados. OAB/SP 12.345.</p>
          <div className="mt-2 md:mt-0 flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}