import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Resume from './components/Resume';
import Services from './components/Services';
import Skills from './components/Skills';
import Projects from './components/Projects';
import StatsCounter from './components/StatsCounter';
import HireMe from './components/HireMe';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThreeBackground from './components/ThreeBackground';
import CustomCursor from './components/CustomCursor';
import SmoothScroll from './components/SmoothScroll';

function App() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-dark font-poppins relative">
        {/* Three.js Particle Background */}
        <ThreeBackground />

        {/* Custom Cursor */}
        <CustomCursor />

        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="relative z-10">
          <Hero />
          <About />
          <Resume />
          <Services />
          <Skills />
          <Projects />
          <StatsCounter />
          <HireMe />
          <Contact />
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}

export default App;
