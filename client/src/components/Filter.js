import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  setFilter as filterOrders,
  clearFilter,
} from "../reducers/filterReducer";
import {
  FilterContainer,
  TermInput,
  FilterForm,
  Button,
  FormItems,
  FilterSelect,
  FilterLabel,
} from "./FilterElements";

const Filter = () => {
  const [filterTerm, setFilterTerm] = useState(null);
  const [filterStatus, setFilterStatus] = useState(null);
  const [filterType, setFilterType] = useState(null);
  const dispatch = useDispatch();

  const handleFilterSubmit = (e) => {
    e.preventDefault();
    dispatch(
      filterOrders({
        term: filterTerm,
        status: filterStatus,
        type: filterType,
      })
    );
  };

  return (
    <FilterContainer>
      <FilterForm onSubmit={handleFilterSubmit}>
        <FormItems>
          <TermInput
            placeholder="Search by..."
            onChange={(e) => setFilterTerm(e.target.value)}
          />
        </FormItems>
        <FormItems>
          <FilterLabel>Status:</FilterLabel>
          <FilterSelect
            name="status"
            id="status"
            onChange={({ target }) => setFilterStatus(target.value)}
          >
            <option value="">All</option>
            <option value="PENDING">Pending</option>
            <option value="SHIPPED">Shipped</option>
            <option value="INFO">Info</option>
            <option value="CANCELED">Canceled</option>
            <option value="SUCCESS">Success</option>
          </FilterSelect>
        </FormItems>
        <FormItems>
          <FilterLabel>Type:</FilterLabel>
          <FilterSelect
            name="type"
            id="type"
            onChange={({ target }) => setFilterType(target.value)}
          >
            <option value="">All</option>
            <option value="RETAIL">Retail</option>
            <option value="ONLINE">Online</option>
            <option value="DIRECT">Direct</option>
          </FilterSelect>
        </FormItems>
        <FormItems>
          <Button type="submit">Search</Button>
        </FormItems>
      </FilterForm>
      <FormItems>
        <Button onClick={() => dispatch(clearFilter())}>Clear</Button>
      </FormItems>
    </FilterContainer>
  );
};

export default Filter;
