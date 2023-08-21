import React from 'react'
import Wrapper from './style'

const Control = (
    {
        setScore,
        setBalls,
        setWickets,
        setTimeline
    }
) => {

    const updateScore = (e) => {
        const value = e.target.value
        switch(value){
            case "0":
                setBalls(balls => balls + 1)
                setTimeline(timeline => [...timeline, value])
            break;
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
                setScore(score => score + parseInt(value))
                setBalls(balls => balls + 1)
                setTimeline(timeline => [...timeline, value])
            break;
            case "OUT":
                setBalls(balls => balls + 1)
                setWickets(wicket => wicket + 1)
                setTimeline(timeline => [...timeline, value])
            break;
            case "Wd+":
                setScore(score => score + 1)
                setTimeline(timeline => [...timeline, value])
            break;
            case "NB+":
                setScore(score => score + 1)
                setTimeline(timeline => [...timeline, value])
            break;
            case "Bye+":
                setBalls(balls => balls + 1)
                setTimeline(timeline => [...timeline, value])
            break;
            default:
                setScore(score => score)
        }
    }

  return (
    <Wrapper>
        <div className="inner">
            <input type="button" value={6} onClick={updateScore}/>
            <input type="button" value={"Bye+"} onClick={updateScore}/>
            <input type="button" value={"NB+"} onClick={updateScore}/>
            <input type="button" value={"UNDO"}  onClick={updateScore}/>
            <input type="button" value={3} onClick={updateScore}/>
            <input type="button" value={4} onClick={updateScore}/>
            <input type="button" value={5} onClick={updateScore}/>
            <input type="button" value={"Wd+"} onClick={updateScore}/>
            <input type="button" value={0} onClick={updateScore}/>
            <input type="button" value={1} onClick={updateScore}/>
            <input type="button" value={2} onClick={updateScore}/>
            <input type="button" value={"OUT"} onClick={updateScore}/>
        </div>
    </Wrapper>
  )
}

export default Control
