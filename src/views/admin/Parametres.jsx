import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";

const Parametres = () => {
  const [delai, setDelai] = useState(14);
  const [quota, setQuota] = useState(5);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Paramètres mis à jour !");
  };

  return (
    <Container className="mt-4" fluid>
      <Row>
        <Col md="6">
          <Card>
            <CardHeader>
              <h3>Paramètres généraux</h3>
            </CardHeader>
            <CardBody>
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label>Durée maximale de prêt (jours)</Label>
                  <Input
                    type="number"
                    value={delai}
                    onChange={(e) => setDelai(e.target.value)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Nombre maximum de livres empruntables</Label>
                  <Input
                    type="number"
                    value={quota}
                    onChange={(e) => setQuota(e.target.value)}
                  />
                </FormGroup>
                <Button color="primary" type="submit">
                  Enregistrer
                </Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Parametres;
