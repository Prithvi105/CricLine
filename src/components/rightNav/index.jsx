import React from 'react';
import { Wrapper } from './style';
import { Link } from 'react-router-dom';

const RightNav = ({ open }) => {
    return (
      <Wrapper open={open}>
        <Link to = "/" className='home'><li>Home</li></Link>
        <Link to = "StartAMatch" className='startAMatch'><li>Start A Match</li></Link>
      </Wrapper>
    )
  }
  
  export default RightNav
  