import React, { useState } from "react";
import { useSelector } from "react-redux";
import _ from "lodash";
import OrdersList from "./OrdersList";

const HomeTable = () => {
  const orders = useSelector((state) => state.orders);

  return <div>{orders.length > 0 && <OrdersList orders={orders} />}</div>;
};

export default HomeTable;
