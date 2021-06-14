import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { initializeStore } from "../reducers/orderReducer";
import { setFromLocalStorage } from "../reducers/userReducer";

import Login from "./Login";
import Signin from "./Signin";
import HomeTable from "./HomeTable";
import Navbar from "./Navbar";
import Filter from "./Filter";
import NewOrderForm from "./NewOrderForm";
import EditOrderForm from "./EditOrderForm";
import styled from "styled-components";

const StyledContainer = styled.div`
  font-family: "Roboto", sans-serif;
`;

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeStore());

    //GETTING AND SETTING USER IF EXIST ON LOCALSTORAGE
    const userLocalStorage = JSON.parse(
      localStorage.getItem("dynamizaticLoggedUser")
    );

    if (userLocalStorage) {
      dispatch(setFromLocalStorage(userLocalStorage));
    }
  }, []);

  return (
    <Router>
      <StyledContainer>
        <Navbar />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signin">
            <Signin />
          </Route>
          <Route path="/orders/:id">
            <EditOrderForm />
          </Route>
          <Route path="/createorder">
            <NewOrderForm />
          </Route>
          <Route path="/">
            <Filter />
            <HomeTable />
          </Route>
        </Switch>
      </StyledContainer>
    </Router>
  );
};

export default App;
