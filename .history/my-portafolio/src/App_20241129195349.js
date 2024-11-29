import './App.css';
import Header from './Header.jsx';
import Home from './Home.jsx';
import Skills from './Skills.jsx';
import Proyects from './Proyects.jsx';
import Contact from './Contact.jsx';

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <main>
          <Home />
          <Skills />
          <Proyects />
          <Contact />
        </main>

      </div>

    </div>
  );
}

export default App;
