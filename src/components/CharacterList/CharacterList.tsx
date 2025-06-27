import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Row, Col } from 'react-bootstrap';
import type { Character } from '../../types/character.types';
import styles from './CharacterList.module.css';

interface CharacterListProps {
  characters: Character[];
}

const CharacterList: React.FC<CharacterListProps> = ({ characters }) => {
  return (
    <Row xs={1} sm={2} md={3} lg={4} className="g-4">
      {characters.map((char) => (
        <Col key={char.id}>
          <Link to={`/character/${char.id}`} className={styles.cardLink}>
            <Card className={`h-100 ${styles.cardHover}`}
              onMouseEnter={(e) => e.currentTarget.classList.add(styles.cardHoverActive)}
              onMouseLeave={(e) => e.currentTarget.classList.remove(styles.cardHoverActive)}
            >
              <Card.Img variant="top" src={char.image} alt={char.name} loading="lazy" />
              <Card.Body>
                <Card.Title>{char.name}</Card.Title>
                <Card.Text>
                  <strong>Status:</strong> {char.status}<br />
                  <strong>Species:</strong> {char.species}<br />
                  <strong>Gender:</strong> {char.gender}
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      ))}
    </Row>
  );
};

export default CharacterList; 