import React from "react";
import styles from "./Contact.module.scss";
import { Formik } from "formik";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  comment: yup.string().required().min(25),
});

const Contact: React.FC = () => (
  <div className={styles.Contact} id="contact">
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
      onSubmit={console.log}
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
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Row className="justify-content-center">
            <Form.Group as={Col} xs={4} controlId="name">
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
            <Form.Group as={Col} xs={4} controlId="email">
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
