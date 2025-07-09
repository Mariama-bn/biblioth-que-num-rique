import React from "react";
import { Container, Row, Col, Card, CardBody, CardTitle, CardText } from "reactstrap";

const DashboardEtudiant = () => {
  return (
    <div className="content">
      <Container fluid>
        <h2 className="mb-4 text-primary">Tableau de bord de l'étudiant</h2>
        <Row>
          <Col md="4">
            <Card className="shadow border-primary">
              <CardBody>
                <CardTitle tag="h5">Documents disponibles</CardTitle>
                <CardText>Accédez à tous les documents consultables.</CardText>
              </CardBody>
            </Card>
          </Col>
          <Col md="4">
            <Card className="shadow border-success">
              <CardBody>
                <CardTitle tag="h5">Mes emprunts</CardTitle>
                <CardText>Consultez vos documents empruntés ou en attente.</CardText>
              </CardBody>
            </Card>
          </Col>
          <Col md="4">
            <Card className="shadow border-info">
              <CardBody>
                <CardTitle tag="h5">Profil</CardTitle>
                <CardText>Gérez vos informations personnelles et votre compte.</CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DashboardEtudiant;
