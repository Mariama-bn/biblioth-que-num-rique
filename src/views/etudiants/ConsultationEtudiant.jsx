import React from "react";
import { Container } from "reactstrap";

const ConsultationEtudiant = () => {
  return (
    <div className="content">
      <Container fluid>
        <h2 className="text-primary">Consultation de documents</h2>
        <p>Vous pouvez consulter les documents mis à disposition par l’université selon votre UFR.</p>
        {/* Ajoute ici la liste des documents consultables si nécessaire */}
      </Container>
    </div>
  );
};

export default ConsultationEtudiant;
