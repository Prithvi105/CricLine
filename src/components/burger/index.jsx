import React from "react"
import { useState } from "react"
import RightNav from "../rightNav"
import { StyledBurger } from "./style"
const Burger = () => {
  const [open, setOpen] = useState(false)
    
    return (
      <>
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
          <div />
          <div />
          <div />
        </StyledBurger>
        <RightNav open={open}/>
      </>
    )
  }
  
  export default Burger