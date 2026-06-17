// src/components/ParcoursSection.jsx
import { motion } from 'framer-motion';
import { timelineData } from '../data';

const ParcoursSection = () => (
  <section id="parcours" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-[#C84B31] text-sm font-semibold uppercase tracking-wider">Notre Histoire</span>
        <h2 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] mt-3 mb-4">Parcours</h2>
        <p className="max-w-2xl mx-auto text-[#2D2D2D]/60 text-lg">
          Les étapes clés qui ont forgé notre identité et notre mission depuis notre création.
        </p>
      </motion.div>

      <div className="relative max-w-3xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#E5D5C5] transform md:-translate-x-1/2" />

        {timelineData.map((item, index) => (
          <motion.div
            key={item.year}
            initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative flex items-start mb-12 last:mb-0"
          >
            {/* Card — alternating sides on desktop */}
            <div
              className={`flex-1 pl-16 md:pl-0 ${
                index % 2 === 0 ? 'md:text-right md:pr-14' : 'md:text-left md:pl-14'
              }`}
            >
              <div className="bg-[#F9F7F2] p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-[#E5D5C5]/30 inline-block">
                <span className="text-[#C84B31] font-bold text-3xl">{item.year}</span>
                <h3 className="font-bold text-xl text-[#2D2D2D] mt-2 mb-2">{item.title}</h3>
                <p className="text-[#2D2D2D]/60 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>

            {/* Dot */}
            <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 w-5 h-5 bg-[#C84B31] rounded-full border-4 border-white shadow-md z-10 mt-6" />

            {/* Empty side on desktop */}
            <div className="flex-1 hidden md:block" />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ParcoursSection;