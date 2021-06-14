import styled from "styled-components";

export const OrderListContainer = styled.table`
  width: 90vw;
  margin: auto;
`;

export const OrderListTable = styled.table`
  width: 100%;
  justify-content: space-between;
  border-collapse: collapse;
`;

export const TableHeader = styled.th`
  text-transform: uppercase;
  font-weight: bold;
  color: lightgray;
  font-size: 0.8rem;
  padding: 10px;
  text-align: start;
`;

export const TableTr = styled.tr`
  border: solid;
  border-top: none;
  border-width: 2px 0;
  border-color: lightgray;
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 8px;
  padding-bottom: 8px;
`;
