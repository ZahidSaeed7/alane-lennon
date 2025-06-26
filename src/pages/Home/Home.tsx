import React, { useMemo, useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import useAxios from 'axios-hooks';
import type { CharacterListResponse } from '../../types/character.types';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Pagination from 'react-bootstrap/Pagination';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import CharacterList from '../../components/CharacterList/CharacterList';
import { paginateResults } from '../../utils/pagination';

const HomePage: React.FC = () => {

  // Sync the selected page number with the query parameter
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(() => {
    const pageParam = searchParams.get('page');
    return pageParam ? parseInt(pageParam, 10) : 1;
  });

  const [searchTerm, setSearchTerm] = useState(() => searchParams.get('name') || '');

  const [activeSearch, setActiveSearch] = useState(() => {
    return searchParams.get('name') || '';
  });

  // Build API URL with search parameters
  const apiUrl = useMemo(() => {
    const params = new URLSearchParams(searchParams);
    if (activeSearch) params.set('name', activeSearch);
    return `character?${params.toString()}`;
  }, [searchParams, activeSearch]);

  const [{ data, loading, error }] = useAxios<CharacterListResponse>(apiUrl);
  const paginatedPages = useMemo(() => paginateResults(currentPage, data?.info.pages || 1), [currentPage, data]);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setActiveSearch(searchTerm);
    setCurrentPage(1); // Reset to first page when searching
  };

  // Update URL when currentPage or activeSearch changes
  useEffect(() => {
    const params: Record<string, string> = {};
    if (currentPage > 1) params.page = currentPage.toString();
    if (activeSearch) params.name = activeSearch;
    setSearchParams(params);
  }, [currentPage, activeSearch, setSearchParams]);

  if (loading) {
    return (
      <Container className="d-flex flex-column align-items-center justify-content-center" style={{ height: 200 }}>
        <Spinner animation="border" role="status" variant="primary" style={{ width: 60, height: 60, marginBottom: 16 }}>
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        <div style={{ fontSize: '1.2rem', color: '#0d6efd', fontWeight: 500 }}>Loading Characters</div>
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

  return (
    <Container className="py-3">
      <div className="d-flex justify-content-between align-items-center border-bottom pb-3 mb-4">
        <h3 className="mb-0 fw-bold">Characters list page</h3>
        {data && (
          <span className="text-secondary">Total characters: {data.info.count}</span>
        )}
      </div>

      {/* Search Form */}
      <Form onSubmit={handleSearch} className="mb-4">
        <InputGroup>
          <Form.Control
            type="text"
            placeholder="Search characters by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button variant="primary" type="submit">
            Search
          </Button>
        </InputGroup>
      </Form>

      {(!data || !data.results?.length) ? (
        <Alert variant="info" className="text-center my-4">No characters found.</Alert>
      ) : (
        <>
          <CharacterList characters={data.results} />

          {data.info.pages > 1 && (
            <div className="d-flex justify-content-center my-4">
              <Pagination>
                {paginatedPages.map((page, index) =>
                  page === 'ellipsis' ? (
                    <Pagination.Ellipsis key={`ellipsis-${index}`} disabled />
                  ) : (
                    <Pagination.Item
                      key={page}
                      active={currentPage === page}
                      onClick={() => handlePageChange(page)}
                    >
                      {page}
                    </Pagination.Item>
                  )
                )}
              </Pagination>
            </div>  
          )}
        </>
      )}
    </Container>
  );
};

export default HomePage; 