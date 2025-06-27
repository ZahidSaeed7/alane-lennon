import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useAxios from 'axios-hooks';
import { Card, Row, Col, Badge, Alert, Spinner, Container } from 'react-bootstrap';
import type { Character } from '../../types/character.types';
import styles from './CharacterDetail.module.css';
import stylesHome from '../Home/Home.module.css';
import { useAppDispatch } from '../../common/hooks/useReduxHooks';
import { setCharacterDetail } from '../../common/reducers/characterDetail.reducer';

const CharacterDetailPage: React.FC = () => {
  
  const { id } = useParams<{ id: string }>();
  const [{ data: character, loading, error }] = useAxios<Character>(`character/${id}`);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (character) {
      dispatch(setCharacterDetail(character));
    } else {
      dispatch(setCharacterDetail(null));
    }
  }, [character, dispatch]);

  if (loading) {
    return (
      <Container className={styles.loadingContainer}>
        <Spinner animation="border" role="status" variant="primary" className={styles.loadingSpinner}>
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        <div className={styles.loadingText}>Loading Character...</div>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className={styles.loadingContainer}>
        <Alert variant="danger">Error: {error.message}</Alert>
      </Container>
    );
  }

  if (!character) {
    return (
      <Container className={styles.loadingContainer}>
        <Alert variant="info">Character not found.</Alert>
      </Container>
    );
  }

  return (
    <Container className="py-4">
      <div className="d-flex justify-content-between align-items-center border-bottom pb-3 mb-4">
        <h2 className={`mb-0 fw-bold ${stylesHome.title}`}>Character Details</h2>
        <Badge bg="info" className="fs-6">
          {character.status}
        </Badge>
      </div>

      <Row>
        <Col lg={4} md={5} className="mb-4">
          <Card className="h-100">
            <Card.Img variant="top" src={character.image} alt={character.name} />
            <Card.Body className="text-center">
              <Card.Title className={`fw-bold fs-4 ${stylesHome.title}`}>{character.name}</Card.Title>
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
                <Card.Header className={`fw-bold ${stylesHome.title}`}>Basic Information</Card.Header>
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
                <Card.Header className={`fw-bold ${stylesHome.title}`}>Location Information</Card.Header>
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
                <Card.Header className={`fw-bold ${stylesHome.title}`}>Episodes ({character.episode.length})</Card.Header>
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
                            <Badge bg="secondary" className="fs-6 cursor-pointer">
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

export default CharacterDetailPage;