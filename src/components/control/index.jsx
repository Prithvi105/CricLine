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
        setInning,
        setTarget
    }
) => {
    const [historyInning1, setHistoryInning1] = useState([]);
    const [historyInning2, setHistoryInning2] = useState([]);
    const [buttonsDisabled, setButtonsDisabled] = useState(false);
    

    useEffect(() => {
        if ((inning === 2 && score === (target - 1) && wickets === 10)|| (inning === 2 && score >= target)||(inning === 2 && score === (target - 1) && balls === (overs * 6 ))||(inning === 2 && balls === (overs * 6 ))) {
          setButtonsDisabled(true)
        }
      }, [inning, score, target,wickets,balls ,overs])
  
    const updateScore = (e) => {
        const value = e.target.value
        
        if (value === "UNDO") {
            if (inning === 1 && historyInning1.length > 0) {
                const previousState = historyInning1.pop();
                setScore(previousState.score);
                setBalls(previousState.balls);
                setWickets(previousState.wickets);
                setTimeline(previousState.timeline);
                setHistoryInning1([...historyInning1]);
            } else if (inning === 2 && historyInning2.length > 0) {
                const previousState = historyInning2.pop();
                setScore(previousState.score);
                setBalls(previousState.balls);
                setWickets(previousState.wickets);
                setTimeline(previousState.timeline);
                setHistoryInning2([...historyInning2]);
            } else {
                alert('Nothing to undo');
            }
            return;
        }


        

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
            case "End Inning" :
            if (inning === 1) {
                alert(` Inning done`);
                setTarget (score + 1)
                setInning(2);
                setScore(0);
                setBalls(0);
                setWickets(0);
                setTimeline([]);}
                break
            
            

            default :
                setScore(score)
             }   
             const newState = { score, balls, wickets, timeline };

             
             if (inning === 1) {
                 setHistoryInning1([...historyInning1, newState]);
             } else if (inning === 2) {
                 setHistoryInning2([...historyInning2, newState]);
             }    
     }        
     const timelineRef = useRef()
  return (
    <Wrapper>
         <div id='endInning'>
        <input type= "button"  value= {"End Inning"} onClick = {updateScore} />
      </div>
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