import './index.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import games from './components/game_data';
import apps from './components/app_data';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <Portfolio 
      games={games}
      apps={apps}
      />
    </div>
  );
}

export default App;