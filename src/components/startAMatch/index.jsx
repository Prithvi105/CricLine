import React from 'react';
 import { useState } from 'react';
import { Container, FormGroup, FormInput, FormLabel,Title } from './style';
import { useNavigate } from 'react-router';
 


const StartAMatch = () => {
  const [team1, setTeam1] = useState('');
  const [team2, setTeam2] = useState('');
  const [overs, setOvers] = useState('');
  const navigate = useNavigate();
  const start =()=>{
    navigate("/scorecard")
  }

 
  return (
    <Container>
      <Title>Start A Match</Title>
      <FormGroup>
        <FormLabel>Team 1:</FormLabel>
        <FormInput
          type="text"
          value={team1}
          onChange={(e) => setTeam1(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <FormLabel>Team 2:</FormLabel>
        <FormInput
          type="text"
          value={team2}
          onChange={(e) => setTeam2(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <FormLabel>Overs:</FormLabel>
        <FormInput
          type="number"
          value={overs}
          onChange={(e) => setOvers(e.target.value)}
        />
      </FormGroup>
      <input
        type = "button"
        value = "start Match"
        onClick = {start}
      />
    </Container>
  );
};

export default StartAMatch
