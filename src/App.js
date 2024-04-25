import "./App.css";
import Section from "./components/Section";
import Navbar from "./components/Header/Navbar";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>

      <Section id="about" title="About Me" />
      <Section id="projects" title="Projects" />
      <Section id="blogs" title="Blogs" />
      <Section id="contact" title="Contact me" />
    </div>
  );
}

export default App;
