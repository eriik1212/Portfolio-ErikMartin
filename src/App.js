import './App.css';
import Header from './components/Header';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';


function App() {
  return (
    <div className="App">
      <div id='home'></div>
      <Header/>
      <Home/>
      <div className='space-between' id='projects'></div>
      <Projects/>
      <div className='space-between' id='skills'></div>
      <Skills />
      <div className='space-between' id='contact'></div>
      <Contact />
    </div>
  );
}

export default App;
