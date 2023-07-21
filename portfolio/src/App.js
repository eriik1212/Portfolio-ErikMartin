import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <About/>
      <Projects/>
    </div>
  );
}

export default App;
