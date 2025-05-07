import Header from '../components/header/Header';
import Hero from '../components/hero/Hero';
import About from '../components/About';
import Projects from '../components/projects/Projects';
import Skills from '../components/Skills';
import Experience from '../components/experience/Experience';
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-gray-950">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}