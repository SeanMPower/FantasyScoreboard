import Header from './components/Header/Header.js';
import MainContentContainer from './components/MainContentContainer/MainContentContainer.js';
import Footer from './components/Footer/Footer.js';

import './App.scss';

function App() {
  return (
    <div className="App">
      <container className="App-container">
        <Header />
        <MainContentContainer />
        <Footer />
      </container>
    </div>
  );
}

export default App;
