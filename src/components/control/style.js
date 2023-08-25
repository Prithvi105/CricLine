import { styled } from "styled-components";

const Wrapper = styled.section`

    .inner{
        display : flex;
        flex-wrap : wrap;
        max-width : 400px;
        margin: auto;
        position :fixed;
        bottom :0;
       

        input{
            flex : 1;
            min-width : 100px;
            min-height : 100px;
            font-size : 1.4rem;
            cursor : pointer;
        }
    }
`

export default Wrapper