// src/components/Footer/MainFooter.jsx
import React from "react";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const MainFooter = () => {
  return (
    <footer className="tw-bg-gray-900 tw-text-gray-300 tw-pt-10 tw-pb-6">
      <div className="tw-container tw-mx-auto tw-grid tw-grid-cols-2 md:tw-grid-cols-4 tw-gap-6 tw-px-4">
        <div>
          <h3 className="tw-text-white tw-font-semibold tw-mb-4">À l’Université</h3>
          <ul className="tw-space-y-2">
            <li><a href="#" className="tw-no-underline hover:tw-text-green-400">Qui sommes-nous ?</a></li>
            <li><a href="#" className="tw-no-underline hover:tw-text-green-400">À propos</a></li>
            <li><a href="#" className="tw-no-underline hover:tw-text-green-400">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="tw-text-white tw-font-semibold tw-mb-4">Aide & Info</h3>
          <ul className="tw-space-y-2">
            <li><a href="#" className="tw-no-underline hover:tw-text-green-400">Centre d’aide</a></li>
            <li><a href="#" className="tw-no-underline hover:tw-text-green-400">Mentions légales</a></li>
            <li><a href="#" className="tw-no-underline hover:tw-text-green-400">Politique de confidentialité</a></li>
          </ul>
        </div>

        <div>
          <h3 className="tw-text-white tw-font-semibold tw-mb-4">Supports & Services</h3>
          <ul className="tw-space-y-2">
            <li><a href="#" className="tw-no-underline hover:tw-text-green-400">Conditions d’utilisation</a></li>
            <li><a href="#" className="tw-no-underline hover:tw-text-green-400">FAQ</a></li>
            <li><a href="#" className="tw-no-underline hover:tw-text-green-400">Plan du site</a></li>
          </ul>
        </div>

        <div>
          <h3 className="tw-text-white tw-font-semibold tw-mb-4">Suivez-nous</h3>
          <div className="tw-flex tw-items-center tw-gap-4">
            <a href="#" className="tw-text-gray-300 hover:tw-text-green-400"><Facebook size={24} /></a>
            <a href="#" className="tw-text-gray-300 hover:tw-text-green-400"><Twitter size={24} /></a>
            <a href="#" className="tw-text-gray-300 hover:tw-text-green-400"><Instagram size={24} /></a>
            <a href="#" className="tw-text-gray-300 hover:tw-text-green-400"><Youtube size={24} /></a>
          </div>
        </div>
      </div>

      <div className="tw-border-t tw-border-gray-700 tw-mt-8 tw-pt-6">
        <div className="tw-container tw-mx-auto tw-text-center tw-text-gray-500 tw-text-xs">
          © {new Date().getFullYear()} UIDT — Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
