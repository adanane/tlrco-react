import React from "react";
import styles from "./About.module.scss";
import { Col, Container, Row } from "react-bootstrap";

const About: React.FC = () => (
  <div className={styles.About} id="about">
    <Container fluid>
      <Row className="justify-content-center">
        <Col xs={6}>
          <p className="h2">We Are</p>
          <p>Creators, innovators and multi-disciplined social movers.</p>
          <p className="h2">Our Service</p>
          <p>
            Include but are not limited to Developing, projecting and
            maintaining the [reputation, image, act, character, vision, play,
            standing, etc.] of public figures, businesses and non-profit
            organizations.
          </p>
        </Col>
      </Row>
    </Container>
  </div>
);

export default About;
