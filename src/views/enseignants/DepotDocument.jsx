import React, { useState } from "react";
import { Container, Form, FormGroup, Label, Input, Button, Alert } from "reactstrap";

const DepotDocument = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="content">
      <Container>
        <h3 className="mb-4">Proposer un document</h3>
        {submitted && (
          <Alert color="success">Document soumis pour validation.</Alert>
        )}
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label>Titre</Label>
            <Input type="text" required />
          </FormGroup>
          <FormGroup>
            <Label>Description</Label>
            <Input type="textarea" required />
          </FormGroup>
          <FormGroup>
            <Label>Type</Label>
            <Input type="select">
              <option>Mémoire</option>
              <option>Article</option>
              <option>Support de cours</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label>Fichier (PDF)</Label>
            <Input type="file" accept="application/pdf" required />
          </FormGroup>
          <Button color="primary">Soumettre</Button>
        </Form>
      </Container>
    </div>
  );
};

export default DepotDocument;