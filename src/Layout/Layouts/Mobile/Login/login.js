import "./login.scss";
import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import HeaderMobile from "../../../Header/headerMobile";

const LoginMobile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function validateForm() {
    return email.length > 0 && password.length > 0 && name.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <>
      <HeaderMobile />
      <div className="Login px-3">
        <div className="backBtn">
          <button className="goBack">
            <NavLink exact to="/cra-doc/" className="goBackText">
              Go back
            </NavLink>
          </button>
        </div>
        <div className="loginHeader">
          <h2>Welcome back!</h2>
        </div>
        <div className="loginForm">
          <Form onSubmit={handleSubmit}>
            <Form.Group size="lg" controlId="name" className="loginFormLine">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                autoFocus
                type="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group size="lg" controlId="email" className="loginFormLine">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              size="lg"
              controlId="password"
              className="loginFormLine"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button
              block
              size="lg"
              className="loginBtn"
              type="submit"
              disabled={!validateForm()}
            >
              <NavLink exact to="/home" className="loginButton">
                Login
              </NavLink>
            </Button>
          </Form>
        </div>
        <div className="forgetPass">
          <p>
            Forget your password or username?
            <br />{" "}
            <NavLink exact to="/unfortunate" className="nonBtn">
              Reset here.
            </NavLink>
          </p>
        </div>
        <div className="registerRedirect">
          <p>
            Don't have an account?
            <br />
            <NavLink exact to="/unfortunate" className="nonBtn">
              Register here.
            </NavLink>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginMobile;
