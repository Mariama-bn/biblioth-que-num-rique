import React from "react";
import {
  Card,
  CardHeader,
  Table,
  Container,
  Row,
  Col,
  Badge,
  Button,
} from "reactstrap";

const reservations = [
  {
    id: 1,
    nom: "Aminata Ba",
    document: "Microéconomie avancée",
    date: "2025-07-03",
    statut: "Active",
  },
  {
    id: 2,
    nom: "Ibrahima Fall",
    document: "Introduction au droit",
    date: "2025-07-02",
    statut: "Expirée",
  },
];

const Reservations = () => {
  return (
    <Container className="mt-4" fluid>
      <Row>
        <Col>
          <Card>
            <CardHeader>
              <h3>Réservations en cours</h3>
            </CardHeader>
            <Table responsive>
              <thead className="thead-light">
                <tr>
                  <th>Nom</th>
                  <th>Document</th>
                  <th>Date</th>
                  <th>Statut</th>
                </tr>
              </thead>
              <tbody>
                {reservations.map((r) => (
                  <tr key={r.id}>
                    <td>{r.nom}</td>
                    <td>{r.document}</td>
                    <td>{r.date}</td>
                    <td>
                      <Badge color={r.statut === "Active" ? "success" : "danger"}>
                        {r.statut}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Reservations;
