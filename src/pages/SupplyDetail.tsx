import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Package, Mail, Phone, CheckCircle, XCircle } from 'lucide-react';

const SupplyDetail = () => {
  const { id } = useParams();

  // Données spécifiques pour chaque produit avec deux images
  const supplyData: { [key: string]: any } = {
    '1': {
      id: 1,
      name: 'Huile Moteur Synthétique Mobil 1',
      category: 'Huiles Moteur Haut de Gamme',
      images: [
        'https://images.pexels.com/photos/4489702/pexels-photo-4489702.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/4489701/pexels-photo-4489701.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      brand: 'Mobil 1',
      description: 'Huile moteur synthétique haute performance Mobil 1, conçue pour les véhicules modernes. Offre une protection exceptionnelle du moteur dans toutes les conditions de conduite. Formule avancée qui maintient la propreté du moteur et prolonge sa durée de vie.',
      inStock: true,
      specifications: {
        'Viscosité': '5W-30',
        'Type': 'Synthétique complète',
        'Volume': '5 litres',
        'Certification': 'API SN, ILSAC GF-5',
        'Température d\'utilisation': '-40°C à +150°C',
        'Durée de vie': '15,000 km',
        'Origine': 'États-Unis',
        'Conditionnement': 'Bidon plastique'
      },
      features: [
        'Protection avancée contre l\'usure',
        'Excellente fluidité à froid',
        'Résistance à l\'oxydation',
        'Économie de carburant',
        'Compatible avec tous moteurs essence',
        'Formule longue durée',
        'Réduit les dépôts moteur',
        'Améliore les performances'
      ]
    },
    '2': {
      id: 2,
      name: 'Peinture Professionnelle Sherwin-Williams',
      category: 'Peinture',
      images: [
        'https://images.pexels.com/photos/1153895/pexels-photo-1153895.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1145434/pexels-photo-1145434.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      brand: 'Sherwin-Williams',
      description: 'Peinture acrylique professionnelle Sherwin-Williams de qualité supérieure. Idéale pour tous types de projets : résidentiel, commercial et industriel. Excellente couvrance et durabilité exceptionnelle.',
      inStock: true,
      specifications: {
        'Type': 'Acrylique latex',
        'Finition': 'Satin',
        'Volume': '3.78 litres',
        'Couvrance': '35-40 m²',
        'Temps de séchage': '2-4 heures',
        'Dilution': 'À l\'eau',
        'Origine': 'États-Unis',
        'Garantie': '15 ans'
      },
      features: [
        'Excellente adhérence',
        'Résistant aux intempéries',
        'Facile à nettoyer',
        'Faible odeur',
        'Séchage rapide',
        'Résistant aux UV',
        'Application facile',
        'Longue durabilité'
      ]
    },
    '3': {
      id: 3,
      name: 'Filtre Automobile K&N Performance',
      category: 'Filtre',
      images: [
        'https://images.pexels.com/photos/4489701/pexels-photo-4489701.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/4489702/pexels-photo-4489702.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      brand: 'K&N',
      description: 'Filtre à air haute performance K&N réutilisable. Améliore les performances du moteur tout en offrant une protection supérieure. Filtre lavable et réutilisable, économique et écologique.',
      inStock: true,
      specifications: {
        'Type': 'Filtre à air performance',
        'Matériau': 'Coton huilé',
        'Efficacité': '99%',
        'Débit d\'air': '+50% vs filtre papier',
        'Durée de vie': '1,600,000 km',
        'Nettoyage': 'Tous les 80,000 km',
        'Origine': 'États-Unis',
        'Garantie': 'À vie'
      },
      features: [
        'Réutilisable et lavable',
        'Améliore les performances',
        'Augmente la puissance',
        'Réduit la consommation',
        'Protection supérieure',
        'Installation facile',
        'Économique à long terme',
        'Respectueux de l\'environnement'
      ]
    }
  };

  const supply = supplyData[id || '1'] || supplyData['1'];
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link 
          to="/supplies" 
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6 font-semibold"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Retour au catalogue
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Images */}
          <div>
            <div className="mb-4">
              <img 
                src={supply.images[selectedImage]} 
                alt={supply.name}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              {supply.images.map((image: string, index: number) => (
                <img
                  key={index}
                  src={image}
                  alt={`${supply.name} ${index + 1}`}
                  className={`w-full h-24 object-cover rounded cursor-pointer transition-all duration-300 ${
                    selectedImage === index ? 'ring-2 ring-blue-500' : 'hover:opacity-75'
                  }`}
                  onClick={() => setSelectedImage(index)}
                />
              ))}
            </div>
          </div>

          {/* Details */}
          <div>
            <div className="flex items-center mb-4">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold mr-3">
                {supply.category}
              </span>
              <span className="text-gray-600">{supply.brand}</span>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {supply.name}
            </h1>

            <div className="flex items-center mb-6">
              {supply.inStock ? (
                <div className="flex items-center text-green-600">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="font-semibold">En stock</span>
                </div>
              ) : (
                <div className="flex items-center text-red-600">
                  <XCircle className="w-5 h-5 mr-2" />
                  <span className="font-semibold">Rupture de stock</span>
                </div>
              )}
            </div>

            {/* Description */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Description</h3>
              <p className="text-gray-600 leading-relaxed">{supply.description}</p>
            </div>

            {/* Specifications */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Spécifications Techniques</h3>
              <div className="space-y-3">
                {Object.entries(supply.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-2 border-b border-gray-100 last:border-b-0">
                    <span className="font-medium text-gray-700">{key}</span>
                    <span className="text-gray-600">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Caractéristiques</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {supply.features.map((feature: string, index: number) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact CTA */}
            <div className="bg-blue-600 text-white rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Intéressé par ce produit ?</h3>
              <p className="mb-4">Contactez-nous pour obtenir un devis personnalisé ou pour passer commande.</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link 
                  to="/contact" 
                  className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors duration-300 text-center flex items-center justify-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Demander un devis
                </Link>
                <a 
                  href="tel:+15817775787" 
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-lg font-semibold transition-colors duration-300 text-center flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Appeler maintenant
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupplyDetail;