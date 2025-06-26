import React from 'react';
import { useParams } from 'react-router-dom';
import useAxios from 'axios-hooks';
import { Card, Row, Col, Badge, Alert, Spinner, Container } from 'react-bootstrap';
import type { Character } from '../../types/character.types';

const CharacterDetail: React.FC = () => {
  
  const { id } = useParams<{ id: string }>();
  const [{ data: character, loading, error }] = useAxios<Character>(`character/${id}`);

  if (loading) {
    return (
      <Container className="d-flex flex-column align-items-center justify-content-center" style={{ height: 200 }}>
        <Spinner animation="border" role="status" variant="primary" style={{ width: 60, height: 60, marginBottom: 16 }}>
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        <div style={{ fontSize: '1.2rem', color: '#0d6efd', fontWeight: 500 }}>Loading Character...</div>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="d-flex flex-column align-items-center justify-content-center" style={{ height: 200 }}>
        <Alert variant="danger">Error: {error.message}</Alert>
      </Container>
    );
  }

  if (!character) {
    return (
      <Container className="d-flex flex-column align-items-center justify-content-center" style={{ height: 200 }}>
        <Alert variant="info">Character not found.</Alert>
      </Container>
    );
  }

  return (
    <Container className="py-4">
      <div className="d-flex justify-content-between align-items-center border-bottom pb-3 mb-4">
        <h2 className="mb-0 fw-bold">Character Details</h2>
        <Badge bg="info" className="fs-6">
          {character.status}
        </Badge>
      </div>

      <Row>
        <Col lg={4} md={5} className="mb-4">
          <Card className="h-100">
            <Card.Img variant="top" src={character.image} alt={character.name} />
            <Card.Body className="text-center">
              <Card.Title className="fw-bold fs-4">{character.name}</Card.Title>
              <Card.Text className="text-muted">
                ID: {character.id}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={8} md={7}>
          <Row>
            <Col md={6} className="mb-4">
              <Card className="h-100">
                <Card.Header className="fw-bold">Basic Information</Card.Header>
                <Card.Body>
                  <div className="mb-3">
                    <strong>Species:</strong>
                    <div className="text-muted">{character.species}</div>
                  </div>
                  <div className="mb-3">
                    <strong>Type:</strong>
                    <div className="text-muted">{character.type || 'Unknown'}</div>
                  </div>
                  <div className="mb-3">
                    <strong>Gender:</strong>
                    <div className="text-muted">{character.gender}</div>
                  </div>
                  <div>
                    <strong>Created:</strong>
                    <div className="text-muted">
                      {new Date(character.created).toLocaleDateString()}
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} className="mb-4">
              <Card className="h-100">
                <Card.Header className="fw-bold">Location Information</Card.Header>
                <Card.Body>
                  <div className="mb-3">
                    <strong>Origin:</strong>
                    <div className="text-muted">{character.origin.name}</div>
                  </div>
                  <div>
                    <strong>Current Location:</strong>
                    <div className="text-muted">{character.location.name}</div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col className="mb-4">
              <Card>
                <Card.Header className="fw-bold">Episodes ({character.episode.length})</Card.Header>
                <Card.Body>
                  {character.episode.length > 0 ? (
                    <div className="d-flex flex-wrap gap-2">
                      {character.episode.map((episodeUrl, index) => {
                        const episodeNumber = episodeUrl.split('/').pop();
                        return (
                          <a
                            key={index}
                            href={episodeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-decoration-none"
                          >
                            <Badge bg="secondary" className="fs-6" style={{ cursor: 'pointer' }}>
                              Episode {episodeNumber}
                            </Badge>
                          </a>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="text-muted">No episodes available</div>
                  )}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default CharacterDetail; 