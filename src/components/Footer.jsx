// src/components/Footer.jsx
import { Heart, MapPin, Mail, Phone } from 'lucide-react';
import { navLinks } from '../data';
import { useScrollToSection } from '../hooks/useScrollToSection';

const Footer = () => {
  const scrollToSection = useScrollToSection();

  return (
    <footer className="bg-[#F9F7F2] border-t border-[#E5D5C5]/50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#C84B31] rounded-full flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-xs">TBM</span>
              </div>
              <div>
                <span className="font-bold text-xl text-[#2D2D2D] block leading-tight">TOKONTANY BE</span>
                <span className="text-[#C84B31] text-xs font-medium -mt-1 block">MALAGASY</span>
                <span className="text-[#2D2D2D]/80 text-[10px] uppercase tracking-[0.15em] mt-1 block">Ny fihavanana no tombony ho antsika</span>
              </div>
            </div>
            <p className="text-[#2D2D2D]/60 text-sm leading-relaxed max-w-md">
              Plateforme d&apos;impact social et culturel dédiée au développement durable de Madagascar.
              Nous unissons héritage culturel et innovation sociale pour bâtir un avenir meilleur.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-[#2D2D2D] mb-5 text-lg">Navigation</h4>
            <div className="space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  type="button"
                  onClick={() => scrollToSection(link.sectionId)}
                  className="block text-left text-[#2D2D2D]/60 hover:text-[#C84B31] text-sm transition-colors duration-300"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-[#2D2D2D] mb-5 text-lg">Contact</h4>
            <div className="space-y-4 text-sm text-[#2D2D2D]/60">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-[#C84B31] mt-0.5 flex-shrink-0" />
                <span>Antananarivo, Madagascar</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-[#C84B31] flex-shrink-0" />
                <span>tokontanybemalagasy@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-[#C84B31] flex-shrink-0" />
                <span>+261 34 50 456 24 </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#E5D5C5]/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#2D2D2D]/40 text-sm">
            © 2026 TOKONTANY BE MALAGASY. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-[#2D2D2D]/40 text-sm">Fait avec</span>
            <Heart size={16} className="text-[#C84B31] fill-[#C84B31]" />
            <span className="text-[#2D2D2D]/40 text-sm">pour Madagascar</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
