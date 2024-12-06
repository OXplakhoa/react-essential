import { useState } from "react";
import TabButton from "../TabButton/TabButton";
import { EXAMPLES } from "../../data";

export default function Examples() {
  const [topic, setTopic] = useState();
  const handleSelect = (selectedTopic) => {
    setTopic(selectedTopic);
  };
  return (
    <>
      <section id="examples">
        <h2>Examples</h2>
        <menu>
          <TabButton onClick={() => handleSelect("components")}>
            Components
          </TabButton>
          <TabButton onClick={() => handleSelect("jsx")}>JSX</TabButton>
          <TabButton onClick={() => handleSelect("props")}>Props</TabButton>
          <TabButton onClick={() => handleSelect("state")}>State</TabButton>
        </menu>
        {topic ? (
          <div id="tab-content">
            <h3>{EXAMPLES[topic].title}</h3>
            <p>{EXAMPLES[topic].description}</p>
            <pre>
              <code>{EXAMPLES[topic].code}</code>
            </pre>
          </div>
        ) : (
          <p>Please select a topic</p>
        )}
      </section>
    </>
  );
}
