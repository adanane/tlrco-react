import React from 'react';
import PropTypes from 'prop-types';
import styles from './Home.module.scss';
import logo from "../../images/logo.png";
import { Col, Container, Jumbotron, Row } from "react-bootstrap";

const Home = () => (
  <Jumbotron as="header" className={styles.Home} data-testid="Home" fluid id="home">
       <Container>
      <Row className="justify-content-center">
        <Col>
          <img alt="THE LYON REPUBLIC" src={logo} />
        </Col>
      </Row>
    </Container>
  </Jumbotron>
);

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
