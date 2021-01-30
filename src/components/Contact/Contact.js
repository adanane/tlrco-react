import React from "react";
import PropTypes from "prop-types";
import styles from "./Contact.module.scss";
import emailjs from "emailjs-com";
import { Formik } from "formik";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  comment: yup.string().required().min(25),
});

// Check out emailjs.com to see how to fill the service id, template id and user id
function sendEmail() {
  emailjs
    .sendForm(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      "#contact-form",
      "YOUR_USER_ID"
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
}

const Contact = () => (
  <section className={styles.Contact} data-testid="Contact" fluid id="contact">
    <Container fluid>
      <Row className="justify-content-center">
        <Col lg={6}>
          <p className="h2">Contact Us</p>
          <p>Feel free to contact for any suggestion.</p>
        </Col>
      </Row>
    </Container>
    <Formik
      validationSchema={schema}
      onSubmit={sendEmail}
      initialValues={{
        name: "",
        email: "",
        comment: "",
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
        <Form id="contact-form" noValidate onSubmit={handleSubmit}>
          <Form.Row className="justify-content-center">
            <Form.Group as={Col} lg={4} md={6} xs={8} controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                as="input"
                type="text"
                placeholder="Write your name here"
                name="name"
                value={values.name}
                onBlur={handleBlur}
                onChange={handleChange}
                isValid={touched.name && !errors.name}
                isInvalid={touched.name && !!errors.name}
              />
              <Form.Control.Feedback type="invalid" tooltip>
                Please enter your name.
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Row className="justify-content-center">
            <Form.Group as={Col} lg={4} md={6} xs={8} controlId="email">
              <Form.Label>E-mail</Form.Label>
              <Form.Control
                as="input"
                type="email"
                placeholder="Write your e-mail here"
                name="email"
                value={values.email}
                onBlur={handleBlur}
                onChange={handleChange}
                isValid={touched.email && !errors.email}
                isInvalid={touched.email && !!errors.email}
              />
              <Form.Control.Feedback type="invalid" tooltip>
                Please enter your e-mail.
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Row className="justify-content-center">
            <Form.Group as={Col} lg={4} md={6} xs={8} controlId="Comment">
              <Form.Label>Comment</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                type="text"
                placeholder="Write your comment here"
                name="comment"
                value={values.comment}
                onBlur={handleBlur}
                onChange={handleChange}
                isValid={touched.comment && !errors.comment}
                isInvalid={touched.comment && !!errors.comment}
              />
              <Form.Control.Feedback type="invalid" tooltip>
                Please enter a comment.
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Button disabled type="submit" variant="warning">
            Send
          </Button>
        </Form>
      )}
    </Formik>
  </section>
);

Contact.propTypes = { PropTypes };

Contact.defaultProps = {};

export default Contact;
