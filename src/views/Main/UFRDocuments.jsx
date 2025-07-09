import React from "react";
import { useParams, Link } from "react-router-dom";

// Même source de données mock
import documentsData from "../../data/documentsData";

const UFRDocuments = () => {
  const { ufrId } = useParams();

  // Tous les documents de cette UFR
  const documentsUFR = documentsData.filter((doc) => doc.ufr === ufrId);

  if (documentsUFR.length === 0) {
    return <div>Aucun document trouvé pour cette UFR.</div>;
  }

  return (
    <div className="container mt-4">
      <h2>Documents de l'UFR : {ufrId}</h2>
      <ul>
        {documentsUFR.map((doc) => (
          <li key={doc.id}>
            <Link to={`/visitor/document/${doc.id}`}>{doc.titre}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UFRDocuments;
