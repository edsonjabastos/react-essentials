import atomImg from "./assets/react-core-concepts.png";

function App() {
  return (
    <div>
      <header>
        <img src={atomImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          Elemental React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
