import React from "react";
import styles from "./Menu.module.scss";
import { Nav, Navbar } from "react-bootstrap";

const Menu: React.FC = () => (
  <div className={styles.NavBar}>
    <Navbar bg="light" expand="lg" fixed="top">
      <Navbar.Brand href="">TLRCO</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="">Manifesto</Nav.Link>
          <Nav.Link href="">About</Nav.Link>
          <Nav.Link href="">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
);

export default Menu;
