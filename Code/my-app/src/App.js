import logo from './logo.svg';
import kibic from './kibic.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={kibic} className="Kibic-logo" alt="kibic" />
        <p>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Naucz sie Reacta
        </a>
      </header>
    </div>
  );
}

export default App;
