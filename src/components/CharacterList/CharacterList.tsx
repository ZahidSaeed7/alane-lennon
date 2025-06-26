import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Row, Col } from 'react-bootstrap';
import type { Character } from '../../types/character.types';

interface CharacterListProps {
  characters: Character[];
}

const CharacterList: React.FC<CharacterListProps> = ({ characters }) => {
  return (
    <Row xs={1} sm={2} md={3} lg={4} className="g-4">
      {characters.map((char) => (
        <Col key={char.id}>
          <Link to={`/character/${char.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Card className="h-100" style={{ cursor: 'pointer', transition: 'transform 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
              <Card.Img variant="top" src={char.image} alt={char.name} />
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