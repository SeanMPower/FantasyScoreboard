import MatchupCard from '../MatchupCard/MatchupCard.js'

import './MatchupContainer.scss';

function MatchupContainer() {

    return (
      <div className="matchup-container">
          <div id="week-selector">
            <label for="nfl-week-selector">Week:</label>
            <select name="nfl-week" id="nfl-week">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9" selected>9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
            </select>
          </div>
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