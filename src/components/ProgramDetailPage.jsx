import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';
import CloudinaryImage from './CloudinaryImage';
import { programPages, programPhotos } from '../data/programPages';

const ProgramDetailPage = () => {
  const { slug } = useParams();
  const page = programPages[slug];

  if (!page) {
    return <Navigate to="/" replace />;
  }

  const photos = programPhotos[slug] ?? [];
  const Icon = page.icon;

  return (
    <div className="min-h-screen bg-[#F9F7F2] text-[#2D2D2D]">
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#F9F7F2]/90 backdrop-blur-md border-b border-[#E5D5C5]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link
              to="/"
              className="flex items-center gap-2 text-[#2D2D2D]/70 hover:text-[#C84B31] transition-colors duration-300 text-sm font-medium group"
            >
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              Retour aux programmes
            </Link>
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center shadow-md"
                style={{ backgroundColor: page.accentColor }}
              >
                {Icon ? <Icon size={18} className="text-white" /> : (
                  <span className="text-white font-bold text-xs">TBM</span>
                )}
              </div>
              <span className="font-bold text-lg text-[#2D2D2D] hidden sm:block">{page.title}</span>
            </div>
          </div>
        </div>
      </header>

      <main className="pt-28 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span
              className="text-sm font-semibold uppercase tracking-wider"
              style={{ color: page.accentColor }}
            >
              {page.badge}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2D2D2D] mt-3 mb-8">
              {page.title}
            </h1>

            {page.malagasy?.length > 0 && (
              <div className="max-w-3xl mx-auto space-y-4 text-lg md:text-xl text-[#2D2D2D]/80 leading-relaxed mb-10">
                {page.malagasy.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            )}

            {page.highlights?.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10 text-left">
                {page.highlights.map((block) => (
                  <div
                    key={block.title}
                    className="bg-white rounded-2xl p-6 shadow-sm border border-[#E5D5C5]/30"
                  >
                    <h3
                      className="font-bold text-lg mb-3"
                      style={{ color: page.accentColor }}
                    >
                      {block.title}
                    </h3>
                    <ul className="space-y-2 text-[#2D2D2D]/70 text-sm">
                      {block.items.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <span
                            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ backgroundColor: page.accentColor }}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {page.french?.length > 0 && (
              <div className="max-w-3xl mx-auto space-y-4 text-base md:text-lg text-[#2D2D2D]/60 leading-relaxed">
                {page.french.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            )}

            {page.programs?.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-10 text-left">
                {page.programs.map((block) => (
                  <div
                    key={block.title}
                    className="bg-white rounded-2xl p-6 shadow-sm border border-[#E5D5C5]/30"
                  >
                    <h3 className="font-bold text-lg text-[#2D2D2D] mb-3">{block.title}</h3>
                    <ul className="space-y-2 text-[#2D2D2D]/70 text-sm">
                      {block.items.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C84B31] flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </motion.div>

          {photos.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {photos.map((photo, index) => (
                <motion.div
                  key={photo.publicId}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-[#E5D5C5]/30 bg-white aspect-[4/3]"
                >
                  <CloudinaryImage
                    publicId={photo.publicId}
                    alt={photo.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    width={800}
                    height={600}
                  />
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </main>
    </div>
  );
};

export default ProgramDetailPage;
