import React from "react";
import { Container, Row, Col, Card, CardBody, CardText } from "reactstrap";

const ProfilEnseignant = () => {
  return (
    <div className="content">
      <Container>
        <Row>
          <Col md="8">
            <Card className="shadow">
              <CardBody>
                <h4 className="text-primary">Profil de l’Enseignant</h4>
                <CardText><strong>Nom :</strong> Dr. Mamadou Faye</CardText>
                <CardText><strong>Email :</strong> mamadou.faye@uadb.edu.sn</CardText>
                <CardText><strong>Département :</strong> Sciences Économiques</CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProfilEnseignant;