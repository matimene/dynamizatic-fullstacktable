import styled from "styled-components";

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const FilterForm = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const FilterLabel = styled.label`
  margin-right: 10px;
`;

export const FormItems = styled.div`
  padding-left: 25px;
`;

export const TermInput = styled.input`
  border-radius: 10px;
  border-color: lightgray;
  width: 250px;
  height: 40px;
  outline: none;
`;

export const Button = styled.button`
  padding: 0.3rem 0.6rem;
  border-radius: 5px;
  color: #fff;
  border: none;
  background-color: #000;
`;

export const FilterSelect = styled.select`
  width: 200px;
  height: 40px;
  border-radius: 10px;
  border-color: lightgray;
`;
