import React from "react";
import {
  Card,
  CardHeader,
  Table,
  Container,
  Row,
  Col,
  Button,
  Badge,
} from "reactstrap";

const emprunts = [
  {
    id: 1,
    nom: "Fatou Ndiaye",
    document: "Programmation Java",
    dateEmprunt: "2025-07-01",
    dateRetour: "2025-07-10",
    statut: "En cours",
  },
  {
    id: 2,
    nom: "Moussa Diop",
    document: "Histoire de l’Afrique",
    dateEmprunt: "2025-06-15",
    dateRetour: "2025-06-25",
    statut: "Retourné",
  },
];

const GestionEmprunts = () => {
  return (
    <Container className="mt-4" fluid>
      <Row>
        <Col>
          <Card>
            <CardHeader>
              <h3>Gestion des emprunts</h3>
            </CardHeader>
            <Table responsive className="align-items-center">
              <thead className="thead-light">
                <tr>
                  <th>Nom de l'utilisateur</th>
                  <th>Document</th>
                  <th>Date d'emprunt</th>
                  <th>Date de retour</th>
                  <th>Statut</th>
                </tr>
              </thead>
              <tbody>
                {emprunts.map((e) => (
                  <tr key={e.id}>
                    <td>{e.nom}</td>
                    <td>{e.document}</td>
                    <td>{e.dateEmprunt}</td>
                    <td>{e.dateRetour}</td>
                    <td>
                      <Badge color={e.statut === "Retourné" ? "success" : "warning"}>
                        {e.statut}
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

export default GestionEmprunts;
