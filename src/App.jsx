import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './component/header';
import Control from './component/control';
import { useEffect, useRef, useState } from 'react';

function App() {

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
    <BrowserRouter>
      <Header />
      <main>
        <div className='inner'>
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
      </main>
      <Control
        setScore={setScore}
        setBalls={setBalls}
        setWickets={setWickets}
        setTimeline={setTimeline}
      />
    </BrowserRouter>
  );
}

export default App;
