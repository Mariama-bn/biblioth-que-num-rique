// src/components/Header/MainHeader.jsx
import React, { useState } from 'react';
import { Search, User, ChevronDown, HelpCircle } from 'lucide-react';

const MainHeader = () => {
  const [user, setUser] = useState({
    name: '',
    isAuthenticated: false,
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isHelpMenuOpen, setIsHelpMenuOpen] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Recherche :', searchQuery);
  };

  const handleUserClick = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const handleMenuItemClick = (menuItem) => {
    if (!user.isAuthenticated) {
      alert("Veuillez créer un compte pour accéder à cette section.");
      return;
    }

    switch (menuItem) {
      case 'account':
        console.log("Navigating to Mon compte");
        break;
      case 'favorites':
        console.log("Navigating to Mes favoris");
        break;
      case 'logout':
        setUser({ name: '', isAuthenticated: false });
        setIsUserMenuOpen(false);
        break;
      default:
        break;
    }
  };

  return (
    <header className="tw-bg-white tw-shadow-sm tw-border-b tw-border-gray-200">
      <div className="tw-max-w-7xl tw-mx-auto tw-px-4 sm:tw-px-6 lg:tw-px-8">
        <div className="tw-flex tw-items-center tw-justify-between tw-h-16">

          {/* Search Bar */}
          <div className="tw-flex-1 tw-flex tw-justify-center">
            <form onSubmit={handleSearch} className="tw-flex tw-w-full tw-max-w-xl">
              <div className="tw-relative tw-flex-grow">
                <span className="tw-absolute tw-inset-y-0 tw-left-0 tw-pl-3 tw-flex tw-items-center">
                  <Search className="tw-h-5 tw-w-5 tw-text-gray-400" />
                </span>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Rechercher un livre, un auteur..."
                  className="tw-w-full tw-pl-10 tw-pr-4 tw-py-2 tw-border tw-border-gray-300 tw-rounded-l-md tw-placeholder-gray-500 focus:tw-outline-none focus:tw-ring-1 focus:tw-ring-green-500 focus:tw-border-green-500"
                />
              </div>
              <button
                type="submit"
                className="tw-bg-green-500 tw-text-white tw-px-6 tw-py-2 tw-rounded-r-md hover:tw-bg-green-600"
              >
                Rechercher
              </button>
            </form>
          </div>

          {/* Right navigation */}
          <div className="tw-flex tw-items-center tw-space-x-6">
            {/* User */}
            <div className="tw-relative">
              <button
                onClick={handleUserClick}
                className="tw-flex tw-items-center tw-space-x-2 tw-text-gray-700 hover:tw-text-green-600"
              >
                <User className="tw-h-5 tw-w-5" />
                <span className="tw-font-medium">
                  {user.isAuthenticated ? user.name : "S’inscrire"}
                </span>
                <ChevronDown className="tw-h-4 tw-w-4" />
              </button>

              {isUserMenuOpen && (
                <div className="tw-absolute tw-right-0 tw-mt-2 tw-w-48 tw-bg-white tw-rounded-md tw-shadow-lg tw-py-1 tw-z-10">
                  <a href="/auth/register" className="tw-block tw-px-4 tw-py-2 hover:tw-bg-gray-100 tw-no-underline">
                    S'inscrire
                  </a>
                  <a href="/auth/login" className="tw-block tw-px-4 tw-py-2 hover:tw-bg-gray-100 tw-no-underline">
                    Se connecter
                  </a>
                  {user.isAuthenticated && (
                    <>
                      <hr className="tw-my-1" />
                      <button
                        onClick={() => handleMenuItemClick('account')}
                        className="tw-block tw-w-full tw-text-left tw-px-4 tw-py-2 hover:tw-bg-gray-100"
                      >
                        Mon compte
                      </button>
                      <button
                        onClick={() => handleMenuItemClick('logout')}
                        className="tw-block tw-w-full tw-text-left tw-px-4 tw-py-2 hover:tw-bg-gray-100"
                      >
                        Se déconnecter
                      </button>
                    </>
                  )}
                </div>
              )}
            </div>

            {/* Help */}
            <div className="tw-relative">
              <button
                onClick={() => setIsHelpMenuOpen(!isHelpMenuOpen)}
                className="tw-flex tw-items-center tw-space-x-2 tw-text-gray-700 hover:tw-text-green-600"
              >
                <HelpCircle className="tw-h-5 tw-w-5" />
                <span className="tw-font-medium">Aide</span>
                <ChevronDown className="tw-h-4 tw-w-4" />
              </button>
              {isHelpMenuOpen && (
                <div className="tw-absolute tw-right-0 tw-mt-2 tw-w-56 tw-bg-white tw-rounded-md tw-shadow-lg tw-py-1 tw-z-10">
                  <a href="/aide/faq" className="tw-block tw-px-4 tw-py-2 hover:tw-bg-gray-100 tw-no-underline">
                    FAQ
                  </a>
                  <a href="/aide/contact" className="tw-block tw-px-4 tw-py-2 hover:tw-bg-gray-100 tw-no-underline">
                    Contact
                  </a>
                  <a href="/aide/regles" className="tw-block tw-px-4 tw-py-2 hover:tw-bg-gray-100 tw-no-underline">
                    Règles d'utilisation
                  </a>
                  <a href="/aide/probleme" className="tw-block tw-px-4 tw-py-2 hover:tw-bg-gray-100 tw-no-underline">
                    Signaler un problème
                  </a>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};

export default MainHeader;
