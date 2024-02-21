import "./App.css";
import Section from "./components/Section";

function App() {
  return (
    <div className="App">
      <Section title="Projects" content="Waaaw" />
      <Section title="About" content="Abouuuuttttt" />
      <Section title="Blogs" content="Abouuuuttttt" />
      <Section title="Contact" content="Abouuuuttttt" />
      {/* {Section({ title: "Projects" })} */}
    </div>
  );
}

export default App;
