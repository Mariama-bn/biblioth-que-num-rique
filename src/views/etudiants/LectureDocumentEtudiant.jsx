import React from "react";
import { useLocation } from "react-router-dom";
import { Container, Card, CardBody } from "reactstrap";

const LectureDocumentEtudiant = () => {
  const location = useLocation();
  const document = location.state?.document;

  if (!document) {
    return (
      <div className="content">
        <Container>
          <h2 className="text-danger">Aucun document sélectionné</h2>
        </Container>
      </div>
    );
  }

  return (
    <div className="content">
      <Container>
        <Card className="shadow">
          <CardBody>
            <h3 className="text-primary">{document.titre}</h3>
            <p>{document.description}</p>
            <div style={{ height: "600px", border: "1px solid #ccc" }}>
              <iframe
                src={document.lien}
                title="Lecteur de document"
                width="100%"
                height="100%"
              ></iframe>
            </div>
          </CardBody>
        </Card>
      </Container>
    </div>
  );
};

export default LectureDocumentEtudiant;
