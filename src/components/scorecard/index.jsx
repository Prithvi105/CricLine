import React, { useEffect, useRef, useState } from 'react';
import Control from '../control';
import { Wrapper } from './style';
import { useSelector } from 'react-redux';

const Scorecard = () => {
  const team1 = useSelector(state => state.team1);
  const team2 = useSelector(state => state.team2);
  const [score, setScore] = useState(0);
  const [balls, setBalls] = useState(0);
  const [wickets, setWickets] = useState(0);
  const [timeline, setTimeline] = useState([]);
  const [inning, setInning] = useState(1);
  const [target, setTarget] = useState(null);


  useEffect(() => {
    if (wickets === 10) {
      alert(`Inning Done !`);
      if (inning === 1) {
        setTarget(score + 1);
        setInning(2);
        setScore(0);
        setBalls(0);
        setWickets(0);
        setTimeline([]);
      }    
    }
    if (inning === 2 && score >= target) {
      alert('Second team wins!');
    } else if (inning === 2 && score === target-1  && wickets === 10) {
      alert('It\'s a tie!');
    } else if(inning ===2 && wickets === 10) {
      alert( 'first wins!');
    
  }
  }, [wickets, inning, score, target]);

  const timelineRef = useRef();

  return (
    <div>
      <Wrapper>
      <div id = "teams">
          <p>Batting Team : {team1}</p>
          <p>Bowling Team : {team2}</p>
        
        </div>
        <div className='inner'>
          <h2>Scorecard </h2>
          <p>
            Score : {score}/{wickets}
          </p>
          <p>
            Overs : {`${Math.floor(balls / 6)}.${balls % 6}`}
          </p>
          <p>
            {inning === 2 && target !== null &&(
              <div>Target : {target}</div>
            )}
          </p>
          <div className='timeline' ref={timelineRef}>
            {timeline.map(item => (
              <div className='timeline-item'>{item}</div>
            ))}
          </div>
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
      />
    </div>
  );
};

export default Scorecard;
