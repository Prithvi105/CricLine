import React from 'react';
 import { useState } from 'react';
import { useDispatch } from 'react-redux' 
import { useNavigate } from 'react-router';
import Wrapper from './style';
 


const StartAMatch = () => {

  const [team1, setTeam1] = useState('');
  const [team2, setTeam2] = useState('');
  const [overs, setOvers] = useState('');
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const start = () => {
    if (team1 && team2 && overs ) {
      dispatch({
        type : "SET_TEAM_NAMES",
        payload :{  team1,team2,overs }
      })
      navigate('/scorecard');
    } else {
      alert('Please fill in all the required fields.');
    }
  };

 
  return (
    <Wrapper>
      <form>
      <h1>Enter Details</h1>
      <div>
        <input
          type="text"
          placeholder=' Enter Batting Team Name'
          value={team1}
          onChange={(e) => {setTeam1(e.target.value)}}
        />
    </div>
      <div>
        <input
          type="text"
          placeholder=' Enter Bowling Team Name'
          value={team2}
          onChange={(e) => {setTeam2(e.target.value)}}
        />
      </div>
      <div>
        <input
          type="number"
          placeholder='Enter Overs'
          value={overs}
          onChange={(e) => {setOvers(e.target.value)}}
        />
      </div>
      <div id="submit">
                    <input type='submit'
                        value='Start Match'
                        onClick={start}
                    />
                </div>

      </form>
    </Wrapper>
  );
};

export default StartAMatch
