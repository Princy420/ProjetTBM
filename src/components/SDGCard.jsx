// src/components/SDGCard.jsx
import { motion } from 'framer-motion';

const SDGCard = ({ sdg, index }) => {
  const Icon = sdg.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
      style={{ borderTop: `4px solid ${sdg.color}` }}
    >
      {/* Decorative corner */}
      <div
        className="absolute top-0 right-0 w-24 h-24 opacity-5"
        style={{ backgroundColor: sdg.color, borderRadius: '0 0 0 100%' }}
      />

      <div className="p-5">
        <div className="flex items-center gap-4 mb-4">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-md transition-transform duration-300 group-hover:scale-110"
            style={{ backgroundColor: sdg.color }}
          >
            <Icon size={22} />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider" style={{ color: sdg.color }}>
              ODD {sdg.id}
            </span>
            <h3 className="font-bold text-base text-[#2D2D2D] leading-tight mt-0.5">{sdg.title}</h3>
          </div>
        </div>

        {/* Progress bar */}
        <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
            className="h-full rounded-full"
            style={{ backgroundColor: sdg.color }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default SDGCard;