import "./register.scss";
import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Header from "../../Header/header";
import Subheader from "../../Subheader/subheader";

const Register = () => {
  const [pin, setPin] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function validateForm() {
    return (
      email.length > 0 &&
      password.length > 0 &&
      name.length > 0 &&
      pin.length > 0
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <>
      <Header />
      <Subheader />
      <div className="Register px-3">
        <div className="backBtn">
          <button className="goBack">
            <NavLink exact to="/cra-doc/" className="goBackText">
              Go back
            </NavLink>
          </button>
        </div>
        <div className="registerHeader">
          <h2>Welcome aboard!</h2>
        </div>
        <div className="registerAlert">
          <h5>
            In order to register, all patients require the use of a unique
            Personal Indentification Number (PIN) to verify their identity. If
            you have not received your PIN, please contact our practice to
            request one.{" "}
          </h5>
        </div>
        <div className="registerForm">
          <h3>Account Information</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group size="lg" controlId="pin" className="registerFormLine">
              <Form.Label>Registration pin</Form.Label>
              <Form.Control
                autoFocus
                type="pin"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                className="registerLine"
              />
            </Form.Group>
            <Form.Group size="lg" controlId="name" className="registerFormLine">
              <Form.Label>Full name</Form.Label>
              <Form.Control
                autoFocus
                type="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="registerLine"
              />
            </Form.Group>
            <Form.Group
              size="lg"
              controlId="email"
              className="registerFormLine"
            >
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="registerLine"
              />
            </Form.Group>
            <Form.Group
              size="lg"
              controlId="email"
              className="registerFormLine"
            >
              <Form.Label>Re-enter your email address</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="registerLine"
              />
            </Form.Group>
            <br />
            <h3>Login Information</h3>
            <Form.Group
              size="lg"
              controlId="email"
              className="registerFormLine"
            >
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="registerLine"
              />
            </Form.Group>
            <Form.Group
              size="lg"
              controlId="password"
              className="registerFormLine"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="registerLine"
              />
            </Form.Group>

            {/* Password Recovery Questions go here  */}

            <Button
              block
              size="lg"
              className="registerBtn"
              type="submit"
              disabled={!validateForm()}
            >
              <NavLink exact to="/cra-doc-home" className="registerButton">
                Register
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
            Already have an account?
            <br />
            <NavLink exact to="/login" className="nonBtn">
              Login here.
            </NavLink>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
