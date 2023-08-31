import { styled } from "styled-components";

const Wrapper = styled.section`
position: absolute;
bottom: 0;
left: 0;
width: 100%;
margin-top: auto;
   
#endInning{
    max-width : 400px;
    margin: auto;
    input{
        background : black;
        color : white;
        padding : 9px 10px;
        
    }
}
    .inner{
        display : flex;
        flex-wrap : wrap;
        max-width : 400px;
        margin: auto;
        
       

        input{
            flex : 1;
            min-width : 100px;
            min-height : 95px;
            font-size : 1.7rem;
            cursor : pointer;
        }
    }
    .timeline{
        display : flex;
        overflow: auto;
        justify-content: flex-end;
        background-color: grey;
        max-width : 400px;
        margin : auto;
        }
         .timeline-item{
            min-width : 38px;
            height: 38px;
            text-align: center;
            line-height: 38px;
            border-radius: 19px;
            background : maroon;
            color : #fff;
            margin : 10px;
            font-size: 0.8rem;
          }
`

export default Wrapper