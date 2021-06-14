import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createNew } from "../reducers/userReducer";
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

const Signin = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  if (user) {
    history.push("/");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email && password && password === passwordConfirm) {
      await dispatch(createNew({ email, password }));
      history.push("/login");
    }
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <FormTitle>Create account</FormTitle>
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
        <FormItemDiv>
          <FormLabel>Confirm password</FormLabel>
          <FormInput
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={({ target }) => setPasswordConfirm(target.value)}
          />
        </FormItemDiv>
        <FormButton type="submit">Sign in!</FormButton>
      </Form>
      <FormButtonSwitch onClick={() => history.push("/login")}>
        Already have an account? Log in!
      </FormButtonSwitch>
    </FormContainer>
  );
};

export default Signin;
