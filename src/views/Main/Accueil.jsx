import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { allDocuments } from '../../data/documents';

// ✅ Import de l’image de fond
import headerImg from '../../assets/img/theme/img-biblio-uidt4.jpg';

const ufrs = [
  { id: 'sante', name: 'UFR Santé', color: 'from-blue-700 to-blue-900' },
  { id: 'sciences', name: 'UFR Sciences', color: 'from-blue-700 to-blue-900' },
  { id: 'lettres', name: 'UFR Lettres', color: 'from-blue-700 to-blue-900' },
  { id: 'economie', name: 'UFR Économie', color: 'from-blue-700 to-blue-900' }
];

const generateFakeDocuments = (ufrId, count, existingIds) => {
  const docs = [];
  for (let i = 1; i <= count; i++) {
    const fakeId = `${ufrId}-doc-fake-${i}`;
    if (existingIds.has(fakeId)) continue;
    docs.push({
      id: fakeId,
      title: `Document fictif ${i} - ${ufrId.toUpperCase()}`,
      description: "Description fictive pour compléter la liste.",
      author: "Auteur fictif",
      filiere: '',
      ufr: ufrId
    });
  }
  return docs;
};

const Accueil = () => {
  const [isOpen, setIsOpen] = useState(false);

  const documentsParUfr = (ufrId) => {
    const docsReels = Object.values(allDocuments).filter(doc => doc.ufr === ufrId);
    const existingIds = new Set(docsReels.map(doc => doc.id));
    const manque = 6 - docsReels.length;
    const docsFakes = manque > 0 ? generateFakeDocuments(ufrId, manque, existingIds) : [];
    return [...docsReels, ...docsFakes];
  };

  const navLinks = [
    { label: 'Accueil', to: '/' },
    { label: 'Explorer', to: '/explorer' },
    { label: 'Tous les documents', to: '/documents' }
  ];

  return (
    <div className="bg-gray-50">
      {/* Barre de navigation */}
      <header className="bg-white shadow sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-800">Bibliothèque UIDT</h1>
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-gray-700 hover:text-green-600 font-medium transition"
              >
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

      {/* ✅ Bannière avec image (pas de bouton créer compte) */}
      <section className="relative h-[400px] w-full overflow-hidden">
        <img
          src={headerImg}
          alt="Bibliothèque UIDT"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center px-4">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Bienvenue sur la Bibliothèque Numérique UIDT
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Explorez toutes les ressources disponibles classées par UFR
          </motion.p>
        </div>
      </section>

      {/* Blocs UFR */}
      {ufrs.map((ufr) => {
        const docs = documentsParUfr(ufr.id);
        return (
          <section key={ufr.id} className="py-16">
            <div className="max-w-7xl mx-auto px-4">
              <div className="flex items-center justify-between mb-8 px-4 py-3 rounded-md bg-blue-200">
                <h2 className="text-2xl font-bold text-blue-800">{ufr.name}</h2>
                <Link to={`/ufr/${ufr.id}`}>
                  <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded font-semibold shadow">
                    Voir tous les documents
                  </button>
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {docs.map((doc, i) => (
                  <motion.div
                    key={doc.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg"
                  >
                    <div className="h-40 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                      <BookOpen className="text-white w-10 h-10" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-gray-800 mb-1 truncate">{doc.title}</h3>
                      <p className="text-sm text-gray-600 line-clamp-2 mb-2">{doc.description}</p>
                      <p className="text-xs text-gray-500 mb-3">{doc.author}</p>
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
          </section>
        );
      })}

      {/* Appel à l’action final (on peut l’enlever si tu veux aussi) */}
      <section className="py-16 bg-green-600 text-white text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h2 className="text-3xl font-bold mb-4">Rejoignez la communauté UIDT</h2>
          <p className="text-lg mb-6">
            Accédez à des milliers de documents utiles pour vos études
          </p>
          <Link to="/auth/register">
            <button className="bg-white text-green-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 shadow">
              Commencer maintenant
            </button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Accueil;
