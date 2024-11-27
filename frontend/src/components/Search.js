import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';


const Search = ({ searchTerm, setSearchTerm, handleSubmit }) => {
  return (
    <Container className='mt-4'>
      <Row className='justify-content-center'>
        <Col xs={12} md={8} lg={6}>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col xs={9}>
                <Form.Control
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search for the new images..."
                />
              </Col>
              <Col>
                <Button type="submit">Search</Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Search;