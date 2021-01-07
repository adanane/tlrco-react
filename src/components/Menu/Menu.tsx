import React from "react";
import styles from "./Menu.module.scss";
import { Nav, Navbar } from "react-bootstrap";

const Menu: React.FC = () => (
  <div className={styles.NavBar}>
    <Navbar bg="light" collapseOnSelect expand="lg" fixed="top">
      <Navbar.Brand href="#top">TLRCO</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#manifesto">Manifesto</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
);

export default Menu;
