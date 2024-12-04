import './Header.css'
export default function Header() {
  const Descriptions = ["Fundamental", "Crucial", "Core"];
  const rand = (max) => {
    return Math.floor(Math.random() * max);
  };
  const descript = Descriptions[rand(Descriptions.length)];
  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {descript} React concepts you will need for almost any app you are going
        to build!
      </p>
    </header>
  );
}
