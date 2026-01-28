
import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate normalized mouse position (-1 to 1)
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section id="home" className="relative mt-16  h-screen w-full flex items-center justify-center overflow-hidden bg-[#0c0a09]">
      {/* Background Layer with Cinematic Pulse and Scroll Parallax */}
      {/* Background Layer with Improved Visibility */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center will-change-transform animate-[cinematicPulse_20s_ease-in-out_infinite]"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2400&auto=format&fit=crop")',
          transform: `scale(${1.1 + scrollY * 0.00015}) translateY(${scrollY * 0.05}px)`,
          // Increased brightness and saturation here
          filter: `brightness(0.7) contrast(1.2) saturate(1.1)`
        }}
      >
        {/* Using opacity on the black hex to let the image breathe */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c0a09]/60 via-transparent to-[#0c0a09]/80"></div>
      </div>

      {/* 3D Floating Reel - Refined Visibility */}
      <div
        className="absolute right-[8%] top-1/2 -translate-y-1/2 z-10 hidden xl:block opacity-40 pointer-events-none"
        style={{
          transform: `translateY(calc(-50% + ${mousePos.y * -15}px)) rotateY(${mousePos.x * 12}deg) rotateX(${mousePos.y * -12}deg)`,
          perspective: '1000px',
          // Very subtle glow that won't distract from the text
          filter: 'drop-shadow(0 0 8px rgba(197, 160, 89, 0.2))'
        }}
      >
        <div className="reel-container animate-[slowSpin_25s_linear_infinite]">
          <svg width="420" height="420" viewBox="0 0 100 100">
            {/* Outer Rim - Clean refined line */}
            <circle cx="50" cy="50" r="45" fill="none" stroke="#c5a059" strokeWidth="0.6" strokeDasharray="1.5 1.5" />

            {/* Center Hub */}
            <circle cx="50" cy="50" r="8" fill="none" stroke="#c5a059" strokeWidth="0.5" />

            {/* Reel Holes */}
            {[0, 60, 120, 180, 240, 300].map(angle => (
              <circle
                key={angle}
                cx={50 + 26 * Math.cos(angle * Math.PI / 180)}
                cy={50 + 26 * Math.sin(angle * Math.PI / 180)}
                r="7"
                fill="none"
                stroke="#c5a059"
                strokeWidth="0.5"
              />
            ))}
          </svg>
        </div>
      </div>

      {/* Viewfinder UI - Brighter and Highly Visible */}
      <div className="absolute inset-0 z-20 pointer-events-none p-4 md:p-8 lg:p-12 select-none">
        <div className="h-full flex flex-col justify-between border border-[#c5a059]/20 relative">

          {/* Top Metadata */}
          <div className="flex justify-between p-6 md:p-8">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-red-600 animate-[blink_1s_steps(2)_infinite] shadow-[0_0_10px_#dc2626]"></div>
                <div className="font-mono text-sm text-white tracking-[0.2em] font-bold">REC ● 00:{Math.floor(scrollY / 100) % 60 < 10 ? '0' : ''}{Math.floor(scrollY / 100) % 60}:24:12</div>
              </div>
              <div className="font-mono text-[10px] text-[#c5a059] tracking-widest uppercase font-bold">STBY / 24FPS</div>
            </div>
            <div className="text-right">
              <div className="font-mono text-sm text-white tracking-widest font-bold">4K PRORES</div>
              <div className="font-mono text-[10px] text-[#c5a059] tracking-widest uppercase font-bold">LUT: R-MANCH_V2</div>
            </div>
          </div>

          {/* Large Viewfinder Corners */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-[#c5a059] shadow-[0_0_15px_rgba(197,160,89,0.4)]"></div>
          <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-[#c5a059] shadow-[0_0_15px_rgba(197,160,89,0.4)]"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-[#c5a059] shadow-[0_0_15px_rgba(197,160,89,0.4)]"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-[#c5a059] shadow-[0_0_15px_rgba(197,160,89,0.4)]"></div>

          {/* Central Target Mover - Precisely Centered horizontally, Offset vertically below title */}
          <div className="absolute hidden md:block top-[65%] left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none overflow-visible">
            {/* Outer Target Box - Subtle movement */}
            <div
              className="absolute w-64 h-64 -translate-x-1/2 -translate-y-1/2 border border-[#c5a059]/10 transition-transform duration-[800ms] ease-out"
              style={{ transform: `translate(${mousePos.x * 12}px, ${mousePos.y * 12}px)` }}
            ></div>

            {/* Main Focus Crosshair - Medium responsive movement */}
            <div
              className="absolute w-32 h-32 -translate-x-1/2 -translate-y-1/2 border border-[#c5a059]/40 z-10 transition-transform duration-[400ms] ease-out"
              style={{ transform: `translate(${mousePos.x * 30}px, ${mousePos.y * 30}px)` }}
            >
              {/* Target lines */}
              <div className="absolute top-1/2 -left-4 w-10 h-[2px] bg-[#c5a059] shadow-[0_0_8px_#c5a059]"></div>
              <div className="absolute top-1/2 -right-4 w-10 h-[2px] bg-[#c5a059] shadow-[0_0_8px_#c5a059]"></div>
              <div className="absolute -top-4 left-1/2 w-[2px] h-10 -translate-x-1/2 bg-[#c5a059] shadow-[0_0_8px_#c5a059]"></div>
              <div className="absolute -bottom-4 left-1/2 w-[2px] h-10 -translate-x-1/2 bg-[#c5a059] shadow-[0_0_8px_#c5a059]"></div>

              {/* Internal Cross */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-4 h-[1px] bg-[#c5a059]"></div>
                <div className="h-4 w-[1px] bg-[#c5a059] absolute"></div>
              </div>

              {/* Technical Labels */}
              <div className="absolute -top-6 left-0 font-mono text-[9px] text-white font-bold tracking-widest uppercase whitespace-nowrap">
                AF_TRACK: CENTRE
              </div>
              <div className="absolute -bottom-6 right-0 font-mono text-[9px] text-[#c5a059] font-bold tracking-widest uppercase">
                Z: 1.0X
              </div>
            </div>
          </div>

          {/* Bottom Metadata */}
          <div className="flex justify-between p-6 md:p-8 items-end">
            <div className="flex gap-10">
              <div className="space-y-1">
                <div className="text-[10px] text-[#c5a059] uppercase font-bold tracking-tighter">ISO</div>
                <div className="font-mono text-sm text-white font-bold">400</div>
              </div>
              <div className="space-y-1">
                <div className="text-[10px] text-[#c5a059] uppercase font-bold tracking-tighter">SHTR</div>
                <div className="font-mono text-sm text-white font-bold">1/48</div>
              </div>
              <div className="space-y-1">
                <div className="text-[10px] text-[#c5a059] uppercase font-bold tracking-tighter">IRIS</div>
                <div className="font-mono text-sm text-white font-bold">f/2.8</div>
              </div>
            </div>
            <div className="flex items-end gap-6">
              <div className="text-right">
                <div className="text-[10px] text-[#c5a059] uppercase font-bold tracking-tighter">MEDIA</div>
                <div className="font-mono text-xs text-white font-bold">128GB / 42M</div>
              </div>
              <div className="w-16 h-5 border-2 border-white/40 p-0.5 relative">
                <div className="h-full bg-[#c5a059] shadow-[0_0_8px_#c5a059]" style={{ width: '85%' }}></div>
                <span className="absolute -top-5 right-0 font-mono text-[9px] text-white font-bold">BAT 85%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-30 text-center">
        <div className="mb-6 overflow-hidden">
          <span className="text-[#c5a059] text-[10px] md:text-sm uppercase tracking-[1em] inline-block opacity-0 animate-[shutterSlideDown_1s_ease-out_0.5s_forwards] font-bold">
            The Visionaries of NIT Bhopal
          </span>
        </div>

        <div className="relative inline-block mb-10">
          <h1
            className="font-cinematic text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[11rem] font-bold tracking-tighter text-white opacity-0 animate-[shutterIn_1.5s_cubic-bezier(0.16,1,0.3,1)_0.8s_forwards] leading-[0.85] select-none"
            style={{ transform: `translateY(${scrollY * 0.12}px)` }}
          >
            RANGMANCH
          </h1>
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-full flex justify-center gap-6 md:gap-12 opacity-0 animate-[fadeIn_1s_ease-out_1.8s_forwards]">
            <span className="text-[8px] md:text-[11px] font-black tracking-[0.5em] text-[#c5a059] uppercase">Direct</span>
            <span className="text-[8px] md:text-[11px] font-black tracking-[0.5em] text-[#c5a059] uppercase">Produce</span>
            <span className="text-[8px] md:text-[11px] font-black tracking-[0.5em] text-[#c5a059] uppercase">Inspire</span>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-20 md:mt-28">
          <p className="text-stone-300 text-sm md:text-xl lg:text-2xl leading-relaxed opacity-0 animate-[fadeInUp_1.5s_ease-out_1.5s_forwards] font-light italic max-w-2xl mx-auto px-4 drop-shadow-md">
            "We don't just make films; we capture the transient beauty of existence."
          </p>
        </div>
      </div>

      <style>{`
        @keyframes cinematicPulse {
          0%, 100% { filter: brightness(0.3) contrast(1.3) saturate(0.7); }
          50% { filter: brightness(0.35) contrast(1.4) saturate(0.8); }
        }
        @keyframes blink {
          from { opacity: 1; }
          to { opacity: 0; }
        }
        @keyframes slowSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes shutterIn {
          0% { opacity: 0; transform: scale(1.15) translateY(40px); filter: blur(20px); }
          100% { opacity: 1; transform: scale(1) translateY(0); filter: blur(0); }
        }
        @keyframes shutterSlideDown {
          from { transform: translateY(-100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
