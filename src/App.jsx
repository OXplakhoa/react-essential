import componentImg from './assets/components.png';
import { CORE_CONCEPTS } from './data';
const Descriptions = ["Fundamental", "Crucial", "Core"]
const rand = (max) => {
  return Math.floor(Math.random() * (max));
}

function Header (){
  const descript = Descriptions[rand(Descriptions.length)];
  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {descript} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  )
}

function CoreConcept(props) {
  return (
    <li>
      <img src={props.img}/>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  )
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concept</h2>
          <ul>
            {CORE_CONCEPTS.map((core, idx) => {
              return (
                <CoreConcept
                key={idx}
                title={core.title}
                description={core.description}
                img={core.image}
              />
              )
            })}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
