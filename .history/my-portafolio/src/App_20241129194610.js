import logo from './logo.svg';
import './App.css';
import Header from './Header.jsx'

function App() {
  return (
    
    <Header/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola         
          </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

  );
}

export default App;
