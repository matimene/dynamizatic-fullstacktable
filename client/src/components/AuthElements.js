import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  width: 350px;
  height: 400px;
  align-items: center;
  justify-content: center;
  background-color: #000;
  color: #fff;
  margin: auto;
  border-radius: 20px;
  flex-direction: column;
`;

export const Form = styled.form`
  text-align: center;
  align-items: center;
  margin: auto;
`;

export const FormLabel = styled.label`
  font-weight: bold;
`;

export const FormTitle = styled.div`
  font-weight: bold;
  font-size: 2rem;
  text-transform: uppercase;
`;

export const FormInput = styled.input`
  width: 250px;
  height: 20px;
  border: none;
  border-radius: 5px;
  text-align: center;
`;

export const FormItemDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 10px;
`;

export const FormButton = styled.button`
  padding: 0.75rem 1.5rem;
  font-size: 0.8rem;
  background-color: #fff;
  color: #000;
  font-weight: bold;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  margin-top: 20px;
`;

export const FormButtonSwitch = styled.button`
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
  background-color: #fff;
  color: #000;
  font-weight: bold;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  margin-bottom: 20px;
`;
