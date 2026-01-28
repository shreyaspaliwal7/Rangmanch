
import React from 'react';
import { MOVIES } from '../../constant.ts';

const Movies: React.FC = () => {
  return (
    <section id="movies" className="py-24 bg-[#0a0807] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-cinematic text-4xl md:text-6xl font-bold text-[#d4af37]">Featured Films</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {MOVIES.map((movie) => (
            <div key={movie.id} className="group relative bg-stone-900 overflow-hidden border border-white/5 transition-all duration-500 hover:border-[#d4af37]/30">
              <div className="aspect-[2/3] overflow-hidden bg-black flex items-center justify-center">
                <img
                  src={movie.thumbnail}
                  alt={movie.title}
                  className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>

              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-stone-400">{movie.year}</span>
                </div>
                <h3 className="font-cinematic text-2xl font-bold mb-3 text-white">{movie.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <a href="https://www.youtube.com/@Rangmanch-NITBHOPAL">
            <button className="bg-transparent hover:bg-[#d4af37] text-[#d4af37] hover:text-black border border-[#d4af37] px-12 py-4 rounded-sm font-semibold uppercase tracking-widest transition-all duration-300">
              Visit Our YouTube Channel
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Movies;
