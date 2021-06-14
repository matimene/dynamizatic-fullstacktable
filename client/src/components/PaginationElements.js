import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const PaginationButton = styled.button`
  width: 30px;
  height: 25px;
  border: none;
  border-radius: 5px;
  background-color: ${(props) => (props.selected ? "#f2ccff" : "")};
  color: ${(props) => (props.selected ? "#9900cc" : "#000")};
  margin: 1px;
`;
