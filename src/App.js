import MatchupCard from './components/MatchupCard/MatchupCard.js';

import './App.scss';

function App() {
  return (
    <div className="App">
      <container className="App-container">
        <header className="header">Fantasy Football Scoreboard</header>
        <MatchupCard />
      </container>
    </div>
  );
}

export default App;
