import React from "react";
import styles from "./Home.module.scss";
import logo from "../../images/logo.png";
import { Col, Container, Jumbotron, Row } from "react-bootstrap";

const Home: React.FC = () => (
  <Jumbotron as="header" fluid className={styles.Home} id="home">
    <Container>
      <Row className="justify-content-center">
        <Col>
          <img alt="THE LYON REPUBLIC" src={logo} />
        </Col>
      </Row>
    </Container>
  </Jumbotron>
);

export default Home;
