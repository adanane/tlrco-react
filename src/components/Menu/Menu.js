import React from "react";
import PropTypes from "prop-types";
import styles from "./Menu.module.scss";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-scroll";

const Menu = () => (
  <Navbar
    as="nav"
    bg="dark"
    className={styles.Menu}
    collapseOnSelect
    data-testid="Menu"
    expand="lg"
    fixed="top"
    id="menu"
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

Menu.propTypes = {};

Menu.defaultProps = {};

export default Menu;
