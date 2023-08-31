import React from 'react'

import Wrapper from './style'
import { Link } from 'react-router-dom'

 const Cover = () => {
  
  return (
    <Wrapper>
        {/* <h1 >lets play!!</h1> */}
        <Link to="/toss">Lets Play!!</Link>
        

    </Wrapper>
  )
}
export default Cover
