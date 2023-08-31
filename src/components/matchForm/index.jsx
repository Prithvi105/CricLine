import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import Wrapper from './style'

const MatchForm = () => {
  const [team1, setTeam1] = useState('')
  const [team2, setTeam2] = useState('')
  const [overs, setOvers] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const start = () => {
    if (team1 && team2 && overs && overs > 0) {
      if (team1 === team2) {
        alert('Team 1 and Team 2 cannot be the same.')
      } else {
        dispatch({
          type: 'SET_TEAM_NAMES',
          payload: { team1, team2, overs },
        })
        navigate('/scorecard')
      }
    } else {
      alert('Please fill in all the required fields and enter a valid number of overs.')
    }
  }

  return (
    <Wrapper>
      <form>
        <h1>Enter Details</h1>
        <div>
          <input
            type="text"
            placeholder="Enter batting team"
            value={team1}
            maxLength= "9"
            onChange={(e) => {
              setTeam1(e.target.value)
            }}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter bowling team"
            value={team2}
            maxLength= "9"
            onChange={(e) => {
              setTeam2(e.target.value)
            }}
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="Enter Overs"
            value={overs}
            min="0"
            onChange={(e) => {
              setOvers(e.target.value)
            }}
          />
        </div>
        <div id="submit">
          <input type="submit" value="Next" onClick={start} />
        </div>
      </form>
    </Wrapper>
  )
}

export default MatchForm
