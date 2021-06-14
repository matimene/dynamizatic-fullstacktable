import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../reducers/userReducer";
import {
  FormContainer,
  Form,
  FormLabel,
  FormInput,
  FormItemDiv,
  FormTitle,
  FormButton,
  FormButtonSwitch,
} from "./AuthElements";

const Login = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (user) {
    history.push("/");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email && password) {
      try {
        await dispatch(login({ email, password }));
        history.push("/");
      } catch (error) {
        window.alert(error);
      }
    }
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <FormTitle>Log In</FormTitle>
        <FormItemDiv>
          <FormLabel>Email address</FormLabel>
          <FormInput
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={({ target }) => setEmail(target.value)}
          />
        </FormItemDiv>
        <FormItemDiv>
          <FormLabel>Password</FormLabel>
          <FormInput
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={({ target }) => setPassword(target.value)}
          />
        </FormItemDiv>
        <FormButton type="submit">Login!</FormButton>
      </Form>
      <FormButtonSwitch onClick={() => history.push("/signin")}>
        Do not have an acc? Sign in!
      </FormButtonSwitch>
    </FormContainer>
  );
};

export default Login;
