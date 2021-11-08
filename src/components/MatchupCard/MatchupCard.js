import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './MatchupCard.scss';

function MatchupCard(props) {
    const [matchupData, setMatchupData] = useState([])

    let refreshData;

    const getMatchupData = () => {
        axios({
            method: 'get',
            url: props.apiUrl,
        }).then(res => {
            setMatchupData(res.data)
            clearInterval(refreshData)
            refreshData = setInterval(getMatchupData, 15000)
        })
    }

    useEffect(() => {
        getMatchupData()
    }, []);

    return (
      <div className="matchup-card">
          <div className="matchup-hero">
              Hero: {matchupData[props.heroIndex] ? matchupData[props.heroIndex].points.toFixed(2) : 0}
          </div>
          <div className="matchup-villan">
              Villain: {matchupData[props.villainIndex] ? matchupData[props.villainIndex].points.toFixed(2) : 0}
          </div>
      </div>
    );
  }
  
  export default MatchupCard;