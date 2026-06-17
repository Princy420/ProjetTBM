import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useScrollToSection } from '../hooks/useScrollToSection';

const stats = [
  { number: '9', label: 'ODD Ciblés' },
  { number: '7', label: 'Programmes' },
];

const HeroSection = () => {
  const scrollToSection = useScrollToSection();

  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#F9F7F2] via-[#F5EDE3] to-[#E8D5C4] opacity-60" />
      <div className="absolute top-32 right-10 w-80 h-80 bg-[#C84B31]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-32 left-10 w-96 h-96 bg-[#DDA63A]/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C84B31]/5 rounded-full blur-3xl" />

      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 py-20">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="inline-flex items-center gap-2 bg-[#C84B31]/10 px-5 py-2 rounded-full mb-8 border border-[#C84B31]/20">
          <span className="w-2 h-2 bg-[#C84B31] rounded-full animate-pulse" />
          <span className="text-[#C84B31] text-sm font-medium">Plateforme d&apos;Impact Social</span>
        </motion.div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[2D2D2D] leading-[1.1] mb-6">
          TOKONTANY BE <br />
          <span className="text-[#C84B31]">MALAGASY</span>
        </h1>
        <p className="text-xl md:text-2xl font-semibold text-[#2D2D2D] mb-4">&quot;Ny fihavanana no tombony ho antsika&quot;</p>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-[#2D2D2D]/60 mb-10 leading-relaxed">
          Héritage culturel et innovation sociale au service des communautés malagasy.
          Ensemble, construisons un avenir durable et solidaire.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => scrollToSection('missions')}
            className="bg-[#C84B31] text-white px-8 py-3.5 rounded-full font-medium hover:bg-[#B5412A] transition-all duration-300 hover:shadow-lg hover:shadow-[#C84B31]/30 flex items-center gap-2 group"
          >
            Découvrir nos missions
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            type="button"
            onClick={() => scrollToSection('programmes')}
            className="border-2 border-[#2D2D2D]/20 text-[#2D2D2D] px-8 py-3.5 rounded-full font-medium hover:border-[#C84B31] hover:text-[#C84B31] transition-all duration-300"
          >
            Voir les programmes
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-20 grid grid-cols-2 gap-8 max-w-lg mx-auto"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-[#C84B31]">{stat.number}</div>
              <div className="text-sm text-[#2D2D2D]/50 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-[#2D2D2D]/30 rounded-full flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 bg-[#C84B31] rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
