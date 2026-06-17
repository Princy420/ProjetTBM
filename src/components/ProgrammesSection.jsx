// src/components/ProgrammesSection.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { programsData, categories } from '../data';
import ProgramCard from './ProgramCard';

const ProgrammesSection = () => {
  const [activeFilter, setActiveFilter] = useState('Tous');

  const filteredPrograms =
    activeFilter === 'Tous'
      ? programsData
      : programsData.filter((p) => p.categories.includes(activeFilter));

  return (
    <section id="programmes" className="py-24 bg-[#F9F7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-[#C84B31] text-sm font-semibold uppercase tracking-wider">Nos Actions</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] mt-3 mb-4">Activités</h2>
          <p className="max-w-2xl mx-auto text-[#2D2D2D]/60 text-lg">
            Nos activités tendent à générer  des revenus pour l'individu porteur du projet.
          </p>
        </motion.div>

        {/* Filter buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === cat
                  ? 'bg-[#C84B31] text-white shadow-lg shadow-[#C84B31]/30 scale-105'
                  : 'bg-white text-[#2D2D2D]/70 hover:bg-[#C84B31]/10 hover:text-[#C84B31] border border-[#E5D5C5]/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredPrograms.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgrammesSection;