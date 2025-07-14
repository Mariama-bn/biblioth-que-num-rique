import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { allDocuments } from '../../data/documents';

const ApercuDocument = () => {
  const { id } = useParams();
  const document = allDocuments[id];

  if (!document) {
    return <div className="p-6 text-center">Document introuvable</div>;
  }

  const docsSameFiliere = Object.values(allDocuments).filter(
    (doc) => doc.filiere === document.filiere && doc.id !== document.id
  );

  let docsToShow = [...docsSameFiliere];
  if (docsToShow.length < 6) {
    const docsSameUfrOtherFilieres = Object.values(allDocuments).filter(
      (doc) =>
        doc.ufr === document.ufr &&
        doc.filiere !== document.filiere &&
        doc.id !== document.id
    );

    const needed = 6 - docsToShow.length;
    docsToShow = docsToShow.concat(docsSameUfrOtherFilieres.slice(0, needed));
  }

  const docsComplementaires = docsToShow.filter(doc => doc.filiere !== document.filiere);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <Link
          to="/"
          className="mb-4 inline-block text-green-600 hover:underline"
        >
          ← Retour à l'accueil
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded shadow p-6 mb-10"
        >
          <div>
            <h1 className="text-3xl font-bold text-blue-800 mb-4">{document.title}</h1>
            <p className="text-gray-600 mb-2">{document.description}</p>
            <p className="text-sm text-gray-500 mb-4">Auteur : {document.author}</p>
            <Link to={`/lecture/${document.id}`}>
               <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md font-semibold shadow transition">
    Lire le document
  </button>
            </Link>
          </div>
        </motion.div>

        {docsSameFiliere.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-green-700 mb-6">
              Autres documents dans la filière {document.filiere}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {docsSameFiliere.map((doc, i) => (
                <motion.div
                  key={doc.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded shadow-md hover:shadow-lg overflow-hidden"
                >
                  <div className="h-36 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white">
                    📘
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-800 mb-1 truncate">{doc.title}</h3>
                    <p className="text-sm text-gray-600 mb-1">{doc.description}</p>
                    <p className="text-xs text-gray-500 mb-3">Par : {doc.author}</p>
                    <Link to={`/lecture/${doc.id}`}>
                      <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded font-medium">
                        Lire le document
                      </button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {docsComplementaires.length > 0 && (
          <div>
            <h2 className="text-2xl font-semibold text-green-700 mb-6">
              Autres documents dans la même UFR ({document.ufr}) mais dans d'autres filières
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {docsComplementaires.map((doc, i) => (
                <motion.div
                  key={doc.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded shadow-md hover:shadow-lg overflow-hidden"
                >
                  <div className="h-36 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white">
                    📘
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-800 mb-1 truncate">{doc.title}</h3>
                    <p className="text-sm text-gray-600 mb-1">{doc.description}</p>
                    <p className="text-xs text-gray-500 mb-1">Par : {doc.author}</p>
                    <p className="text-xs italic text-gray-400 mb-3">
                      Filière :{' '}
                      <Link
                        to={`/ufr/${doc.ufr}`}
                        className="text-green-600 hover:underline font-medium"
                      >
                        {doc.filiere}
                      </Link>
                    </p>
                    <Link to={`/lecture/${doc.id}`}>
                      <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded font-medium">
                        Lire le document
                      </button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ApercuDocument;
