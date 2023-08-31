import { styled } from "styled-components";

const Wrapper = styled.div`
min-height: 61.7vh;
  padding: 100px 0;
  background-image: linear-gradient(2deg, rgba(0, 98, 190, 0.5), rgba(0, 100, 200, 0.7)),
    url('https://media.istockphoto.com/id/177427917/photo/close-up-of-red-cricket-ball-and-bat-sitting-on-grass.webp?b=1&s=170667a&w=0&k=20&c=WGO8Ikx5NSa1W7KC922jlzgnSq46gnP6G14cGWsvVUw=');

  background-size: cover; /* This ensures the background image covers the entire container */
  background-position: center center; /* Center the background image */
  


    
    text-align: center;
    display: flex;
    flex-direction : column;
    justify-content : center;
    align-items: center;
    color: #fff;
    h1{
        font-size : 1.5rem;
    }
    a{
        display : inline-block;
        background : #292;
        color : #fff;
        text-decoration : none;
        font-weight : bolder;
        padding : 15px 30px;
        border-radius : 3px;
        margin-top: 30px;
        box-shadow : 0px 2px 2px #000;
        border-bottom : solid 3px #070;
    }
    
`

export default Wrapper