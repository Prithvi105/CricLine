import { styled } from "styled-components";

const Wrapper = styled.div`
display: flex;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
max-width : 500px;
margin : auto;
 min-height: 88.5vh;
    h1{
        font-size: 35px;
  margin-bottom: 70px;
    }
    h2{
        font-size: 24px;
        margin-bottom: 20px;  
    }
    p{
        font-size:0.96rem;
    }
    .coin{
        width: 150px;
    height: 150px;
    border: 2px solid #333;
    border-radius: 50%;
    box-shadow: #333;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    cursor: pointer;
    animation: spin 2s ease-in-out;
    background-color: teal;
    }
    .side{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
     
  .coin.rotate {
    animation: rotate 2s ease-in-out;
  }
  
  @keyframes rotate {
    0% {
      transform: rotateY(0deg);
    }
    100% {
      transform: rotateY(720deg);
    }
  }
  #submit input[type=submit]  {
    padding : 0 50px;
    font-size:1.5rem;
    background :  green ;
    color : white;
    margin-top : 15px ;
    border-radius : 5px;
    width : 200px;
    height : 40px;
   
 }`
  export default Wrapper