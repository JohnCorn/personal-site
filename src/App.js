import './index.css';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import games from './components/game_data';
import apps from './components/app_data';
import NavBar from './components/NavBar'
import About from './components/About'
import Work from './components/Work';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <About/>
      <Work apps={apps}/>
    </div>
  );
}

export default App;