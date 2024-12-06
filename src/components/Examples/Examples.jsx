import { useState } from "react";
import TabButton from "../TabButton/TabButton";
import { EXAMPLES } from "../../data";
import Section from "../Section";
import Tabs from "../CoreConcepts/Tabs";

export default function Examples() {
  const [topic, setTopic] = useState();
  const handleSelect = (selectedTopic) => {
    setTopic(selectedTopic);
  };
  return (
    <>
      <Section title="Examples" id="examples">
        <Tabs
        buttonContainer="menu"
          button={
            <>
              <TabButton onClick={() => handleSelect("components")}>Components</TabButton>
              <TabButton onClick={() => handleSelect("jsx")}>JSX</TabButton>
              <TabButton onClick={() => handleSelect("props")}>Props</TabButton>
              <TabButton onClick={() => handleSelect("state")}>State</TabButton>
            </>
          }
        >
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
        </Tabs>
      </Section>
    </>
  );
}
