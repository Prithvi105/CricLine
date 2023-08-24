import React from 'react'
import { useEffect,useRef,useState } from 'react'
import Control from '../control'
import { useSelector } from 'react-redux'
import {  Wrapper } from './style'

const Scorecard = () => {
  const team1 = useSelector(state => state.team1);
  const team2 = useSelector(state => state.team2);
    const [score, setScore] = useState(0)
  const [balls, setBalls] = useState(0)
  const [wickets, setWickets] = useState(0)
  const [timeline, setTimeline] = useState([])


  useEffect(() => {
    if(wickets === 10){
      alert(`Inning Done !`)
    }
  },[wickets])

  const timelineRef = useRef()
  return (
    <div>
      <Wrapper>
      <div id = "teams">
          <p>Team 1: {team1}</p>
          <p>Team 2: {team2}</p>
        </div>
        < div className='inner'>
          <p>
          Score : {score}/{wickets}
          </p>
          <p>
            Overs : {`${Math.floor(balls/6)}.${balls%6}`}
          </p>
          <div className='timeline' ref={timelineRef}>
            {
              timeline.map(item => <div className='timeline-item'>{item}</div>)
            }
          </div>
        </div>
      </Wrapper>
      <Control
        setScore={setScore}
        setBalls={setBalls}
        setWickets={setWickets}
        setTimeline={setTimeline}
      />
    </div>
  )
}

export default Scorecard
