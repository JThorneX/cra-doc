import "./register.scss";
import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import HeaderMobile from "../../../Header/headerMobile";
import FooterMobile from "../../../Footer/footerMobile";

const RegisterMobile = () => {
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
      <HeaderMobile />

      <div className="RegisterMobile px-3">
        <div className="backBtnMobile">
          <button className="goBackMobile">
            <NavLink exact to="/cra-doc/" className="goBackTextMobile">
              Go back
            </NavLink>
          </button>
        </div>
        <div className="registerHeaderMobile">
          <h2>Welcome aboard!</h2>
        </div>
        <div className="registerAlertMobile">
          <h5>
            In order to register, all patients require the use of a unique
            Personal Indentification Number (PIN) to verify their identity. If
            you have not received your PIN, please contact our practice to
            request one.{" "}
          </h5>
        </div>
        <div className="registerFormMobile">
          <h3>Account Information</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group
              size="lg"
              controlId="pin"
              className="registerFormLineMobile"
            >
              <Form.Label>Registration pin</Form.Label>
              <Form.Control
                type="pin"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                className="registerLineMobile"
                pattern="\d*"
              />
            </Form.Group>
            <Form.Group
              size="lg"
              controlId="name"
              className="registerFormLineMobile"
            >
              <Form.Label>Full name</Form.Label>
              <Form.Control
                type="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="registerLineMobile"
              />
            </Form.Group>
            <Form.Group
              size="lg"
              controlId="email"
              className="registerFormLineMobile"
            >
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="registerLineMobile"
              />
            </Form.Group>
            <Form.Group
              size="lg"
              controlId="email"
              className="registerFormLineMobile"
            >
              <Form.Label>Re-enter your email address</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="registerLineMobile"
              />
            </Form.Group>
            <br />
            <h3>Login Information</h3>
            <Form.Group
              size="lg"
              controlId="email"
              className="registerFormLineMobile"
            >
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="registerLineMobile"
              />
            </Form.Group>
            <Form.Group
              size="lg"
              controlId="password"
              className="registerFormLineMobile"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="registerLineMobile"
              />
            </Form.Group>

            {/* Password Recovery Questions go here  */}

            <Button
              block
              size="lg"
              className="registerBtnMobile"
              type="submit"
              disabled={!validateForm()}
            >
              <NavLink exact to="/cra-doc" className="registerButtonMobile">
                Register
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
            Already have an account?
            <br />
            <NavLink exact to="/login" className="nonBtnMobile">
              Login here.
            </NavLink>
          </p>
        </div>
      </div>
      <FooterMobile />
    </>
  );
};

export default RegisterMobile;
