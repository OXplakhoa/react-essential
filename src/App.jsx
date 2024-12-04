import CoreConcept from "./components/CoreConcept";
import Header from "./components/Header";
import { CORE_CONCEPTS } from "./data";

function App() {
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
      </main>
    </div>
  );
}

export default App;
