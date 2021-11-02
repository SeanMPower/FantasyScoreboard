import Header from './Header.js';
import MatchupContainer from './components/MatchupContainer/MatchupContainer.js';

import './App.scss';

function App() {
  return (
    <div className="App">
      <container className="App-container">
        <Header />
        <MatchupContainer />
      </container>
    </div>
  );
}

export default App;
