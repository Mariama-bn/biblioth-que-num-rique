import React, { useState, useEffect } from 'react';
import './Accueil.css';

const mockDocuments = [
  {
    type: "Thèse",
    title: "Impact du changement climatique sur l'agriculture au Sahel",
    author: "Dr. Aminata Diallo",
    year: "2024",
    pages: "285",
    downloads: "1,234",
    description: "Une étude approfondie sur les effets du réchauffement climatique sur les pratiques agricoles traditionnelles dans la région sahélienne, avec des recommandations pour l'adaptation."
  },
  {
    type: "Article",
    title: "Développement durable et économie circulaire en Afrique de l'Ouest",
    author: "Prof. Mamadou Seck",
    year: "2024",
    pages: "45",
    downloads: "892",
    description: "Analyse des opportunités et défis de l'économie circulaire comme modèle de développement durable pour les pays d'Afrique de l'Ouest."
  },
  {
    type: "Livre",
    title: "Histoire des royaumes du Sénégal pré-colonial",
    author: "Dr. Fatou Ndiaye",
    year: "2023",
    pages: "456",
    downloads: "2,156",
    description: "Un ouvrage de référence sur l'organisation politique et sociale des royaumes sénégalais avant la colonisation européenne."
  },
  {
    type: "Mémoire",
    title: "L'entrepreneuriat féminin au Sénégal : défis et perspectives",
    author: "Aïssatou Ba",
    year: "2024",
    pages: "128",
    downloads: "567",
    description: "Étude sur les obstacles et les opportunités que rencontrent les femmes entrepreneures dans le contexte socio-économique sénégalais."
  },
  {
    type: "Rapport",
    title: "État de la biodiversité marine en Afrique de l'Ouest",
    author: "Institut de Recherche Marine",
    year: "2023",
    pages: "78",
    downloads: "1,445",
    description: "Rapport technique sur l'état actuel de la biodiversité marine et les mesures de conservation nécessaires."
  },
  {
    type: "Article",
    title: "Innovations pédagogiques dans l'enseignement supérieur africain",
    author: "Dr. Ousmane Diop",
    year: "2024",
    pages: "32",
    downloads: "743",
    description: "Exploration des nouvelles approches pédagogiques adaptées au contexte africain et leur impact sur la qualité de l'enseignement."
  }
];

function DocumentCard({ document, onPreview, onDownload }) {
  return (
    <div className="bg-white rounded-lg p-5 shadow-md hover:shadow-xl transition border border-gray-200 flex flex-col justify-between">
      <div>
        <div className="text-xs font-semibold text-white bg-indigo-500 px-2 py-1 rounded-full mb-3 w-fit">
          {document.type}
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-1 line-clamp-2">{document.title}</h3>
        <div className="text-sm text-indigo-600 mb-1 font-medium">{document.author}</div>
        <div className="text-xs text-gray-500 flex flex-wrap gap-3 mb-3">
          <span>📅 {document.year}</span>
          <span>📄 {document.pages} pages</span>
          <span>⬇️ {document.downloads}</span>
        </div>
        <p className="text-sm text-gray-600 mb-4 line-clamp-3">{document.description}</p>
      </div>
      <div className="flex gap-2 mt-2">
        <button
          className="px-4 py-2 text-sm rounded bg-indigo-600 text-white hover:bg-indigo-700"
          onClick={(e) => {
            e.stopPropagation();
            onDownload(document.title);
          }}
        >
          📥 Télécharger
        </button>
        <button
          className="px-4 py-2 text-sm rounded border border-indigo-600 text-indigo-600 hover:bg-indigo-50"
          onClick={(e) => {
            e.stopPropagation();
            onPreview(document.title);
          }}
        >
          👁️ Aperçu
        </button>
      </div>
    </div>
  );
}

function VisitorHome() {
  const [documents, setDocuments] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setDocuments(mockDocuments);
  }, []);

  const handleSearch = () => {
    const filtered = mockDocuments.filter((doc) =>
      doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.author.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setDocuments(filtered);
  };

  const handleDownload = (title) => {
    alert(`Téléchargement du document : "${title}"`);
  };

  const handlePreview = (title) => {
    alert(`Aperçu du document : "${title}"`);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20 slide-up">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-indigo-600">Bibliothèque UIDT</h1>
          <nav className="flex gap-4">
            <a href="#" className="text-sm font-medium text-gray-600 hover:text-indigo-600">Accueil</a>
            <a href="#" className="text-sm font-medium text-indigo-600 border border-indigo-600 px-3 py-1 rounded hover:bg-indigo-50">Mon Compte</a>
          </nav>
        </div>
      </header>

      <section className="bg-indigo-50 py-10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">Trouvez vos ressources académiques</h2>
          <p className="text-gray-600 mb-6">Explorez des milliers de documents, thèses, articles et rapports disponibles</p>
          <div className="relative max-w-xl mx-auto">
            <input
              type="text"
              className="w-full border border-gray-300 rounded-full py-3 px-5 pr-20 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Rechercher un document, un auteur, un sujet..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            />
            <button
              onClick={handleSearch}
              className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-indigo-600 text-white rounded-full px-4 py-2 text-sm hover:bg-indigo-700"
            >
              🔍
            </button>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((doc, index) => (
            <DocumentCard
              key={index}
              document={doc}
              onDownload={handleDownload}
              onPreview={handlePreview}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default VisitorHome;
