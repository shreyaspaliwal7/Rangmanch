
import React from 'react';

const Preloader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[100] bg-[#0c0a09] flex flex-col items-center justify-center overflow-hidden">
      {/* Cinematic Camera & Film Reels Animation */}
      <div className="relative mb-12 scale-75 md:scale-100">
        
        {/* Camera Body Silhouette */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-20 bg-stone-900/40 border border-[#c5a059]/20 rounded-md z-0 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]">
           <div className="absolute top-0 right-0 w-8 h-full bg-[#c5a059]/5"></div>
           {/* Lens Silhouette */}
           <div className="absolute top-1/2 -right-4 -translate-y-1/2 w-10 h-14 bg-stone-800 border-l border-[#c5a059]/30 rounded-r-lg"></div>
        </div>

        {/* Film Reels Positioned on Camera Body */}
        <div className="relative flex gap-10 items-center justify-center z-10 p-6">
          {/* Reel 1 */}
          <div className="w-24 h-24 border-4 border-[#c5a059]/60 rounded-full flex items-center justify-center animate-[spin_3.5s_linear_infinite] relative shadow-[0_0_20px_rgba(197,160,89,0.2)] bg-[#0c0a09]">
            <div className="absolute w-full h-0.5 bg-[#c5a059]/40"></div>
            <div className="absolute w-full h-0.5 bg-[#c5a059]/40 rotate-45"></div>
            <div className="absolute w-full h-0.5 bg-[#c5a059]/40 rotate-90"></div>
            <div className="absolute w-full h-0.5 bg-[#c5a059]/40 -rotate-45"></div>
            <div className="w-6 h-6 bg-[#0c0a09] border-2 border-[#c5a059] rounded-full z-10 shadow-[0_0_10px_rgba(197,160,89,0.5)]"></div>
          </div>
          
          {/* Reel 2 */}
          <div className="w-24 h-24 border-4 border-[#c5a059]/60 rounded-full flex items-center justify-center animate-[spin_3.5s_linear_infinite] relative shadow-[0_0_20px_rgba(197,160,89,0.2)] bg-[#0c0a09]">
            <div className="absolute w-full h-0.5 bg-[#c5a059]/40"></div>
            <div className="absolute w-full h-0.5 bg-[#c5a059]/40 rotate-45"></div>
            <div className="absolute w-full h-0.5 bg-[#c5a059]/40 rotate-90"></div>
            <div className="absolute w-full h-0.5 bg-[#c5a059]/40 -rotate-45"></div>
            <div className="w-6 h-6 bg-[#0c0a09] border-2 border-[#c5a059] rounded-full z-10 shadow-[0_0_10px_rgba(197,160,89,0.5)]"></div>
          </div>
        </div>

        {/* Film Tape Connector */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-1 z-20">
          <div className="w-full h-full bg-gradient-to-r from-transparent via-[#c5a059]/50 to-transparent"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[#c5a059] animate-[tapeScroll_1s_linear_infinite]"></div>
        </div>
      </div>

      <div className="text-center relative">
        <h2 className="font-cinematic text-4xl md:text-5xl font-bold text-[#c5a059] tracking-[0.3em] uppercase animate-pulse mb-2 drop-shadow-[0_0_15px_rgba(197,160,89,0.3)]">
          Rangmanch
        </h2>
        <div className="h-1 w-0 bg-[#c5a059] mx-auto animate-[loading_2.5s_ease-in-out_forwards] shadow-[0_0_10px_rgba(197,160,89,0.5)]"></div>
        <p className="text-[10px] uppercase tracking-[0.5em] text-stone-500 mt-6 animate-bounce font-black">
          ROLLING CAMERA...
        </p>
      </div>

      <style>{`
        @keyframes loading {
          0% { width: 0; }
          100% { width: 100%; }
        }
        @keyframes tapeScroll {
          0% { background-position: 0% 0%; }
          100% { background-position: 100% 0%; }
        }
      `}</style>
    </div>
  );
};

export default Preloader;
