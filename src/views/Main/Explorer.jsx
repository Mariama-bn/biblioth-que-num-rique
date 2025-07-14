import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { BookOpen, Menu, X, Search, ChevronDown } from 'lucide-react';

// Simule des documents pour l'exemple
const allDocuments = [
  { id: 's1', title: 'Anatomie Humaine', ufr: 'sante', author: 'Dr. Fall', category: 'Médecine', date: '2023-04-15', popularity: 120 },
  { id: 's2', title: 'Pharmacologie Avancée', ufr: 'sante', author: 'Mme Ndiaye', category: 'Pharmacie', date: '2022-11-20', popularity: 80 },
  { id: 'sc1', title: 'Calcul Différentiel', ufr: 'sciences', author: 'Prof. Diallo', category: 'Mathématiques', date: '2023-02-10', popularity: 150 },
  { id: 'sc2', title: 'Physique Quantique', ufr: 'sciences', author: 'Dr. Sow', category: 'Physique', date: '2021-08-05', popularity: 95 },
  { id: 'l1', title: 'Littérature Française', ufr: 'lettres', author: 'Mme Ba', category: 'Français', date: '2023-01-25', popularity: 70 },
  { id: 'e1', title: 'Microéconomie', ufr: 'economie', author: 'M. Diouf', category: 'Économie', date: '2023-05-02', popularity: 110 },
  // Ajoute plus de docs ici selon besoin...
];

// Données pour filtres
const ufrOptions = [
  { id: 'sante', label: 'UFR Santé' },
  { id: 'sciences', label: 'UFR Sciences' },
  { id: 'lettres', label: 'UFR Lettres' },
  { id: 'economie', label: 'UFR Économie' },
];
const categoryOptions = ['Médecine', 'Pharmacie', 'Mathématiques', 'Physique', 'Français', 'Économie'];

const sortOptions = [
  { value: 'date-desc', label: 'Date (Plus récentes)' },
  { value: 'date-asc', label: 'Date (Plus anciennes)' },
  { value: 'popularity-desc', label: 'Popularité (Décroissante)' },
  { value: 'popularity-asc', label: 'Popularité (Croissante)' },
];

const Explorer = () => {
  const navigate = useNavigate();

  // États filtres et recherche
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUfrs, setSelectedUfrs] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortBy, setSortBy] = useState('date-desc');

  // Pour menu mobile
  const [menuOpen, setMenuOpen] = useState(false);

  // Filtrage des documents en fonction des critères
  const filteredDocs = allDocuments
    .filter(doc => 
      (searchTerm === '' || doc.title.toLowerCase().includes(searchTerm.toLowerCase()) || doc.author.toLowerCase().includes(searchTerm.toLowerCase()))
      && (selectedUfrs.length === 0 || selectedUfrs.includes(doc.ufr))
      && (selectedCategories.length === 0 || selectedCategories.includes(doc.category))
    )
    .sort((a, b) => {
      if(sortBy === 'date-desc') return new Date(b.date) - new Date(a.date);
      if(sortBy === 'date-asc') return new Date(a.date) - new Date(b.date);
      if(sortBy === 'popularity-desc') return b.popularity - a.popularity;
      if(sortBy === 'popularity-asc') return a.popularity - b.popularity;
      return 0;
    });

  // Gestion sélection filtre UFR
  const toggleUfr = (id) => {
    setSelectedUfrs(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  // Gestion sélection catégorie
  const toggleCategory = (cat) => {
    setSelectedCategories(prev => prev.includes(cat) ? prev.filter(x => x !== cat) : [...prev, cat]);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Menu identique à la page accueil */}
      <header className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-800 cursor-pointer" onClick={() => navigate('/')}>Bibliothèque UIDT</h1>
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-700 hover:text-green-600 font-medium transition">Accueil</Link>
            <Link to="/explorer" className="text-green-600 font-semibold">Explorer</Link>
            <Link to="/documents" className="text-gray-700 hover:text-green-600 font-medium transition">Tous les documents</Link>
          </nav>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            {menuOpen ? <X className="w-6 h-6 text-gray-800" /> : <Menu className="w-6 h-6 text-gray-800" />}
          </button>
        </div>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            className="bg-white shadow md:hidden px-4 pb-4 space-y-2"
          >
            <Link to="/" onClick={() => setMenuOpen(false)} className="block text-gray-700 hover:text-green-600 font-medium">Accueil</Link>
            <Link to="/explorer" onClick={() => setMenuOpen(false)} className="block text-green-600 font-semibold">Explorer</Link>
            <Link to="/documents" onClick={() => setMenuOpen(false)} className="block text-gray-700 hover:text-green-600 font-medium">Tous les documents</Link>
          </motion.nav>
        )}
      </header>

      {/* Titre et bouton retour */}
      <section className="max-w-7xl mx-auto px-4 py-6 flex items-center space-x-4">
        <button
          onClick={() => navigate(-1)}
          className="bg-green-500 hover:bg-green-600 text-white rounded p-2 shadow transition"
          aria-label="Retour à la page précédente"
        >
          ← Retour
        </button>
        <h2 className="text-3xl font-bold text-gray-900">Explorer les documents</h2>
      </section>

      {/* Recherche + filtres */}
      <section className="max-w-7xl mx-auto px-4 mb-8">
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0">
          {/* Recherche */}
          <div className="flex-grow relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Rechercher par titre, auteur..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 shadow-sm"
            />
          </div>

          {/* Tri */}
          <select
            value={sortBy}
            onChange={e => setSortBy(e.target.value)}
            className="md:w-60 rounded-lg border border-gray-300 py-3 px-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            aria-label="Trier par"
          >
            {sortOptions.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>

        {/* Filtres avancés */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Filtre UFR */}
          <fieldset className="border rounded-lg p-4 shadow-sm">
            <legend className="text-lg font-semibold mb-2">Filtrer par UFR</legend>
            {ufrOptions.map(ufr => (
              <label key={ufr.id} className="flex items-center space-x-2 mb-1 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={selectedUfrs.includes(ufr.id)}
                  onChange={() => toggleUfr(ufr.id)}
                  className="accent-green-500"
                />
                <span>{ufr.label}</span>
              </label>
            ))}
          </fieldset>

          {/* Filtre Catégorie */}
          <fieldset className="border rounded-lg p-4 shadow-sm">
            <legend className="text-lg font-semibold mb-2">Filtrer par catégorie</legend>
            {categoryOptions.map(cat => (
              <label key={cat} className="flex items-center space-x-2 mb-1 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(cat)}
                  onChange={() => toggleCategory(cat)}
                  className="accent-green-500"
                />
                <span>{cat}</span>
              </label>
            ))}
          </fieldset>
        </div>
      </section>

      {/* Résultats */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        {filteredDocs.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">Aucun document trouvé avec ces critères.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredDocs.map((doc, i) => (
              <motion.div
                key={doc.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg"
              >
                <div className="h-40 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <BookOpen className="text-white w-10 h-10" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-800 mb-1 truncate">{doc.title}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2 mb-2">{doc.category}</p>
                  <p className="text-xs text-gray-500 mb-1">Auteur : {doc.author}</p>
                  <p className="text-xs text-gray-400 mb-3">Date : {new Date(doc.date).toLocaleDateString()}</p>
                  <button
                    onClick={() => navigate(`/document/${doc.id}`)}
                    className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded font-medium"
                  >
                    Consulter
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Explorer;
