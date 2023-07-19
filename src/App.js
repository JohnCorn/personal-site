import './index.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import GameList from './components/GameList';
import games from './components/game_data';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <GameList games={games}/>
    </div>
  );
}

export default App;