import "./App.css";
import Section from "./components/Section";
import Navbar from "./components/Header/Navbar";
import Projects from "./components/sections/Projects";
import Blogs from "./components/sections/Blogs";

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
        <Section id="blogs" title="Blogs">
          <Blogs />
        </Section>
        <Section id="contact" title="Contact me" />
      </main>
    </div>
  );
}

export default App;
