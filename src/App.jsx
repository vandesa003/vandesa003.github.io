import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import VisitorStats from './components/VisitorStats';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-cyan-500/30">
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <VisitorStats />
      <Footer />
    </div>
  );
}

export default App;
