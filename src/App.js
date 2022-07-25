import Dictionary from "./Dictionary";
import './App.css';
import logo from "./logo.png";

function App() {
  return (
    <div className="App">
      <div className="container">
        <img src={ logo } alt="book-logo" width="100" />
        <header className="App-header">
          Dictated
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          Open-source coded by Zahl, on{" "}
          <a href="https://github.com/SZahl/React-weather">GitHub</a>
        </footer>
      </div>
    </div>
  );
}

export default App;
