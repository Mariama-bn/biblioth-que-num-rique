import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { allDocuments } from '../../data/documents';

const fauxContenu = {
  doc1: "Ce document présente les bases de l'anatomie humaine. Il explore les grands systèmes du corps humain : le squelette, les muscles, le système nerveux, et bien plus. Idéal pour les étudiants en première année de médecine.",
  doc2: "Ce cours aborde les principes fondamentaux de la physiologie. Vous y découvrirez comment les organes fonctionnent ensemble pour maintenir l'équilibre du corps humain.",
  doc3: "Un guide pratique pour comprendre les réactions chimiques dans le développement de médicaments. Convient aux étudiants de pharmacie souhaitant renforcer leurs bases.",
  doc4: "Ce cours approfondi en pharmacologie couvre les mécanismes d'action des médicaments, leurs effets secondaires et leur utilisation clinique.",
  doc5: "Ce document introduit les notions clés des algorithmes : tri, recherche, récursivité, complexité… Un excellent point de départ pour les étudiants en informatique.",
  doc6: "Tout ce qu'il faut savoir pour créer un site web : HTML, CSS, JavaScript. Ce document est structuré pour les débutants et va jusqu'aux notions avancées.",
  doc7: "Explorez le monde microscopique des cellules. Ce document présente les structures internes de la cellule, leur rôle et les techniques d'observation.",
  doc8: "Plongez dans l’histoire du Sénégal, des royaumes précoloniaux jusqu’à l’indépendance. Ce document est une ressource précieuse pour comprendre le passé du pays.",
  doc9: "Découvrez les grandes écoles de pensée : rationalisme, empirisme, existentialisme… Ce document initie à la réflexion critique et à la philosophie moderne.",
  doc10: "Les bases de la comptabilité générale expliquées simplement. Vous apprendrez à lire un bilan, enregistrer des opérations, et produire des états financiers.",
  doc11: "Apprenez à concevoir une stratégie de marketing digital : réseaux sociaux, publicité en ligne, SEO. Ce document donne une vue complète et actuelle du sujet."
};

const LireDocument = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const document = allDocuments[id];

  if (!document) {
    return (
      <div className="p-6 text-center text-red-600 font-semibold">
        Document introuvable. <br />
        <Link to="/" className="text-green-600 underline">Retour à l'accueil</Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 text-green-600 hover:underline"
        >
          ← Retour à l'aperçu
        </button>

        <div className="bg-white p-6 rounded shadow">
          <h1 className="text-3xl font-bold text-blue-800 mb-2">{document.title}</h1>
          <p className="text-sm text-gray-600 mb-4">Par : {document.author}</p>
          <p className="text-gray-800 leading-relaxed text-lg">
            {fauxContenu[document.id] || "Contenu à venir pour ce document."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LireDocument;
