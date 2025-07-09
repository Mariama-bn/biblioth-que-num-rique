import React from "react";
import { Container, Row, Col, Card, CardBody, CardTitle } from "reactstrap";

const DashboardEnseignant = () => {
  return (
    <div className="content">
      <Container>
        <Row className="mb-4">
          <Col>
            <h2 className="text-primary">Bienvenue, Enseignant 👨‍🏫</h2>
            <p className="text-muted">Voici un aperçu de votre espace personnel</p>
          </Col>
        </Row>
        <Row>
          <Col md="4">
            <Card className="shadow-sm">
              <CardBody>
                <CardTitle tag="h5">Documents déposés</CardTitle>
                <h3>12</h3>
              </CardBody>
            </Card>
          </Col>
          <Col md="4">
            <Card className="shadow-sm">
              <CardBody>
                <CardTitle tag="h5">Consultations</CardTitle>
                <h3>98</h3>
              </CardBody>
            </Card>
          </Col>
          <Col md="4">
            <Card className="shadow-sm">
              <CardBody>
                <CardTitle tag="h5">Documents en attente</CardTitle>
                <h3>3</h3>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DashboardEnseignant;


