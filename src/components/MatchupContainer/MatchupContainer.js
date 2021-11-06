import MatchupCard from '../MatchupCard/MatchupCard.js'

import './MatchupContainer.scss';

function MatchupContainer() {

    return (
      <div className="matchup-container">
          <span className='matchup-card-header'>Prestige Worldwide</span>
          <MatchupCard
            apiUrl={'https://api.sleeper.app/v1/league/652518774834044928/matchups/9'}
            heroIndex={0}
            villainIndex={1}
          />
          <span className='matchup-card-header'>Megalabowl</span>
          <MatchupCard
            apiUrl={'https://api.sleeper.app/v1/league/740771306848673792/matchups/9'}
            heroIndex={2}
            villainIndex={6}
          />
      </div>
    );
  }
  
  export default MatchupContainer;