"use client";

import React, { useState, useEffect } from 'react';
import { MenuIcon, XIcon, ScaleIcon } from 'lucide-react';
import { Button } from '~/components/ui/button';
import { AnimatePresence, motion, useScroll } from 'framer-motion';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Áreas', href: '#servicos' },
    { name: 'Diferenciais', href: '#diferenciais' },
  ];

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-amber-600 origin-left z-[60]"
        style={{ scaleX: scrollYProgress }}
      />

      <header
        className={`fixed w-full z-50 transition-all duration-500 border-b border-transparent ${isScrolled
            ? 'bg-slate-950/80 backdrop-blur-md py-3 border-white/10'
            : 'bg-transparent py-6'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-700 rounded-sm flex items-center justify-center shadow-lg shadow-amber-500/20">
                <ScaleIcon className="text-white h-6 w-6" />
              </div>
              <div className="flex flex-col">
                <span className={`text-lg font-serif font-bold tracking-wider leading-none ${isScrolled ? 'text-white' : 'text-white'}`}>
                  MAGALHÃES
                </span>
                <span className={`text-xs uppercase tracking-[0.2em] ${isScrolled ? 'text-slate-400' : 'text-slate-300'}`}>
                  Associados
                </span>
              </div>
            </motion.div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                  href={link.href}
                  className={`text-sm font-medium uppercase tracking-widest hover:text-amber-500 transition-colors relative group ${isScrolled ? 'text-slate-300' : 'text-slate-200'
                    }`}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
              >
                <Button variant={isScrolled ? undefined : 'ghost'} className="!px-6 !py-2.5 !text-xs">
                  Consultar Especialista
                </Button>
              </motion.div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <XIcon size={28} /> : <MenuIcon size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden absolute top-full left-0 w-full bg-slate-950 border-t border-slate-800 shadow-2xl overflow-hidden"
            >
              <div className="flex flex-col p-6 space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-slate-300 hover:text-amber-500 py-3 block text-center uppercase tracking-wide border-b border-slate-800 last:border-0"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}