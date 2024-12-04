import componentImg from './assets/components.png';
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
      <img src={props.img} alt={props.title} />
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
            <CoreConcept
              title="Components"
              description="The core UI of building block."
              img={componentImg}
            />
            <CoreConcept />
            <CoreConcept />
            <CoreConcept />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
