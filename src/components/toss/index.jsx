import React, { useState } from 'react'
import Wrapper from './style'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

const Toss = () => {
  const team1 = useSelector(state => state.team1)
  const team2 = useSelector(state => state.team2)
  const [result, setResult] = useState('')
  const [isRotating, setIsRotating] = useState(false)
  const [coinTapped, setCoinTapped] = useState(false)

  const handleToss = () => {
    if (!isRotating) {
      setIsRotating(true)

      setTimeout(() => {
        const randomResult = Math.random() < 0.5 ? 'Heads' : 'Tails'
        setResult(randomResult)

        const winner = randomResult === 'Heads' ? team1 : team2
        setCoinTapped(true) // Update coinTapped state

        setIsRotating(false)
      }, 2000)
    }
  }

  const navigate = useNavigate()

  const choice = () => {
    if (!coinTapped) {
      alert('Please tap the coin before proceeding.')
    } else {
      navigate('/MatchForm')
    }
  }

  return (
    <Wrapper className="coin-toss-container">
      <h2>Let's Toss!!</h2>
      <h3>Tap the coin</h3>

      <p>(if heads comes team 1 will win and will bat first otherwise team 2)</p>
        
      <div
        className={`coin ${isRotating ? 'rotate' : ''}`}
        onClick={handleToss}
      >
        <div className="side">{result}</div>
      </div>

      <div id="submit">
        <input 
          type='submit'
          value='Next'
          onClick={choice}
        />
      </div>
    </Wrapper>
  )
}

export default Toss
