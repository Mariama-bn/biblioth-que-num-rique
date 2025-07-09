import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, CardBody, Button } from "reactstrap";

const ConsultationEnseignant = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const document = state?.document;

  if (!document) return <p>Document non trouvé.</p>;

  return (
    <div className="content">
      <Container>
        <Row>
          <Col md="8">
            <h2>{document.titre}</h2>
            <p>{document.description}</p>
            <Button
              color="success"
              onClick={() => navigate("/enseignant/lecture", { state: { document } })}
            >
              Lire le document
            </Button>
          </Col>
          <Col md="4">
            <img
              src={document.image}
              alt={document.titre}
              className="img-fluid rounded"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ConsultationEnseignant;