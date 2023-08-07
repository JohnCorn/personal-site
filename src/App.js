import './index.css';
import Home from './components/Home';
import NavBar from './components/NavBar'
import About from './components/About'
import Work from './components/work/Work';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <About/>
      <Work />
    </div>
  );
}

export default App;