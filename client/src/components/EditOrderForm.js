import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { updateOrder } from "../reducers/orderReducer";
import {
  FormContainer,
  OrderForm,
  FormLabel,
  FormInput,
  FormItemDiv,
  FormTitle,
  FormSelect,
  FormButton,
} from "./NewOrderFormElements";

const EditOrderForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  let { id } = useParams();
  const order = useSelector((state) =>
    state.orders.find((order) => order.id === id)
  );
  const [country, setCountry] = useState(null);
  const [shipDate, setShipDate] = useState(null);
  const [companyName, setCompanyName] = useState(null);
  const [status, setStatus] = useState(null);
  const [type, setType] = useState(null);

  if (!order) {
    return <div>Didnt find any order with this id</div>;
  }

  const handleUpdate = (e) => {
    e.preventDefault();

    if (window.confirm("Do you really want to update?")) {
      const updatedOrder = {
        country: country ? country : order.country,
        shipDate: shipDate ? shipDate : order.shipDate,
        companyName: companyName ? companyName : order.companyName,
        status: status ? status : order.status,
        type: type ? type : order.type,
        id,
      };
      dispatch(updateOrder(updatedOrder));
      history.push("/");
    }
  };

  return (
    <FormContainer>
      <OrderForm onSubmit={handleUpdate}>
        <FormTitle>Edit Order</FormTitle>
        <FormItemDiv>
          <FormLabel>Country: </FormLabel>
          <FormInput
            placeholder={order.country}
            onChange={({ target }) => setCountry(target.value)}
          />
        </FormItemDiv>
        <FormItemDiv>
          <FormLabel>Ship date:</FormLabel>
          <FormInput
            placeholder={order.shipDate}
            onChange={({ target }) => setShipDate(target.value)}
          />
        </FormItemDiv>
        <FormItemDiv>
          <FormLabel>Company name:</FormLabel>
          <FormInput
            placeholder={order.companyName}
            onChange={({ target }) => setCompanyName(target.value)}
          />
        </FormItemDiv>
        <FormItemDiv>
          <FormLabel>Status:</FormLabel>
          <FormSelect
            name="status"
            id="status"
            onChange={({ target }) => setStatus(target.value)}
          >
            <option value="PENDING">Pending</option>
            <option value="SHIPPED">Shipped</option>
            <option value="INFO">Info</option>
            <option value="CANCELED">Canceled</option>
            <option value="SUCCESS">Success</option>
            <option value="PENDING">Pending</option>
          </FormSelect>
        </FormItemDiv>
        <FormItemDiv>
          <FormLabel>Type:</FormLabel>
          <FormSelect
            name="type"
            id="type"
            onChange={({ target }) => setType(target.value)}
          >
            <option value="ONLINE">Online</option>
            <option value="RETAIL">Retail</option>
            <option value="DIRECT">Direct</option>
          </FormSelect>
        </FormItemDiv>
        <FormItemDiv>
          <FormButton type="submit">Save changes</FormButton>
        </FormItemDiv>
      </OrderForm>
    </FormContainer>
  );
};

export default EditOrderForm;
