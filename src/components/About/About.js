import React from "react";
import PropTypes from "prop-types";
import styles from "./About.module.scss";
import { Col, Container, Row } from "react-bootstrap";

const About = () => (
  <Container
    as="section"
    className={styles.About}
    data-testid="About"
    fluid
    id="about"
  >
    <Row className="justify-content-center">
      <Col lg={6} md={9} xs={12}>
        <p className="h2">We Are</p>
        <p>Creators, innovators and multi-disciplined social movers.</p>
        <p className="h2">Our Service</p>
        <p>
          Include but are not limited to Developing, projecting and maintaining
          the [reputation, image, act, character, vision, play, standing, etc.]
          of public figures, businesses and non-profit organizations.
        </p>
      </Col>
    </Row>
  </Container>
);

About.propTypes = { PropTypes };

About.defaultProps = {};

export default About;
