import { useState } from "react";
import CoreConcept from "./components/CoreConcept/CoreConcept";
import Header from "./components/Header/Header";
import TabButton from "./components/TabButton";
import { CORE_CONCEPTS } from "./data";

function App() {
  const [topic,setTopic] = useState("Please click a button")
  function handleSelect(selectedButton){
    setTopic(selectedButton);
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concept</h2>
          <ul>
            {CORE_CONCEPTS.map((core, idx) => {
              return <CoreConcept {...core} key={idx} />;
            })}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onClick={() => handleSelect('components')}>Components</TabButton>
            <TabButton onClick={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton onClick={() => handleSelect('props')}>Props</TabButton>
            <TabButton onClick={() => handleSelect('state')}>State</TabButton>
          </menu>
          {topic}
        </section>
      </main>
    </div>
  );
}

export default App;
