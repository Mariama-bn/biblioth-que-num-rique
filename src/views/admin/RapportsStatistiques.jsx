import React from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";

const RapportsStatistiques = () => {
  return (
    <Container className="mt-4" fluid>
      <Row>
        <Col md="4">
          <Card className="bg-info text-white">
            <CardBody>
              <h4>Total emprunts ce mois</h4>
              <h2>124</h2>
            </CardBody>
          </Card>
        </Col>
        <Col md="4">
          <Card className="bg-success text-white">
            <CardBody>
              <h4>Documents consultés</h4>
              <h2>452</h2>
            </CardBody>
          </Card>
        </Col>
        <Col md="4">
          <Card className="bg-danger text-white">
            <CardBody>
              <h4>Réservations expirées</h4>
              <h2>35</h2>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <Card>
            <CardBody>
              <h3>Rapports détaillés (à venir)</h3>
              <p>Graphiques de fréquentation, activité par filière, etc.</p>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default RapportsStatistiques;
