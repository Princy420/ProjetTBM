// src/components/ValeursSection.jsx
import { motion } from 'framer-motion';
import { valuesData } from '../data';

const ValeursSection = () => (
  <section
    id="valeurs"
    className="py-24 bg-gradient-to-br from-[#2D2D2D] to-[#1a1a1a] relative overflow-hidden"
  >
    {/* Subtle dot pattern */}
    <div
      className="absolute inset-0 opacity-50"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}
    />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-[#C84B31] text-sm font-semibold uppercase tracking-wider">Ce qui nous anime</span>
        <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">Nos Valeurs</h2>
        <p className="max-w-2xl mx-auto text-white/60 text-lg">
          Les piliers fondamentaux qui guident chacune de nos actions quotidiennes.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {valuesData.map((value, index) => {
          const Icon = value.icon;
          return (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-[#C84B31]/30 transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#C84B31]/20 flex items-center justify-center mb-6 group-hover:bg-[#C84B31]/30 transition-colors duration-300 group-hover:scale-110 transform">
                <Icon size={32} className="text-[#C84B31]" />
              </div>
              <h3 className="font-bold text-2xl text-white mb-3">{value.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{value.description}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default ValeursSection;