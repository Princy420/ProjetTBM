// src/components/Navbar.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { navLinks } from '../data';
import { useScrollToSection } from '../hooks/useScrollToSection';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollToSection = useScrollToSection();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F9F7F2]/90 backdrop-blur-md border-b border-[#E5D5C5]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          <Link to="/" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}>
            <div className="w-10 h-10 bg-[#C84B31] rounded-full flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-xs">TBM</span>
            </div>
            <div>
              <span className="font-bold text-lg lg:text-xl text-[#2D2D2D] block leading-tight">TOKONTANY BE</span>
              <span className="text-[#C84B31] text-xs font-medium -mt-1 block">MALAGASY</span>
              <span className="text-[#2D2D2D]/80 text-[10px] uppercase tracking-[0.15em] mt-1 block">Ny fihavanana no tombony ho antsika</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                type="button"
                onClick={() => { scrollToSection(link.sectionId); setMenuOpen(false); }}
                className="text-[#2D2D2D]/70 hover:text-[#C84B31] transition-colors duration-300 text-sm font-medium relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C84B31] transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
            <button
              type="button"
              onClick={() => scrollToSection('contact')}
              className="bg-[#C84B31] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#B5412A] transition-all duration-300 hover:shadow-lg hover:shadow-[#C84B31]/30"
            >
              Nous rejoindre
            </button>
          </div>

          <button className="lg:hidden p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen
              ? <X size={24} className="text-[#2D2D2D]" />
              : <Menu size={24} className="text-[#2D2D2D]" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#F9F7F2] border-t border-[#E5D5C5]/50 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  type="button"
                  onClick={() => { scrollToSection(link.sectionId); setMenuOpen(false); }}
                  className="block w-full text-left text-[#2D2D2D]/80 hover:text-[#C84B31] py-2 text-lg font-medium"
                >
                  {link.name}
                </button>
              ))}
              <button
                type="button"
                onClick={() => { scrollToSection('contact'); setMenuOpen(false); }}
                className="block w-full text-center bg-[#C84B31] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#B5412A] transition-colors mt-4"
              >
                Nous rejoindre
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
