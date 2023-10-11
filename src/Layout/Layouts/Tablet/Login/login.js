import "./login.scss";
import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import HeaderTablet from "../../../Header/headerTablet";

const LoginTablet = () => {
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
      <HeaderTablet />
      <div className="LoginTablet px-3">
        <div className="backBtnTablet">
          <button className="goBackTablet">
            <NavLink exact to="/home" className="goBackTextTablet">
              Go back
            </NavLink>
          </button>
        </div>
        <div className="loginHeaderTablet">
          <h2>Welcome back!</h2>
        </div>
        <div className="loginFormTablet">
          <Form onSubmit={handleSubmit}>
            <Form.Group
              size="lg"
              controlId="name"
              className="loginFormLineTablet"
            >
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="loginLineTablet"
              />
            </Form.Group>
            <Form.Group
              size="lg"
              controlId="email"
              className="loginFormLineTablet"
            >
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="loginLineTablet"
              />
            </Form.Group>
            <Form.Group
              size="lg"
              controlId="password"
              className="loginFormLineTablet"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="loginLineTablet"
              />
            </Form.Group>

            <Button
              block
              size="lg"
              className="loginBtnTablet"
              type="submit"
              disabled={!validateForm()}
            >
              <NavLink exact to="/cra-doc" className="loginButtonTablet">
                Login
              </NavLink>
            </Button>
          </Form>
        </div>
        <div className="forgetPassTablet">
          <p>
            Forget your password or username?
            <br />{" "}
            <NavLink exact to="/unfortunate" className="nonBtnTablet">
              Reset here.
            </NavLink>
          </p>
        </div>
        <div className="registerRedirectTablet">
          <p>
            Don't have an account?
            <br />
            <NavLink exact to="/register" className="nonBtnTablet">
              Register here.
            </NavLink>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginTablet;
