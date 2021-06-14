import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  width: 450px;
  height: 450px;
  align-items: center;
  justify-content: center;
  background-color: #b3e6ff;
  margin: auto;
  border-radius: 20px;
`;

export const OrderForm = styled.form`
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
  border: none;
  border-radius: 5px;
  text-align: center;
`;

export const FormSelect = styled.select`
  width: 250px;
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
  background-color: #000;
  color: #fff;
  font-weight: bold;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  margin-top: 20px;
`;
