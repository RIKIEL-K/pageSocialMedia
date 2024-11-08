import React from "react";
import { Form, Button, Container } from "react-bootstrap";

const SearchBar = ({ value, onChange }) => {
  return (
    <Container>
      <Form className="d-flex w-25 mt-2 mb-2">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Container>
  );
};

export default SearchBar;
