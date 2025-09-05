import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Wrench, Palette, Truck, Award, Globe, Mail } from 'lucide-react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/60 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(/accueil.jpg)"
          }}
        ></div>
        
        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            ALDI International Trading
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Votre partenaire de confiance pour l'exportation de véhicules et fournitures automobiles
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/vehicles" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Voir nos véhicules
            </Link>
            <Link 
              to="/contact" 
              className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                À propos d'ALDI International Trading
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Spécialisés dans l'exportation de véhicules et la distribution de fournitures 
                automobiles et de peinture, nous servons une clientèle internationale exigeante 
                depuis notre base au Canada.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Truck className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Export International</h4>
                    <p className="text-gray-600">Livraison mondiale</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Award className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Qualité Premium</h4>
                    <p className="text-gray-600">Produits certifiés</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="/grandAliou.jpg" 
                alt="ALDI International Trading" 
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une gamme complète de solutions pour vos besoins automobiles et industriels
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Car className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Exportation de Véhicules</h3>
              <p className="text-gray-600 mb-6">
                Large sélection de véhicules neufs et d'occasion pour l'exportation internationale. 
                Toutes marques et modèles disponibles.
              </p>
              <Link 
                to="/vehicles" 
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
              >
                Voir le catalogue
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Wrench className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Fournitures Automobiles</h3>
              <p className="text-gray-600 mb-6">
                Huiles moteur haut de gamme de qualité professionnelle pour tous types de véhicules.
              </p>
              <Link 
                to="/supplies" 
                className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold"
              >
                Nos produits
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Palette className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Peinture et Filtres</h3>
              <p className="text-gray-600 mb-6">
                Fournitures de peinture pour projets résidentiels, commerciaux et industriels, 
                ainsi que filtres automobiles de haute qualité.
              </p>
              <Link 
                to="/supplies" 
                className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold"
              >
                Découvrir
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section 
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">500+</div>
              <div className="text-gray-300">Véhicules exportés</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">50+</div>
              <div className="text-gray-300">Pays desservis</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">1000+</div>
              <div className="text-gray-300">Clients satisfaits</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">15+</div>
              <div className="text-gray-300">Années d'expérience</div>
            </div>
          </div>
        </div>
      </section>*/}

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Prêt à démarrer votre projet ?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour discuter de vos besoins en exportation 
            de véhicules ou en fournitures automobiles.
          </p>
          <Link 
            to="/contact" 
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center"
          >
            <Mail className="w-5 h-5 mr-2" />
            Nous contacter
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;