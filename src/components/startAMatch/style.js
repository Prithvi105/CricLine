import styled from 'styled-components';

 export const Container = styled.div`
  max-width:400px;
  
  margin: auto;
  padding: 59px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

export const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
`;

export const FormGroup = styled.div`
  margin-bottom: 15px;
`;

export const FormLabel = styled.label`
  display: block;
  font-weight: bold;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const StartMatchButton = styled.button`
  display: block;
  width: 100%;
  padding: 10px;
  background-color: green;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  

  &:hover {
    background-color: #0056b3;
  }
`;

