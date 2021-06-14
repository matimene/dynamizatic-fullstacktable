import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { newOrder } from "../reducers/orderReducer";
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

const NewOrderForm = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const [country, setCountry] = useState("");
  const [shipDate, setShipDate] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [status, setStatus] = useState("PENDING");
  const [type, setType] = useState("ONLINE");

  if (!user) {
    history.push("/");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (country && shipDate && companyName && status && type) {
      await dispatch(
        newOrder({ country, shipDate, companyName, status, type })
      );
      history.push("/");
    }
  };

  return (
    <FormContainer>
      <OrderForm onSubmit={handleSubmit}>
        <FormTitle>Create Order</FormTitle>
        <FormItemDiv className="form-group">
          <FormLabel>Country</FormLabel>
          <FormInput
            type="text"
            className="form-control"
            placeholder="Enter country"
            onChange={({ target }) => setCountry(target.value)}
          />
        </FormItemDiv>
        <FormItemDiv className="form-group">
          <FormLabel>ShipDate</FormLabel>
          <FormInput
            type="text"
            className="form-control"
            placeholder="Date XX-XX-XXXX"
            onChange={({ target }) => setShipDate(target.value)}
          />
        </FormItemDiv>
        <FormItemDiv className="form-group">
          <FormLabel>Company Name</FormLabel>
          <FormInput
            type="text"
            className="form-control"
            placeholder="Enter company name"
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
        <FormButton type="submit" className="btn btn-primary btn-block">
          Submit
        </FormButton>
      </OrderForm>
    </FormContainer>
  );
};

export default NewOrderForm;
