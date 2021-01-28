import React from "react";
import styles from "./Home.module.scss";
import { Col, Container, Jumbotron, Row } from "react-bootstrap";

const Home: React.FC = () => (
  <Jumbotron as="header" fluid className={styles.Home} id="home">
    <Container>
      <Row className="justify-content-center">
        <Col lg={6} sm={9} xs={12}>
          <p className="h2">The Lyon Republic</p>
          <p>&quot;&quot;</p>
        </Col>
      </Row>
    </Container>
  </Jumbotron>
);

export default Home;
