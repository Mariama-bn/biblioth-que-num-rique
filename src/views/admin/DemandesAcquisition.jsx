import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  Table,
  Badge,
} from "reactstrap";

const demandes = [
  {
    id: 1,
    nom: "Pr. Diallo",
    titre: "Nouveaux enjeux du développement durable",
    date: "2025-07-04",
    statut: "En attente",
  },
  {
    id: 2,
    nom: "Pr. Sow",
    titre: "Systèmes distribués",
    date: "2025-06-30",
    statut: "Acceptée",
  },
];

const DemandesAcquisition = () => {
  return (
    <Container className="mt-4" fluid>
      <Row>
        <Col>
          <Card>
            <CardHeader>
              <h3>Demandes d’acquisition</h3>
            </CardHeader>
            <Table responsive>
              <thead className="thead-light">
                <tr>
                  <th>Enseignant</th>
                  <th>Document demandé</th>
                  <th>Date</th>
                  <th>Statut</th>
                </tr>
              </thead>
              <tbody>
                {demandes.map((d) => (
                  <tr key={d.id}>
                    <td>{d.nom}</td>
                    <td>{d.titre}</td>
                    <td>{d.date}</td>
                    <td>
                      <Badge
                        color={
                          d.statut === "Acceptée"
                            ? "success"
                            : d.statut === "Refusée"
                            ? "danger"
                            : "warning"
                        }
                      >
                        {d.statut}
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

export default DemandesAcquisition;
