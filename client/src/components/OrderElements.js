import styled from "styled-components";

export const TableTr = styled.tr`
  border: solid;
  border-top: none;
  border-width: 1px 0;
  border-color: lightgray;
  color: "#6b6b47";
`;

export const TableTd = styled.td`
  text-transform: capitalize;
  font-size: 0.8rem;
  padding: 8px;
`;

export const StatusLabel = styled.label`
  text-transform: capitalize;
  font-size: 0.6rem;
  font-weight: bold;
  padding: 6px;
  background-color: ${(props) => {
    switch (props.status) {
      case "PENDING":
        return "#66ffc2";
      case "SHIPPED":
        return "#ffb3b3";
      case "DANGER":
        return "#ffb3b3";
      case "INFO":
        return "#f2ccff";
      case "CANCELED":
        return "#f2ccff";
      case "SUCCESS":
        return "#66ffc2";
      default:
        return "lightgray";
    }
  }};
  color: ${(props) => {
    switch (props.status) {
      case "PENDING":
        return "#00b36b";
      case "SHIPPED":
        return "#ff4d4d";
      case "DANGER":
        return "#ff4d4d";
      case "INFO":
        return "#9900cc";
      case "CANCELED":
        return "#9900cc";
      case "SUCCESS":
        return "#00b36b";
      default:
        return "lightgray";
    }
  }};
  border-radius: 10px;
  width: 70px;
  text-align: center;
`;

export const TypeLabel = styled.li`
  text-transform: capitalize;
  font-size: 0.6rem;
  font-weight: bold;
  padding: 10px;
  color: ${(props) => {
    switch (props.type) {
      case "ONLINE":
        return "#ff0040";
      case "RETAIL":
        return "#8000ff";
      case "DIRECT":
        return "#00ff40";
      default:
        return "black";
    }
  }};
`;
