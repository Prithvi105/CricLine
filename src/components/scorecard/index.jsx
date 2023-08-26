import React, { useEffect, useState } from 'react';
import Control from '../control';
import { Wrapper } from './style';
import { useSelector } from 'react-redux';

const Scorecard = () => {
  const [inning, setInning] = useState(1);
  const team1 = useSelector(state => state.team1);
  const team2 = useSelector(state => state.team2);
  const overs = useSelector(state => state.overs);
  const [score, setScore] = useState(0);
  const [balls, setBalls] = useState(0);
  const [wickets, setWickets] = useState(0);
  const [timeline, setTimeline] = useState([]);
  const [target, setTarget] = useState(null);

  useEffect(() => {
    if (wickets === 10 || balls === overs * 6) {
      if (inning === 1) {
        alert(`Inning Done !`);
        setTarget(score + 1);
        setInning(2);
        setScore(0);
        setBalls(0);
        setWickets(0);
        setTimeline([]);
      }    
    }

    if ((inning === 2 && score >= target) || (inning === 2 && score >= target && balls <= overs * 6)) {
      alert(`${team2} wins`);
    } else if ((inning === 2 && score === target - 1 && wickets === 10) || (inning === 2 && score === target - 1 && balls === overs * 6)) {
      alert("It's a tie!");
    } else if ((inning === 2 && wickets === 10) || (inning === 2 && balls === overs * 6)) {
      alert(`${team1} win by ${target - score - 1} runs`);
    }

    if (inning === 2) {
      setTeamNames(team2, team1);
    }
  }, [wickets, balls, overs, inning, score, target, team1, team2]);

  const setTeamNames = (battingTeam, bowlingTeam) => {
    document.getElementById('batting-team').innerText = `Batting Team : ${battingTeam}`;
    document.getElementById('bowling-team').innerText = `Bowling Team : ${bowlingTeam}`;
  };

  return (
    <div>
      <Wrapper>
        <div id="teams">
          <p id="batting-team">Batting Team : {team1}</p>
          <p id="bowling-team">Bowling Team : {team2}</p>
        </div>
        <div className='inner'>
          <h3>Scorecard</h3>
          <p>Score : {score}/{wickets}</p>
          <p>Overs : {`${Math.floor(balls / 6)}.${balls % 6}`}/{overs}</p>
          <p>
            {inning === 2 && target !== null && <div>Target : {target}</div>}
          </p>
        </div>
      </Wrapper>
      <Control
        setScore={setScore}
        setBalls={setBalls}
        setWickets={setWickets}
        setTimeline={setTimeline}
        score={score}
        wickets={wickets}
        setTarget={setTarget}
        target={target}
        inning={inning}
        balls={balls}
        timeline={timeline}
        overs={overs}
      />
    </div>
  );
};

export default Scorecard;
