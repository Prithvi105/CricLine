import React, { useEffect, useRef, useState } from 'react';
import Control from '../control';
import { Timeline, Wrap, Wrapper } from './style';

const Scorecard = () => {
  const [score, setScore] = useState(0);
  const [balls, setBalls] = useState(0);
  const [wickets, setWickets] = useState(0);
  const [timeline, setTimeline] = useState([]);
  const [inning, setInning] = useState(1);
  const [target, setTarget] = useState(null);


  useEffect(() => {
    setTimeout(() => {
      document.body.webkitRequestFullscreen();
    }, 1000);
  }, []);

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
    } else if (inning === 2 && score < target  && wickets === 10) {
      alert('It\'s a tie!');
    } else if(inning ===2 && wickets === 10) {
      alert('First team wins!');
    
  }
  }, [wickets, inning, score, target]);

  const timelineRef = useRef();

  return (
    <div>
      <Wrapper>
        <Wrap className='inner'>
          <h2>Scorecard </h2>
          <p>
             Inning -{inning}
          </p>
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
          <Timeline className='timeline' ref={timelineRef}>
            {timeline.map(item => (
              <div className='timeline-item'>{item}</div>
            ))}
          </Timeline>
        </Wrap>
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
