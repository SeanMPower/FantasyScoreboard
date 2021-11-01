import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './MatchupCard.scss';

function MatchupCard() {
    const [matchupData, setMatchupData] = useState({})
    const [matchupDataFetched, setMatchupDataFetched] = useState(false);

    useEffect(() => {
        axios.get('https://api.sleeper.app/v1/league/652518774834044928/matchups/8')
                .then(res => {
                    setMatchupData(res.data[0])
                    setMatchupDataFetched(true)
                })
        console.log(matchupData);
    }, [matchupDataFetched])

    return (
      <div className="matchup-card-container">
          <div className="matchup-hero">
              {/* Hero: {matchupData.points} */}
          </div>
          <div className="matchup-villan">
              
          </div>
      </div>
    );
  }
  
  export default MatchupCard;