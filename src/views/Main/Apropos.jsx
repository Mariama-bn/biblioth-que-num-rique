import React from "react";
import { Container, Row, Col } from "reactstrap";

const Apropos = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col md={{ size: 8, offset: 2 }}>
          <h1 className="mb-4 text-primary">À propos de la Bibliothèque numérique UADB</h1>
          <p>
            La Bibliothèque numérique de l’Université Assane Seck de Ziguinchor (UADB) a pour
            mission de fournir un accès facile et rapide à un large éventail de ressources
            académiques et scientifiques. Notre objectif est de soutenir la recherche, l’enseignement
            et l’apprentissage pour tous les étudiants et enseignants.
          </p>
          <p>
            Ce portail offre une interface conviviale pour consulter, rechercher et télécharger
            des documents, thèses, ouvrages et revues dans diverses disciplines. Nous mettons un point
            d’honneur à garantir la qualité, la fiabilité et la diversité des contenus disponibles.
          </p>
          <p>
            N’hésitez pas à explorer notre catalogue et à contacter notre équipe pour toute
            suggestion ou demande spécifique.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Apropos;
