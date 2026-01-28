
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Movies from './components/Movies';
import Gallery from './components/Gallery';
import Team from './components/Team';
import Footer from './components/Footer';
import Preloader from './components/Preloader';

type ViewState = 'HOME' | 'TEAM';

function App() {
  const [loading, setLoading] = useState(true);
  const [currentView, setCurrentView] = useState<ViewState>('HOME');

  useEffect(() => {
    // Simulate initial loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Scroll to top when view changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Setup Intersection Observer for reveal animations on current view
    const observerOptions = {
      threshold: 0.15,
      rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    // Short delay to ensure DOM is ready after state change
    const timeout = setTimeout(() => {
      const revealElements = document.querySelectorAll('.reveal');
      revealElements.forEach(el => observer.observe(el));
    }, 100);

    return () => {
      observer.disconnect();
      clearTimeout(timeout);
    };
  }, [currentView, loading]);

  const navigateTo = (view: ViewState) => {
    if (view === currentView) return;
    setCurrentView(view);
  };

  if (loading) return <Preloader />;

  return (
    <div className="min-h-screen selection:bg-[#500b0b] selection:text-[#c5a059]">
      <Navbar onNavigate={navigateTo} currentView={currentView} />
      
      <main className="transition-opacity duration-500">
        {currentView === 'HOME' ? (
          <div className="animate-[fadeInView_0.8s_ease-out]">
            <Hero />
            <div className="reveal">
              <About />
            </div>
            <div className="reveal">
              <Movies />
            </div>
            <div className="reveal">
              <Gallery />
            </div>
          </div>
        ) : (
          <div className="animate-[fadeInView_0.8s_ease-out]">
            <Team />
          </div>
        )}
      </main>
      
      <Footer />
      
      {/* Cinematic Frame Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[60] border-[10px] md:border-[20px] border-[#0c0a09] opacity-60"></div>
      
      <style>{`
        @keyframes fadeInView {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}

export default App;
