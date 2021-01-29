import React from 'react';
import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagramSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => (
  <footer className={styles.Footer} id="footer">
    <div><FontAwesomeIcon icon={faFacebookSquare} /></div>
    <div><FontAwesomeIcon icon={faInstagramSquare} /></div>
    <div><FontAwesomeIcon icon={faTwitterSquare} /></div>
    <p>&copy; TLRCO MMXXI</p>
  </footer>
);

export default Footer;
