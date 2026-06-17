// src/components/ProgramCard.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { categoryColors } from '../data';

const ProgramCard = ({ program }) => {
  const Icon = program.icon;

  const content = (
    <>
      <div className="flex items-start justify-between mb-4">
        <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-[#F9F7F2] group-hover:bg-[#C84B31] transition-all duration-300 shadow-sm">
          <Icon size={26} className="text-[#2D2D2D] group-hover:text-white transition-colors duration-300" />
        </div>
        <div className="flex gap-2 flex-wrap justify-end">
          {program.categories.map((cat) => (
            <span
              key={cat}
              className="px-3 py-1 rounded-full text-xs font-semibold text-white"
              style={{ backgroundColor: categoryColors[cat] }}
            >
              {cat}
            </span>
          ))}
        </div>
      </div>

      <h3 className="font-bold text-xl text-[#2D2D2D] mb-2 group-hover:text-[#C84B31] transition-colors duration-300">
        {program.name}
      </h3>
      <p className="text-[#2D2D2D]/60 text-sm leading-relaxed">{program.description}</p>

      {program.link && (
        <span
          className="inline-flex items-center gap-1 mt-4 text-sm font-medium group-hover:gap-2 transition-all duration-300"
          style={{ color: program.categories[0] ? categoryColors[program.categories[0]] : '#0BB9D7' }}
        >
          {program.linkLabel || 'Voir la galerie'}
          <ArrowRight size={16} />
        </span>
      )}
    </>
  );

  const className =
    'bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 group border border-[#E5D5C5]/30 block';

  if (program.link) {
    return (
      <motion.div
        layout
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.35 }}
      >
        <Link to={program.link} className={className}>
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.35 }}
      className={className}
    >
      {content}
    </motion.div>
  );
};

export default ProgramCard;
