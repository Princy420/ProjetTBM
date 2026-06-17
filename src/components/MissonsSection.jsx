// src/components/MissionsSection.jsx
import { motion } from 'framer-motion';
import { sdgData } from '../data';
import SDGCard from './SDGCard';

const MissonsSection = () => (
  <section id="missions" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-[#C84B31] text-sm font-semibold uppercase tracking-wider">Notre Impact</span>
        <h2 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] mt-3 mb-4">Missions & ODD</h2>
        <p className="max-w-2xl mx-auto text-[#2D2D2D]/60 text-lg">
          Alignés avec les Objectifs de Développement Durable de l'ONU, nous travaillons pour un monde plus equitable et durable .
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {sdgData.map((sdg, index) => (
          <SDGCard key={sdg.id} sdg={sdg} index={index} />
        ))}
      </div>
    </div>
  </section>
);

export default MissonsSection;