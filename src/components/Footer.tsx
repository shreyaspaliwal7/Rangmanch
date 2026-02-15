
import React from 'react';

const Footer: React.FC = () => {
  const socials = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/rangmanch_nitb?igsh=bDBnZnhjYmd6dm51',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.947.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.058-1.69-.072-4.949-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c.796 0 1.441.645 1.441 1.44s-.645 1.44-1.441 1.44-1.44-.645-1.44-1.44.644-1.44 1.44-1.44z" />
        </svg>
      )
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@Rangmanch-NITBHOPAL',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/rangmanch-manit/',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
        </svg>
      )
    },
  ];

  return (
    <footer id="contact" className="bg-[#0c0a09] pt-20 pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-96 bg-[#500b0b]/5 blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Bottom Tier: Connect and HQ Info (Top Tier Logo Removed) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start pt-10">
          {/* Left Column: Social Connect */}
          <div className="space-y-10 flex flex-col items-center md:items-start text-center md:text-left">
            <div>
              <h4 className="text-[#c5a059] font-bold uppercase tracking-[0.4em] text-[10px] mb-8">Direct Connection</h4>
              <div className="flex flex-wrap justify-center md:justify-start gap-5">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-sm bg-[#500b0b]/10 text-stone-400 border border-white/5 hover:text-[#c5a059] hover:border-[#c5a059]/40 hover:bg-[#500b0b]/20 hover:shadow-[0_0_20px_rgba(197,160,89,0.1)] transition-all duration-500 group"
                    title={social.name}
                  >
                    <span className="transition-transform duration-500 group-hover:scale-110">
                      {social.icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-4 max-w-sm">
              <p className="text-stone-500 text-xs md:text-sm leading-relaxed italic">
                "We don't just make films; we capture the transient beauty of existence."
              </p>
              <a href="mailto:rangmanchmanit@gmail.com" className="text-[#c5a059] text-xs font-bold tracking-widest hover:underline decoration-1 underline-offset-4">
                rangmanchmanit@gmail.com
              </a>
            </div>
          </div>

          {/* Right Column: HQ Address */}

          <div className="flex flex-col items-center md:items-end text-center md:text-right space-y-10">
            <a href="https://maps.app.goo.gl/ZERHwrJJcutMMMig8">
              <div>
                <h4 className="text-[#c5a059] font-bold uppercase tracking-[0.4em] text-[10px] mb-8">Address</h4>
                <p className="text-stone-400 text-sm md:text-base leading-relaxed max-w-xs font-light">
                  Maulana Azad National Institute of Technology,<br />
                  Link Road Number 3, Bhopal,<br />
                  Madhya Pradesh 462003
                </p>
              </div>
            </a>

            <div className="space-y-1">
              <span className="text-stone-600 text-[10px] uppercase tracking-[0.3em] block">Contact</span>
              <span className="text-xl text-[#c5a059] block">ADITYA SONI</span>
              <a href='tel:+918989841407' className="text-stone-300 text-sm block">+91 8989841407</a>
            </div>
          </div>
        </div>

        {/* Final Copyright Bar */}
        <div className="mt-20 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-center items-center gap-8 opacity-70 hover:opacity-100 transition-opacity">
          <p className="text-stone-600 text-2xl uppercase tracking-[0.3em]">
            &copy; {new Date().getFullYear()} Rangmanch. All Frames Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
