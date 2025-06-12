import React from "react";
// reactstrap components
import {
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
  Table,
  Badge,
  Button,
} from "reactstrap";

const Dashboard = () => {
  const statistiques = [
    { label: "Documents disponibles", value: 348, color: "info" },
    { label: "Utilisateurs inscrits", value: 127, color: "success" },
    { label: "Validations blockchain", value: 94, color: "primary" },
    { label: "En attente de validation", value: 12, color: "warning" },
  ];

  const documentsRecents = [
    {
      titre: "Mémoire : IA en Afrique",
      auteur: "Fatou Ndiaye",
      date: "10/06/2024",
      statut: "Validé",
    },
    {
      titre: "Thèse : Énergies renouvelables",
      auteur: "Cheikh Sarr",
      date: "08/06/2024",
      statut: "En attente",
    },
    {
      titre: "Rapport : Santé communautaire",
      auteur: "Awa Diop",
      date: "06/06/2024",
      statut: "Validé",
    },
    {
      titre: "Projet : Robotique au Sénégal",
      auteur: "Lamine Fall",
      date: "01/06/2024",
      statut: "Validé",
    },
  ];

  return (
    <>
      <Container className="mt-4" fluid>
        <h2 className="mb-4 text-primary">Tableau de bord</h2>

        {/* Statistiques */}
        <Row>
          {statistiques.map((stat, index) => (
            <Col lg="3" md="6" key={index}>
              <Card className={`bg-${stat.color} text-white mb-4`}>
                <CardBody>
                  <CardTitle tag="h5">{stat.label}</CardTitle>
                  <h2>{stat.value}</h2>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Documents récents */}
        <Card className="shadow mb-4">
          <CardBody>
            <h4 className="text-dark mb-4">Documents récents</h4>
            <Table className="align-items-center table-flush" responsive>
              <thead className="thead-light">
                <tr>
                  <th>Titre</th>
                  <th>Auteur</th>
                  <th>Date</th>
                  <th>Statut</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {documentsRecents.map((doc, idx) => (
                  <tr key={idx}>
                    <td>{doc.titre}</td>
                    <td>{doc.auteur}</td>
                    <td>{doc.date}</td>
                    <td>
                      <Badge color={doc.statut === "Validé" ? "success" : "warning"}>
                        {doc.statut}
                      </Badge>
                    </td>
                    <td>
                      <Button size="sm" color="info">
                        Télécharger
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </Container>
    </>
  );
};

export default Dashboard;
