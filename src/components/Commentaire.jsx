import { React, useRef, useState } from "react";
import { Button, Collapse, Form } from "react-bootstrap";

const Commentaire = ({ onSaveComment }) => {
  const [open, setOpen] = useState(false);
  const FormRef = useRef();

  const onSaveCommentHandler = () => {
    const commentText = FormRef.current.value;
    onSaveComment(commentText);
    FormRef.current.value = "";
  };
  return (
    <>
      <Button
        variant="light"
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-plus"
          viewBox="0 0 16 16"
        >
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
        </svg>
      </Button>

      <Collapse in={open}>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Ajouter un commentaire</Form.Label>

            <Form.Control as="textarea" rows={2} ref={FormRef}></Form.Control>
            <Button className="mt-2" onClick={onSaveCommentHandler}>
              poster le commentaire
            </Button>
          </Form.Group>
        </Form>
      </Collapse>
    </>
  );
};

export default Commentaire;
