import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../reducers/userReducer";
import { NavbarContainer, NavButton } from "./NavbarElements";

const Navbar = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();

  if (user) {
    return (
      <NavbarContainer>
        <NavButton onClick={() => dispatch(logout())}>Logout</NavButton>
        <NavButton onClick={() => history.push("/createorder")}>
          New record
        </NavButton>
      </NavbarContainer>
    );
  } else {
    return (
      <NavbarContainer>
        <NavButton onClick={() => history.push("/login")}>Login</NavButton>
      </NavbarContainer>
    );
  }
};

export default Navbar;
