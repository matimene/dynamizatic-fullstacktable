import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Order from "./Order";
import Pagination from "./Pagination";
import PagDivider from "./PagDivider";
import {
  OrderListTable,
  OrderListContainer,
  TableHeader,
  TableTr,
  BottomContainer,
} from "./OrdersListElements";

const OrdersList = ({ orders }) => {
  const filter = useSelector((state) => state.filter);
  let { term, status, type } = filter;
  const [ordersByChunk, setOrdersByChunk] = useState([]);
  const [paginationDivider, setPaginationDivider] = useState(10);
  const [paginationNumber, setPaginationNumber] = useState(0);
  const [ordersToRender, setOrdersToRender] = useState([]);
  const chunkArray = (myArray, cutNumber) => {
    return myArray.reduce((resultArray, item, index) => {
      const chunkIndex = Math.floor(index / cutNumber);

      if (!resultArray[chunkIndex]) {
        resultArray[chunkIndex] = []; // start a new chunk
      }

      resultArray[chunkIndex].push(item);

      return resultArray;
    }, []);
  };

  const filteredOrders = () => {
    let filteredOrdersArr = [...orders];
    if (term) {
      term = term.toLowerCase();
      filteredOrdersArr = filteredOrdersArr.filter(
        (order) =>
          order.country.toLowerCase().includes(term) ||
          order.shipDate.toLowerCase().includes(term) ||
          order.companyName.toLowerCase().includes(term) ||
          order.id.includes(term)
      );
    }
    if (status) {
      filteredOrdersArr = filteredOrdersArr.filter(
        (order) => order.status === status
      );
    }
    if (type) {
      filteredOrdersArr = filteredOrdersArr.filter(
        (order) => order.type === type
      );
    }

    return filteredOrdersArr;
  };

  useEffect(() => {
    setOrdersByChunk(chunkArray(filteredOrders(), paginationDivider));
    setPaginationNumber(0);
  }, [orders, filter, paginationDivider]);

  useEffect(() => {
    setOrdersToRender(ordersByChunk[paginationNumber]);
  }, [ordersByChunk, paginationNumber]);

  return (
    <OrderListContainer>
      <OrderListTable>
        <thead>
          <TableTr>
            <TableHeader>order id</TableHeader>
            <TableHeader>country</TableHeader>
            <TableHeader>ship date</TableHeader>
            <TableHeader>company name</TableHeader>
            <TableHeader>status</TableHeader>
            <TableHeader>type</TableHeader>
            <TableHeader>actions</TableHeader>
          </TableTr>
        </thead>
        <tbody>
          {ordersToRender &&
            ordersToRender
              .reverse()
              .map((order, i) => <Order key={i} order={order} />)}
        </tbody>
      </OrderListTable>
      <BottomContainer>
        <Pagination
          current={paginationNumber}
          setPage={setPaginationNumber}
          max={ordersByChunk.length}
        />
        <PagDivider
          setDivider={setPaginationDivider}
          pagNum={paginationNumber}
          pagDiv={paginationDivider}
          total={filteredOrders().length}
        />
      </BottomContainer>
    </OrderListContainer>
  );
};

export default OrdersList;
