import logo from './logo.svg';
import './App.css';
import Header from './Header.jsx'
import Home from './Home.jsx'

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <Home />
      </div>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </div>
  );
}

export default App;
