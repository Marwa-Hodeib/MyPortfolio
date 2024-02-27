import "./App.css";
import Section from "./components/Section";

function App() {
  return (
    <div className="App">
      <Section title="About Me" />
      <Section title="Projects" />
      <Section title="Blogs" />
      <Section title="Contact me" />
    </div>
  );
}

export default App;
