
import { styled } from "styled-components";

const Wrapper = styled.div`
margin:100px auto;
border-radius : 3px;
box-sizing : border-box;
max-width:400px;
min-height: 61.7vh;

form {
    padding :30px 40px;
    margin :10px auto ;
    width: 70%;
    border : solid white 1px;
    border-radius : 20px;
    box-shadow: 4px 4px 10px #00000067;
    background-color : white;
    font-size: 20px;
    min-height: 40vh;
  
}
form h1 {
    font-size : 1.6rem;
    margin :5px 0 20px 0;

}
form input[type="text"],
form input[type="number"]
{
    border: 0.5px solid #6c6c6c;
    border-radius : 5px;
    cursor : pointer;
    width : 100%;
    height : 45px;
    box-sizing : border-box;
     margin: 8px 0px;
    padding :5px;
     color: black;
     

    &:focus{
        color: black;
    }
}
form #submit  {
  display:flex;
  justify-content:center;
  align-items:center;
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
  
}



` 
export default Wrapper
