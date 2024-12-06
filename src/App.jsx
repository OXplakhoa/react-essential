import { useState } from "react";
import CoreConcept from "./components/CoreConcept/CoreConcept";
import Header from "./components/Header/Header";
import TabButton from "./components/TabButton";
import { CORE_CONCEPTS, EXAMPLES } from "./data";

function App() {
  const [topic,setTopic] = useState("components")
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
          <div id="tab-content">
            <h3>{EXAMPLES[topic].title}</h3>
            <p>{EXAMPLES[topic].description}</p>
            <pre>
              <code>{EXAMPLES[topic].code}</code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
