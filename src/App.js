import About from './components/About';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Skills from './components/Skills';
import Projects from './components/Projects';
import SocialLinks from './components/SocialLinks';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;
