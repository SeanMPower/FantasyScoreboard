import Sidebar from '../Sidebar/Sidebar.js';
import MatchupContainer from '../MatchupContainer/MatchupContainer.js'

import './MainContentContainer.scss';

function MainContentContainer() {

    return (
      <div className="main-content-container">
          <Sidebar />
          <MatchupContainer />
      </div>
    );
  }
  
  export default MainContentContainer;