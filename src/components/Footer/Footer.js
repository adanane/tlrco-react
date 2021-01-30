import React from "react";
import PropTypes from "prop-types";
import styles from "./Footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => (
  <footer className={styles.Footer} data-testid="Footer">
    <div>
      <FontAwesomeIcon icon={faFacebookSquare} />
    </div>
    <div>
      <FontAwesomeIcon icon={faInstagramSquare} />
    </div>
    <div>
      <FontAwesomeIcon icon={faTwitterSquare} />
    </div>
    <p>&copy; TLRCO MMXXI</p>
  </footer>
);

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
