import React from 'react';
import { Award, BookOpen, Building, Globe, Target, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">À propos</h1>
          <p className="text-xl text-gray-300">Découvrez l'histoire et la vision d'ALDI International Trading</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Profile Section */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 bg-gradient-to-br from-blue-600 to-slate-900 p-8 text-white text-center">
              <img 
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop" 
                alt="Aliou DIAGNE"
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-white shadow-lg"
              />
              <h2 className="text-2xl font-bold mb-2">Aliou DIAGNE</h2>
              <p className="text-blue-200 text-lg mb-4">Fondateur et PDG</p>
              <div className="bg-white/10 rounded-lg p-4">
                <p className="text-sm font-semibold">ALDI INTERNATIONAL TRADING</p>
              </div>
            </div>

            <div className="lg:col-span-2 p-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                À propos d'Aliou DIAGNE
              </h3>
              <div className="text-lg text-gray-700 leading-relaxed space-y-4">
                <p>
                  <strong>Aliou DIAGNE</strong> est le fondateur et PDG de <strong>ALDI INTERNATIONAL TRADING</strong>, 
                  une entreprise canadienne dynamique spécialisée dans :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>l'exportation de véhicules,</li>
                  <li>la fourniture de pièces et produits automobiles (huiles moteur haut de gamme),</li>
                  <li>le commerce de fournitures de peinture pour les secteurs résidentiel, commercial et industriel.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Expertise Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Expertise Professionnelle</h3>
            </div>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                Professionnel chevronné, Aliou est <strong>technicien comptable senior</strong>, 
                fort d'une solide expertise en :
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Gestion financière
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Tenue de livres
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Analyse comptable
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center mb-6">
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <BookOpen className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Formation Académique</h3>
            </div>
            <div className="text-gray-700 leading-relaxed">
              <p className="mb-4">
                Il est également titulaire d'une <strong>maîtrise en gestion de projet</strong> 
                de l'Université du Québec à Trois-Rivières (UQTR) au CANADA.
              </p>
              <p>
                Cette formation renforce sa capacité à piloter des opérations complexes 
                avec méthode et efficacité.
              </p>
            </div>
          </div>
        </div>

        {/* Leadership Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <div className="flex items-center mb-6">
            <div className="bg-purple-100 p-3 rounded-full mr-4">
              <Building className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Leadership et Vision</h3>
          </div>
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p>
              Grâce à son sens aigu de la rigueur, de l'organisation et sa vision stratégique, 
              il a su bâtir une entreprise fiable, structurée et résolument tournée vers la performance.
            </p>
          </div>
        </div>

        {/* Vision Section */}
        <div className="bg-gradient-to-r from-blue-600 to-slate-900 rounded-lg shadow-lg text-white p-8">
          <div className="text-center mb-8">
            <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-4">Une vision entrepreneuriale claire</h3>
          </div>
          
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-blue-100 mb-6">
              Sous sa direction, ALDI INTERNATIONAL TRADING s'est développée autour d'un objectif clair :
            </p>
            <div className="bg-white/10 rounded-lg p-6 mb-6">
              <p className="text-2xl font-semibold">
                Offrir des produits de qualité supérieure avec une gestion transparente et efficace.
              </p>
            </div>
            <p className="text-lg text-blue-100">
              Aliou DIAGNE incarne une approche qui marie professionnalisme et esprit entrepreneurial, 
              au service d'un commerce international en pleine croissance.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-blue-600" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Excellence</h4>
            <p className="text-gray-600">
              Engagement envers la qualité supérieure dans tous nos produits et services
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="w-8 h-8 text-green-600" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">International</h4>
            <p className="text-gray-600">
              Vision globale avec une expertise locale pour servir le monde entier
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-purple-600" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Confiance</h4>
            <p className="text-gray-600">
              Relations durables basées sur la transparence et la fiabilité
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;