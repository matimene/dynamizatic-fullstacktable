import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { deleteOrder } from "../reducers/orderReducer";
import { TableTd, TableTr, StatusLabel, TypeLabel } from "./OrderElements";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

const Order = ({ order }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleDelete = () => {
    if (window.confirm("Do you really want to delete?")) {
      dispatch(deleteOrder(order.id));
    }
  };

  return (
    <TableTr>
      <TableTd>{order.id}</TableTd>
      <TableTd>{order.country}</TableTd>
      <TableTd>{order.shipDate}</TableTd>
      <TableTd>{order.companyName}</TableTd>
      <TableTd>
        <StatusLabel status={order.status}>{order.status}</StatusLabel>
      </TableTd>
      <TableTd>
        <TypeLabel type={order.type}>{order.type}</TypeLabel>
      </TableTd>
      <TableTd>
        <AiFillEdit
          size={20}
          onClick={() => history.push(`/orders/${order.id}`)}
          style={{ cursor: "pointer" }}
        />
        <AiFillDelete
          size={20}
          onClick={handleDelete}
          style={{ cursor: "pointer" }}
        />
      </TableTd>
    </TableTr>
  );
};

export default Order;
