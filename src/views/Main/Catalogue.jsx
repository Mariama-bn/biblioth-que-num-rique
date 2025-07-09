import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
  Input,
} from "reactstrap";

const documents = [
  {
    titre: "Introduction à la Programmation",
    description: "Les bases de la programmation en Python et Java.",
    image: "https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_960_720.jpg",
    lien: "#",
  },
  {
    titre: "Mathématiques pour l’Ingénieur",
    description: "Outils mathématiques appliqués à l’ingénierie et aux sciences.",
    image: "https://cdn.pixabay.com/photo/2016/03/27/20/58/mathematics-1285019_960_720.jpg",
    lien: "#",
  },
  {
    titre: "Gestion Financière",
    description: "Principes fondamentaux de la finance d’entreprise.",
    image: "https://cdn.pixabay.com/photo/2018/01/18/07/03/money-3085074_960_720.jpg",
    lien: "#",
  },
  // Ajoute d’autres documents ici
];

const Catalogue = () => {
  const [search, setSearch] = useState("");

  const documentsFiltres = documents.filter(
    (doc) =>
      doc.titre.toLowerCase().includes(search.toLowerCase()) ||
      doc.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container className="my-5">
      <h1 className="mb-4 text-primary">Catalogue des documents</h1>
      <Row className="mb-4">
        <Col md="8">
          <Input
            type="search"
            placeholder="Rechercher un document par titre ou description"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Col>
      </Row>

      <Row>
        {documentsFiltres.length === 0 ? (
          <Col>
            <p>Aucun document trouvé pour votre recherche.</p>
          </Col>
        ) : (
          documentsFiltres.map((doc, idx) => (
            <Col md="4" key={idx} className="mb-4">
              <Card className="shadow-sm">
                <img
                  alt={doc.titre}
                  src={doc.image}
                  className="card-img-top"
                  style={{ height: "220px", objectFit: "cover" }}
                />
                <CardBody>
                  <CardTitle tag="h5">{doc.titre}</CardTitle>
                  <CardText>{doc.description}</CardText>
                  <Button color="info" size="sm" href={doc.lien}>
                    Consulter
                  </Button>
                </CardBody>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
};

export default Catalogue;
