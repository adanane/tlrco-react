import React from 'react';
import PropTypes from 'prop-types';
import styles from './Manifesto.module.scss';
import { Col, Container, Row } from "react-bootstrap";

const Manifesto = () => (
  <Container as="section" className={styles.Manifesto} data-testid="Manifesto" fluid id="manifesto">
    <Row className="justify-content-center">
      <Col lg={6} md={9} xs={12}>
        <p className="h2">Manifesto</p>
        <ol className="text-justify">
          <li>
            We aim to have an interdisciplinary style. We will study each idea
            from various viewpoints and represent other lifestyles and ethos
            than our own. We will work from within our artistic field and
            maintain an outsider’s standpoint.
          </li>
          <li>
            We shall connect our culture, vision, and values with the creative
            world and academia. We will join our vision in an artistic,
            scientific, and societal framework to cultivate our understanding
            and interconnectedness of the fields.
          </li>
          <li>
            Music, text, image, and other artistic creations shall be given
            equal importance. We must always assimilate the different fields and
            initiate an ongoing conversation between them.
          </li>
          <li>
            We must always remain independent in thought and action. We must
            actively animate critical thought and examine every matter
            fearlessly. We will eagerly encourage criticism and appeal to the
            paradoxes within the arts.
          </li>
          <li>
            Art is relentless. We must never be fearful to have pretensions. We
            are captivated by the minutiae of the painter as we are by the
            complex music melodies. We will see the frivolous in the essential
            and the essential in the frivolous and ensure that all are given
            equal consideration.
          </li>
          <li>
            All materials must be artistically relevant. We are fascinated by
            people’s relationship to their artistic side, and art’s relationship
            to personality.
          </li>
          <li>
            Everything will be interrogated- All is divine. We must defy the
            status quo. We must always ask why.
          </li>
          <li>
            The attitude must be appealing. We must never be disregarding our
            language or approach. An allegorical style will be used to inspire
            publics in, and matters they can relate to.
          </li>
          <li>
            The public’s intellect should be as gratified as their aesthetic
            sense. We incite inventiveness as well as an intellectual discourse
            to ultimate action.
          </li>
        </ol>
        <p>- Curators Of/f The Future</p>
      </Col>
    </Row>
  </Container>
);

Manifesto.propTypes = {};

Manifesto.defaultProps = {};

export default Manifesto;
