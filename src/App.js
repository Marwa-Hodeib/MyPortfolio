import "./App.css";
import Section from "./components/Section";
import Navbar from "./components/Header/Navbar";
import Projects from "./components/sections/Projects";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      <main className="container">
        <Section id="about" title="About Me" />
        <Section id="projects" title="Projects">
          <Projects />
        </Section>
        <Section id="blogs" title="Blogs" />
        <Section id="contact" title="Contact me" />
      </main>
    </div>
  );
}

export default App;
