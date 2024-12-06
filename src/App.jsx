import { useState } from "react";
import CoreConcept from "./components/CoreConcepts/CoreConcept";
import Header from "./components/Header/Header";
import TabButton from "./components/TabButton/TabButton";
import { CORE_CONCEPTS, EXAMPLES } from "./data";
import CoreConcepts from "./components/CoreConcepts/CoreConcepts";
import Examples from "./components/Examples/Examples";

function App() {
  
  return (
    <div>
      <Header />
      <main>
        <CoreConcepts/>
        <Examples/>
      </main>
    </div>
  );
}

export default App;

