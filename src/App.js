import "./App.css";
import Section from "./components/Section";
import sectionData from "./static-data/sections";

function App() {
  return (
    <div className="App">
      {sectionData.map((data, index) => (
        <Section key={index} title={data.title} content={data.content} />
      ))}
    </div>
  );
}

export default App;
