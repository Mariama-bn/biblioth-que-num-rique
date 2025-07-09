import React from "react";
import { Container, Card, CardBody, CardTitle, CardText } from "reactstrap";

const MesEmprunts = () => {
  return (
    <div className="content">
      <Container>
        <h2 className="text-primary mb-4">Mes emprunts</h2>
        <Card className="mb-3">
          <CardBody>
            <CardTitle tag="h5">Mathématiques et Applications</CardTitle>
            <CardText>Date d'emprunt : 01/07/2025</CardText>
            <CardText>Statut : En cours</CardText>
          </CardBody>
        </Card>
        {/* Ajoute ici plus d’emprunts si tu veux */}
      </Container>
    </div>
  );
};

export default MesEmprunts;
