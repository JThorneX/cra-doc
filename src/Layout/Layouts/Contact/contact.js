import "./contact.scss";
import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Header from "../../Header/header";
import Subheader from "../../Subheader/subheaderLoggedIn";
import Footer from "../../Footer/footer";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  function validateForm() {
    return email.length > 5 && comment.length > 10 && name.length > 5;
  }
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <>
      <Header />
      <Subheader />
      <div className="contactWrapper">
        <div className="contactUsWrapper">
          <h1>Contact Family Care Southwest</h1>
          <p>
            Let us help you find contact information for Family Care Southwest
            resources and office.
          </p>
        </div>
        <div className="contactInfoWrapper">
          <div className="contactInfoText">
            <h3>Office Hours</h3>
            <p>
              Monday-Friday: 8:00 am to 5:00 pm <br />
              Saturday: 8:00am to 11:00 am
            </p>
            <h3>Office Phone</h3>
            <p>303-933-4555</p>
            <h3>Office Address</h3>
            <p>
              6169 S. Balsam Way, Suite #250
              <br />
              Littleton Colorado, 80123
            </p>
          </div>
          <div className="otherQandFeedbackWrapper">
            <h3>Other questions or feedback?</h3>
            <p>
              If this is an emergency, go to your local emergency room or call
              9-1-1. If you are seeking medical advice, please contact your
              doctor.
              <br /> Due to the unsecured nature of internet communications,
              please do not submit data considered confidential or private in
              nature on this form (e.g., social security numbers, diagnosis
              information, credit card numbers, etc.) <br />
              Submit your questions and feedback via our contact form below.{" "}
              <br />
              <div className="contactFormWrapper">
                <Form onSubmit={handleSubmit}>
                  <Form.Group
                    size="lg"
                    controlId="name"
                    className="contactFormName contactFormLine"
                  >
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      placeholder="Full Name"
                      type="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="contactLine"
                    />
                  </Form.Group>
                  <Form.Group
                    size="lg"
                    controlId="email"
                    className="contactFormEmail contactFormLine"
                  >
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="contactLine"
                    />
                  </Form.Group>
                  <Form.Group
                    size="lg"
                    controlId="comment"
                    className="contactFormComment contactFormLine"
                  >
                    <Form.Label>Comment</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      type="comment"
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      className="contactLine"
                    />
                  </Form.Group>
                </Form>
              </div>
              <p className="asteriskText">
                Our goal is to respond to your message via email within five
                business days.
              </p>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
