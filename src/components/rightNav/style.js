import styled from 'styled-components';

 export const Wrapper = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 53px;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 4rem;
    // transition: transform 0.3s ease-in-out;

    li {
      color: #fff;
      list-style : none;
    }
  }
`;