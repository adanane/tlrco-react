import React from "react";
import styles from "./Home.module.scss";
import { Col, Container, Jumbotron, Row } from "react-bootstrap";

const Home: React.FC = () => (
  <Jumbotron as="header" fluid className={styles.Home} id="home">
    <Container>
      <Row className="justify-content-center">
        <Col lg={6} sm={9} xs={12}>
          <p className="h2">Fluid jumbotron</p>
          <p>
            This is a modified jumbotron that occupies the entire horizontal
            space of its parent.
          </p>
        </Col>
      </Row>
    </Container>
  </Jumbotron>
);

export default Home;
