import React from "react";
import styles from "./Home.module.scss";
import { Container, Jumbotron } from "react-bootstrap";

const Home: React.FC = () => (
  <header className={styles.Home} id="home">
    <Jumbotron fluid className={styles.Jumbotron}>
      <Container>
        <p className="h2">Fluid jumbotron</p>
        <p>
          This is a modified jumbotron that occupies the entire horizontal space
          of its parent.
        </p>
      </Container>
    </Jumbotron>
  </header>
);

export default Home;
