import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <a
          href="https://www.linkedin.com/in/oscar-bejarano-ab1568241/"
          target="_blank"
        >
          <img
            src="https://res.cloudinary.com/dpnnlqglr/image/upload/v1681192052/OBlogoNofondoGrande_npoe5q.png"
            className="logo"
            alt="Oscar logo"
          />
        </a>
      </div>
      <h1>Portfolio under construction...</h1>
      <div className="card">
        <button
          onClick={() =>
            (location.href =
              "https://www.linkedin.com/in/oscar-bejarano-ab1568241/")
          }
        >
          Contac me
        </button>
      </div>
      <p>Created by Oscar Bejarano</p>
    </div>
  );
}

export default App;
