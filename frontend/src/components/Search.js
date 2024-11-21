import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';


const Search = () => {
  return (
    <Container>
    <Row>
      <Col>
      <Form>
        <Row>
          <Col>
            <Form.Control
              type="text"
              placeholder="Search for the new images..."
            />
          </Col>
          <Col>
            <Button type="submit">Submit</Button>
          </Col>
        </Row>
      </Form>
      </Col>
    </Row>
  </Container>
  );
}

export default Search;