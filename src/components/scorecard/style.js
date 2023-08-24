import { styled } from "styled-components";

 export const Wrapper = styled.main`

    flex : 1;
    text-align: center;
    font-size: 2rem;
    .inner{
      max-width : 400px;
      margin : auto;
    }

    .timeline{
    display : flex;
    overflow: auto;
    justify-content: flex-end;
    background-color: grey;
    }
     .timeline-item{
        min-width : 33px;
        height: 32px;
        text-align: center;
        line-height: 32px;
        border-radius: 16px;
        background : maroon;
        color : #fff;
        margin : 12px;
        font-size: 1rem;
      }
     #teams{
      background : grey;
      display : flex;
      justify-content : space-between;
      padding : 0px 30px;
      font-size : 0.5em;
     }
 
  `
 