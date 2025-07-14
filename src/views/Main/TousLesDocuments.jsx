import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Menu } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { allDocuments } from '../../data/documents'; // Import réel

const navLinks = [
  { label: 'Accueil', to: '/' },
  { label: 'Explorer', to: '/explorer' },
  { label: 'Tous les documents', to: '/documents' },
];

const groupBy = (items, key) => {
  return items.reduce((acc, item) => {
    const group = item[key] || 'Autres';
    acc[group] = acc[group] || [];
    acc[group].push(item);
    return acc;
  }, {});
};

const TousLesDocuments = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const documentsArray = Object.values(allDocuments);

  const filteredDocs = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) return documentsArray;
    return documentsArray.filter(doc =>
      doc.title.toLowerCase().includes(term) ||
      doc.filiere?.toLowerCase().includes(term) ||
      doc.ufr?.toLowerCase().includes(term)
    );
  }, [searchTerm]);

  // Organiser les documents filtrés par UFR > Filière
  const docsParUfr = groupBy(filteredDocs, 'ufr');

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Barre de navigation */}
      <header className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-800">Bibliothèque UIDT</h1>
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link key={link.to} to={link.to} className="text-gray-700 hover:text-green-600 font-medium transition">
                {link.label}
              </Link>
            ))}
          </div>
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <Menu className="w-6 h-6 text-gray-800" />
          </button>
        </div>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            className="bg-white shadow md:hidden px-4 pb-4 space-y-2"
          >
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="block text-gray-700 hover:text-green-600 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </header>

      {/* Retour */}
      <div className="max-w-7xl mx-auto px-4 mt-6">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          ← Retour
        </button>
      </div>

      {/* Barre de recherche */}
      <section className="max-w-7xl mx-auto px-4 mb-10">
        <input
          type="text"
          placeholder="Rechercher un document, une filière ou un UFR..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="w-full max-w-md px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </section>

      {/* Affichage des documents classés */}
      <section className="max-w-7xl mx-auto px-4 pb-20 space-y-16">
        {Object.keys(docsParUfr).length === 0 ? (
          <p className="text-center text-gray-500">Aucun document trouvé.</p>
        ) : (
          Object.entries(docsParUfr).map(([ufr, docsUfr]) => {
            const docsParFiliere = groupBy(docsUfr, 'filiere');

            return (
              <div key={ufr}>
                <h2 className="text-3xl font-bold text-blue-800 mb-6 uppercase">UFR {ufr}</h2>

                {Object.entries(docsParFiliere).map(([filiere, docs]) => (
                  <div key={filiere} className="mb-10">
                    <h3 className="text-xl font-semibold text-green-700 mb-4">{filiere}</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                      {docs.map((doc, i) => (
                        <motion.div
                          key={doc.id}
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.05 }}
                          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg"
                        >
                          <div className="h-40 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                            <BookOpen className="text-white w-10 h-10" />
                          </div>
                          <div className="p-4">
                            <h4 className="font-bold text-gray-800 mb-1 truncate">{doc.title}</h4>
                            <p className="text-sm text-gray-600 line-clamp-3 mb-2">{doc.description}</p>
                            <p className="text-xs text-gray-500 mb-3">{doc.author}</p>
                            <Link to={`/document/${doc.id}`}>
                              <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded font-medium transition">
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
            );
          })
        )}
      </section>
    </div>
  );
};

export default TousLesDocuments;
