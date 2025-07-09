// ✅ Fichier : src/views/enseignants/LectureDocumentEnseignant.jsx
import React from "react";
import { useLocation } from "react-router-dom";
import { Container } from "reactstrap";

const LectureDocumentEnseignant = () => {
  const { state } = useLocation();
  const document = state?.document;

  if (!document) return <p>Document introuvable.</p>;

  return (
    <div className="content">
      <Container>
        <h2>{document.titre}</h2>
        <iframe
          src={document.lien || "https://example.com/document.pdf"}
          title="Document PDF"
          width="100%"
          height="600px"
          style={{ border: "1px solid #ccc" }}
        ></iframe>
      </Container>
    </div>
  );
};

export default LectureDocumentEnseignant;