import React from "react";
import PropTypes from "prop-types";
import styles from "./Footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagramSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => (
  <footer className={styles.Footer} data-testid="Footer" fluid id="footer">
    <button
      onClick={(e) => {
        e.preventDefault();
        window.open("https://instagram.com/", "_blank");
      }}
    >
      <FontAwesomeIcon icon={faInstagramSquare} />
    </button>
    <button
      onClick={(e) => {
        e.preventDefault();
        window.open("https://twitter.com/", "_blank");
      }}
    >
      <FontAwesomeIcon icon={faTwitterSquare} />
    </button>
    <p>&copy; TLRCO MMXXI</p>
  </footer>
);
// Make sure links are updated

Footer.propTypes = { PropTypes };

Footer.defaultProps = {};

export default Footer;
