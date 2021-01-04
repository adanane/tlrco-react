import React from "react";
import styles from "./Contact.module.scss";
import { Formik } from "formik";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import * as yup from "yup";

const schema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  comment: yup.string().required().min(25),
});

const Contact: React.FC = () => (
  <div className={styles.Contact} id="contact">
    <Container fluid>
      <Row className="justify-content-center">
        <Col xs={6}>
          <p className="h2">Contact Us</p>
          <p>Feel free to contact for any suggestion.</p>
        </Col>
      </Row>
    </Container>
    <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        firstName: "",
        lastName: "",
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
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Row className="justify-content-center">
            <Form.Group as={Col} xs={4} controlId="FirstName">
              <Form.Label>First name</Form.Label>
              <Form.Control
                as="input"
                type="text"
                placeholder="Write your first name here"
                name="firstName"
                value={values.firstName}
                onBlur={handleBlur}
                onChange={handleChange}
                isValid={touched.firstName && !errors.firstName}
                isInvalid={touched.firstName && !!errors.firstName}
              />
              <Form.Control.Feedback type="invalid" tooltip>
                Please enter your first name.
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Row className="justify-content-center">
            <Form.Group as={Col} xs={4} controlId="LastName">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                as="input"
                type="text"
                placeholder="Write your last name here"
                name="lastName"
                value={values.lastName}
                onBlur={handleBlur}
                onChange={handleChange}
                isValid={touched.lastName && !errors.lastName}
                isInvalid={touched.lastName && !!errors.lastName}
              />
              <Form.Control.Feedback type="invalid" tooltip>
                Please enter your last name.
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Row className="justify-content-center">
            <Form.Group as={Col} xs={4} controlId="Comment">
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
          <Button type="submit" disabled={!isValid}>
            Send
          </Button>
        </Form>
      )}
    </Formik>
  </div>
);

export default Contact;
