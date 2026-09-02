import "./App.css";
import About from "./components/About";
import Background from "./components/Background";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { useReveal } from "./hooks/useReveal";

export default function App() {
  useReveal();

  return (
    <>
      <a className="skipLink" href="#about">
        Skip to content
      </a>
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Background />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
