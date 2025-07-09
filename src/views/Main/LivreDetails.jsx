import React from "react";
import { useParams, Link } from "react-router-dom";

// Ici on suppose que vous avez un fichier ou objet avec tous les documents
import documentsData from "../../data/documentsData"; 

const DocumentDetail = () => {
  const { id } = useParams();

  // Trouver le document correspondant à l'id
  const document = documentsData.find((doc) => doc.id === id);

  if (!document) {
    return <div>Document non trouvé</div>;
  }

  // Récupérer les autres documents de la même UFR (et filière si besoin)
  const autresDocuments = documentsData.filter(
    (doc) => doc.ufr === document.ufr && doc.id !== id
  );

  return (
    <div className="container mt-4">
      <h2>{document.titre}</h2>
      <img src={document.image} alt={document.titre} style={{ maxWidth: "400px" }} />
      <p>{document.description}</p>
      <button
        onClick={() => alert("Redirection vers la lecture complète")}
        className="btn btn-primary"
      >
        Lire plus
      </button>

      <h3 className="mt-5">Autres documents de {document.ufr}</h3>
      <ul>
        {autresDocuments.map((doc) => (
          <li key={doc.id}>
            <Link to={`/visitor/document/${doc.id}`}>{doc.titre}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DocumentDetail;
