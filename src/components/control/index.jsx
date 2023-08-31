import {  useEffect,useState ,useRef} from 'react'
import Wrapper from './style'

const Control = (
    {
        setScore,
        setBalls,
        setWickets,
        setTimeline,
        score,
        balls,
        overs,
        wickets,
        timeline,
        inning,
        target,
    }
) => {

    const [history, setHistory] = useState([])
    const [buttonsDisabled, setButtonsDisabled] = useState(false)

    useEffect(() => {
        if ((inning === 2 && score === (target - 1) && wickets === 10)|| (inning === 2 && score >= target)||(inning === 2 && score === (target - 1) && balls === (overs * 6 ))||(inning === 2 && balls === (overs * 6 ))) {
          setButtonsDisabled(true)
        }
      }, [inning, score, target,wickets,balls ,overs])
  
    const updateScore = (e) => {
        const value = e.target.value
        

        setHistory([...history, { score, balls, wickets, timeline }])

        

        switch(value){
            case "0":
                setBalls(balls => balls + 1)
                setTimeline(timeline => [...timeline, value])
            break

            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
                setScore(score => score + parseInt(value))
                setBalls(balls => balls + 1)
                setTimeline(timeline => [...timeline, value])
            break

            case "OUT":
                setBalls(balls => balls + 1)
                setWickets(wicket => wicket + 1)
                setTimeline(timeline => [...timeline, value])
            break

            case "Wd+":
                const extraRunsWd = parseInt(prompt("Enter extra runs for the wide ball:"))
                if (!isNaN(extraRunsWd) && extraRunsWd>=0  && extraRunsWd<=6) {
                    setScore(score => score + extraRunsWd + 1)  
                    setTimeline(timeline => [...timeline, `Wd+${extraRunsWd}`]) 
                }else {
                    alert("Invalid input for extra runs. Please enter a number between 0 and 6")
                  }
            break

            case "NB+":
                const extraRunsNB = parseInt(prompt("Enter extra runs for the no-ball:"))
                if (!isNaN(extraRunsNB) && extraRunsNB >=0  && extraRunsNB <=6 ) {
                    setScore(score => score + extraRunsNB + 1)  
                    setTimeline(timeline => [...timeline, `NB+${extraRunsNB}`]) 
                }else {
                    alert("Invalid input for extra runs. Please enter a number between 0 and 6")
                  }
            break

            case "Bye+":  
                const extraRunsBye = parseInt(prompt("Enter the runs for the Bye :"))
                if (!isNaN(extraRunsBye) && extraRunsBye>=0  && extraRunsBye<=6) {
                    setBalls(balls => balls + 1)
                    setScore(score => score + extraRunsBye)  
                    setTimeline(timeline => [...timeline, `Bye+${extraRunsBye}`]) 

                }else {
                    alert("Invalid input for extra runs. Please enter a number between 0 and 6")
                  }
            break
            
            case "UNDO":
                if (inning === 1 && history.length > 0) {
                    const previousState = history.pop()
                    setScore(previousState.score)
                    setBalls(previousState.balls)
                    setWickets(previousState.wickets)
                    setTimeline(previousState.timeline)
                    setHistory([...history])
                }
                else if(inning === 1 && history.length === 0){
                    alert('nothing to undo')
                }
            

            break

            default :
                setScore(score)
             }       
     }        
     const timelineRef = useRef()
  return (
    <Wrapper>
        <div className='timeline' ref={timelineRef}>
            {timeline.map(item => (
              <div className='timeline-item'>{item}</div>
            ))}
          </div>
        <div className="inner">
            <input type="button" value={"UNDO"}  onClick={updateScore} disabled={buttonsDisabled}/>
            <input type="button" value={"NB+"} onClick={updateScore} disabled={buttonsDisabled}/>
            <input type="button" value={"Bye+"} onClick={updateScore} disabled={buttonsDisabled}/>
            <input type="button" value={4} onClick={updateScore} disabled={buttonsDisabled}/>
            <input type="button" value={6} onClick={updateScore} disabled={buttonsDisabled}/>
            <input type="button" value={"Wd+"} onClick={updateScore} disabled={buttonsDisabled}/>
            <input type="button" value={2} onClick={updateScore} disabled={buttonsDisabled}/>
            <input type="button" value={3} onClick={updateScore} disabled={buttonsDisabled}/>
            <input type="button" value={5} onClick={updateScore} disabled={buttonsDisabled}/>
            <input type="button" value={0} onClick={updateScore} disabled={buttonsDisabled}/>
            <input type="button" value={1} onClick={updateScore} disabled={buttonsDisabled}/> 
            <input type="button" value={"OUT"} onClick={updateScore} disabled={buttonsDisabled}/>
        </div>
    </Wrapper>
  )
}

export default Control








