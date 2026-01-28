
 

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#0c0a09] relative overflow-hidden">
      <div className="container mx-auto px-6 relative w-full h-full flex items-center justify-center z-50"> 
        <h1 className='font-cinematic text-4xl md:text-6xl font-bold text-[#d4af37] mb-10'>About Us</h1>
      </div>
      {/* Decorative Blur Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#500b0b]/10 rounded-full blur-[120px] -mr-64 -mt-64"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Responsive Grid: Stacked on mobile (cols-1), Side-by-side on laptop (lg:cols-2) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Image Container - Side 1 */}
          <div className="relative group perspective-1000 order-2 lg:order-1">
            <div className="absolute -inset-4 bg-[#500b0b]/20 rounded-lg blur-2xl group-hover:bg-[#500b0b]/40 transition-all duration-700"></div>
            <div className="relative overflow-hidden rounded-sm transform transition-transform duration-700 group-hover:rotate-1">
              <img 
                src="\logo.png" 
                alt="Behind the scenes" 
                className="w-full h-[400px] md:h-[600px] object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a09] via-transparent to-transparent opacity-60"></div>
            </div>
          </div>
          
          {/* Text Container - Side 2 */}
          <div className="space-y-6 md:space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <h2 className="font-cinematic text-4xl md:text-7xl font-bold mb-6 md:mb-8 leading-[0.9] text-white">
                Stories that <br /><span className="text-[#c5a059] italic">Refuse to Fade</span>
              </h2>
            </div>
            
            <p className="text-stone-400 text-base md:text-xl leading-relaxed font-light">
            As the official filmmaking society of NIT Bhopal (MANIT), Rangmanch stands at the intersection of technical precision and creative storytelling. We are a passionate collective of directors, writers, actors, and technicians dedicated to the craft of cinematic expression. From producing thought-provoking short films to engaging web series, Rangmanch provides a professional platform for students to explore every facet of filmmaking. We pride ourselves on capturing the vibrant pulse of campus life and beyond, transforming raw ideas into visual masterpieces. At Rangmanch, we don’t just capture frames; we script the legacy of NIT Bhopal’s creative spirit, one story at a time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
