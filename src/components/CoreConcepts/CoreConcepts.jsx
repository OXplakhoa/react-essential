import { CORE_CONCEPTS } from "../../data";
import CoreConcept from "./CoreConcept";

export default function CoreConcepts() {
  return (
    <>
      <section id="core-concepts">
        <h2>Core Concept</h2>
        <ul>
          {CORE_CONCEPTS.map((core, idx) => {
            return <CoreConcept {...core} key={idx} />;
          })}
        </ul>
      </section>
    </>
  );
}
