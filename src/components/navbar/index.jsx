import React from "react"
import Burger from "../burger"
import { Nav } from "./style"

const Navbar = () => {
    return (
      <Nav>
        <div className="logo">
          <h1>CricLine</h1>
        </div>
        <Burger />
      </Nav>
    )
  }
  
  export default Navbar