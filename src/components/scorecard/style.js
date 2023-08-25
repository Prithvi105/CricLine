import { styled } from "styled-components";

 export const Wrapper = styled.main`

    flex : 1;
    text-align: center;
    font-size: 2rem;
    .inner{
      max-width : 400px;
      margin : auto;
      p{
        margin : 5px;
      }
    
    }

    .timeline{
    display : flex;
    overflow: auto;
    justify-content: flex-end;
    background-color: grey;
    }
     .timeline-item{
        min-width : 38px;
        height: 38px;
        text-align: center;=
        line-height: 38px;
        border-radius: 19px;
        background : maroon;
        color : #fff;
        margin : 10px;
        font-size: 0.8rem;
      }
     #teams{
      background : grey;
      display : flex;
      justify-content : space-between;
      font-size : 0.5em;
      max-width : 400px;
      margin : auto;
      padding : 0 20px;
     }
     h3{
      margin-top:0px;
      margin-bottom : 1px;
     }
    
 
  `
 