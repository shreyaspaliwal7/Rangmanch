import React, { useEffect, useState } from 'react';
import { TEAM_MEMBERS } from '../../constant.ts';

const Team: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  const getDriveImage = (url: string) => {
    if (!url || !url.includes('drive.google.com')) return url;

    // Extracts the ID from any Drive link format
    const match = url.match(/(?:id=|\/d\/)([\w-]{25,})/);
    const id = match ? match[1] : '';

    if (!id) return url;

    // This endpoint is much more "React-friendly"
    return `https://drive.google.com/thumbnail?id=${id}&sz=s1000`;
  };

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="pt-40 pb-24 min-h-screen bg-[#0c0a09] relative overflow-hidden">
      {/* Parallax Backgrounds */}
      <div
        className="absolute top-20 left-[-10%] w-[120%] h-full pointer-events-none z-0"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      >
        <div className="absolute top-[10%] right-[15%] text-[15rem] font-black text-white/[0.02] select-none leading-none">CREW</div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-[#c5a059] uppercase tracking-[0.6em] text-[10px] mb-4 block">The Faces Behind the Lens</span>
          <h2 className="font-cinematic text-4xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-[#c5a059]">Crew</span>
          </h2>
          <div className="w-16 h-0.5 bg-[#c5a059] mx-auto opacity-40"></div>
        </div>

        {/* Updated Grid: Max-width container and smaller gaps to reduce image footprint */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {TEAM_MEMBERS.map((member, index) => (
            <div
              // key={member.id}
              className="group relative animate-fadeInUp"
              style={{ animationDelay: `${0.3 + index * 0.1}s`, opacity: 0, animationFillMode: 'forwards' }}
            >
              {/* Reduced size container: using aspect-square or smaller aspect ratio */}
              <div className="aspect-[3/4] max-w-[280px] mx-auto overflow-hidden rounded-sm relative border border-white/5 shadow-xl">
                <img
                  src={getDriveImage(member.image)}
                  alt={member.name}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Optional: Add a fallback if the link still fails
                    (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=' + member.name;
                  }}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />

                {/* Viewfinder Corners */}
                <div className="absolute inset-3 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#c5a059]"></div>
                  <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#c5a059]"></div>
                  <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#c5a059]"></div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#c5a059]"></div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a09] via-transparent to-transparent opacity-80"></div>
              </div>

              {/* Info section */}
              <div className="mt-6 text-center transition-transform duration-500">
                <h3 className="text-white text-xl font-bold font-cinematic tracking-wide mb-1">{member.name}</h3>
                <span className="text-[#c5a059] text-[9px] uppercase tracking-[0.3em] font-bold block mb-3">{member.role}</span>

                <div className="flex justify-center gap-6 opacity-0 group-hover:opacity-100 transition-all duration-500 mt-2">

                  {/* Instagram Icon - Shows only if member.instagram exists */}
                  {member.instagram && (
                    <a
                      href={member.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-stone-400 hover:text-[#c5a059] transition-colors duration-300"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        width="18"
                        height="18"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </a>
                  )}

                  {/* LinkedIn Icon - Shows only if member.linkedin exists */}
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-stone-400 hover:text-[#c5a059] transition-colors duration-300"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        width="18"
                        height="18"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                  )}

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}} />
    </section>
  );
};

export default Team;