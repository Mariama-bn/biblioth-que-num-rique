import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ufrData = {
  sante: {
    name: 'UFR Santé',
    filieres: {
      Medecine: [
        { id: 'doc1', title: 'Anatomie humaine', author: 'Dr. Ndiaye', description: "Cours complet sur l'anatomie." },
        { id: 'doc2', title: 'Physiologie 101', author: 'Dr. Ba', description: "Introduction à la physiologie." }
      ],
      Pharmacie: [
        { id: 'doc3', title: 'Chimie pharmaceutique', author: 'Dr. Diop', description: "Notions de base en chimie des médicaments." },
        { id: 'doc4', title: 'Pharmacologie avancée', author: 'Dr. Sow', description: "Cours approfondi en pharmacologie." }
      ]
    }
  },
  sciences: {
    name: 'UFR Sciences',
    filieres: {
      Informatique: [
        { id: 'doc5', title: 'Algorithmes', author: 'M. Faye', description: "Introduction aux algorithmes et structures de données." },
        { id: 'doc6', title: 'Programmation Web', author: 'Mme Diallo', description: "Cours complet sur HTML, CSS et JS." }
      ],
      Biologie: [
        { id: 'doc7', title: 'Biologie Cellulaire', author: 'Dr. Sarr', description: "Exploration des cellules et structures biologiques." }
      ]
    }
  },
  lettres: {
    name: 'UFR Lettres',
    filieres: {
      Histoire: [
        { id: 'doc8', title: 'Histoire du Sénégal', author: 'Pr. Ndiaye', description: 'Résumé historique complet du Sénégal.' }
      ],
      Philosophie: [
        { id: 'doc9', title: 'Introduction à la philosophie', author: 'Dr. Mbaye', description: 'Les grands courants de pensée.' }
      ]
    }
  },
  economie: {
    name: 'UFR Économie',
    filieres: {
      Gestion: [
        { id: 'doc10', title: 'Comptabilité Générale', author: 'Mme Diouf', description: 'Les bases de la comptabilité.' }
      ],
      Marketing: [
        { id: 'doc11', title: 'Marketing Digital', author: 'M. Sy', description: 'Stratégies digitales pour entreprises.' }
      ]
    }
  }
};

const RedirectionUfr = () => {
  const { ufrId } = useParams();
  const ufr = ufrData[ufrId];

  if (!ufr) {
    return <div className="p-6 text-center">UFR non trouvée</div>;
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-blue-800">Documents de {ufr.name}</h1>
          <Link to="/" className="text-green-600 hover:underline font-medium">← Retour à l'accueil</Link>
        </div>

        {Object.entries(ufr.filieres).map(([filiere, docs], idx) => (
          <div key={filiere} className="mb-12">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">Filière : {filiere}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {docs.map((doc, i) => (
                <motion.div
                  key={doc.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded shadow-md hover:shadow-lg transition overflow-hidden"
                >
                  <div className="h-40 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-lg font-bold">
                    📘
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-800 mb-1 truncate">{doc.title}</h3>
                    <p className="text-sm text-gray-600 mb-1">{doc.description}</p>
                    <p className="text-xs text-gray-500 mb-3">Par : {doc.author}</p>
                    <Link to={`/document/${doc.id}`}>
                      <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded font-medium">
                        Consulter
                      </button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RedirectionUfr;
