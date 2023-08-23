import React from 'react'
import { useEffect,useRef,useState } from 'react'
import Control from '../control'
import { Timeline, Wrap, Wrapper } from './style'

const Scorecard = () => {
    const [score, setScore] = useState(0)
  const [balls, setBalls] = useState(0)
  const [wickets, setWickets] = useState(0)
  const [timeline, setTimeline] = useState([])

  useEffect(() => {
    setTimeout(() => {
      document.body.webkitRequestFullscreen()
    },1000)
  },[])

  useEffect(() => {
    if(wickets === 10){
      alert(`Inning Done !`)
    }
  },[wickets])

  const timelineRef = useRef()
  return (
    <div>
      <Wrapper>
        <Wrap className='inner'>
          <p>
          Score : {score}/{wickets}
          </p>
          <p>
            Overs : {`${Math.floor(balls/6)}.${balls%6}`}
          </p>
          <Timeline className='timeline' ref={timelineRef}>
            {
              timeline.map(item => <div className='timeline-item'>{item}</div>)
            }
          </Timeline>
        </Wrap>
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
