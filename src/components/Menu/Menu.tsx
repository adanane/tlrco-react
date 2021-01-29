import React from "react";
import styles from "./Menu.module.scss";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-scroll";

const Menu: React.FC = () => (
  <Navbar
    as="nav"
    bg="dark"
    className={styles.Menu}
    collapseOnSelect
    expand="lg"
    fixed="top"
    variant="dark"
  >
    <Navbar.Brand as={Link} smooth spy to="home">
      TLRCO
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto" justify>
        <Nav.Link as={Link} smooth spy to="manifesto">
          Manifesto
        </Nav.Link>
        <Nav.Link as={Link} smooth spy to="about">
          About
        </Nav.Link>
        <Nav.Link as={Link} smooth spy to="contact">
          Contact
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Menu;
