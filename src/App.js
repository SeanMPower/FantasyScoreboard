import Header from './components/Header/Header.js';
import MainContentContainer from './components/MainContentContainer/MainContentContainer.js';

import './App.scss';

function App() {
  return (
    <div className="App">
      <container className="App-container">
        <Header />
        <MainContentContainer />
      </container>
    </div>
  );
}

export default App;
