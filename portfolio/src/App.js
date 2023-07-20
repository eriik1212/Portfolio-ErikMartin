import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Projects from './pages/Projects';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Projects/>
    </div>
  );
}

export default App;
