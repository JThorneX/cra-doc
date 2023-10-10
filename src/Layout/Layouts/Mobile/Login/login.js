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
      <div className="LoginMobile px-3">
        <div className="backBtnMobile">
          <button className="goBackMobile">
            <NavLink exact to="/cra-doc/" className="goBackTextMobile">
              Go back
            </NavLink>
          </button>
        </div>
        <div className="loginHeaderMobile">
          <h2>Welcome back!</h2>
        </div>
        <div className="loginFormMobile">
          <Form onSubmit={handleSubmit}>
            <Form.Group
              size="lg"
              controlId="name"
              className="loginFormLineMobile"
            >
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="loginLineMobile"
              />
            </Form.Group>
            <Form.Group
              size="lg"
              controlId="email"
              className="loginFormLineMobile"
            >
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="loginLineMobile"
              />
            </Form.Group>
            <Form.Group
              size="lg"
              controlId="password"
              className="loginFormLineMobile"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="loginLineMobile"
              />
            </Form.Group>

            <Button
              block
              size="lg"
              className="loginBtnMobile"
              type="submit"
              disabled={!validateForm()}
            >
              <NavLink exact to="/cra-doc-home" className="loginButtonMobile">
                Login
              </NavLink>
            </Button>
          </Form>
        </div>
        <div className="forgetPassMobile">
          <p>
            Forget your password or username?
            <br />{" "}
            <NavLink exact to="/unfortunate" className="nonBtnMobile">
              Reset here.
            </NavLink>
          </p>
        </div>
        <div className="registerRedirectMobile">
          <p>
            Don't have an account?
            <br />
            <NavLink exact to="/register" className="nonBtnMobile">
              Register here.
            </NavLink>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginMobile;
