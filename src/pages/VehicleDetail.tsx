import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Gauge, Fuel, Settings, DollarSign, Mail, Phone } from 'lucide-react';

const VehicleDetail = () => {
  const { id } = useParams();

  // Mock data - sera remplacé par les données Laravel
  const vehicle = {
    id: 1,
    brand: 'Toyota',
    model: 'Camry',
    year: 2023,
    price: 28500,
    images: [
      'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    mileage: '15,000 km',
    fuel: 'Essence',
    transmission: 'Automatique',
    engine: '2.5L 4-cylindres',
    color: 'Blanc Perle',
    doors: 4,
    seats: 5,
    description: 'Toyota Camry 2023 en excellent état, parfaite pour l\'exportation. Véhicule bien entretenu avec historique complet. Idéal pour les marchés internationaux.',
    features: [
      'Climatisation automatique',
      'Système de navigation GPS',
      'Caméra de recul',
      'Sièges chauffants',
      'Bluetooth et USB',
      'Système de sécurité avancé',
      'Jantes en alliage',
      'Vitres électriques'
    ]
  };

  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link 
          to="/vehicles" 
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
                src={vehicle.images[selectedImage]} 
                alt={`${vehicle.brand} ${vehicle.model}`}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="grid grid-cols-3 gap-2">
              {vehicle.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${vehicle.brand} ${vehicle.model} ${index + 1}`}
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
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              {vehicle.brand} {vehicle.model}
            </h1>
            <div className="flex items-center text-gray-600 mb-6">
              <Calendar className="w-5 h-5 mr-2" />
              <span className="text-lg">{vehicle.year}</span>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
              <div className="flex items-center justify-center">
                <DollarSign className="w-8 h-8 text-blue-600 mr-2" />
                <span className="text-4xl font-bold text-blue-600">
                  {vehicle.price.toLocaleString()}$
                </span>
              </div>
              <p className="text-center text-gray-600 mt-2">Prix d'exportation</p>
            </div>

            {/* Specifications */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Spécifications</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <Gauge className="w-5 h-5 text-gray-400 mr-3" />
                  <div>
                    <div className="text-sm text-gray-500">Kilométrage</div>
                    <div className="font-semibold">{vehicle.mileage}</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Fuel className="w-5 h-5 text-gray-400 mr-3" />
                  <div>
                    <div className="text-sm text-gray-500">Carburant</div>
                    <div className="font-semibold">{vehicle.fuel}</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Settings className="w-5 h-5 text-gray-400 mr-3" />
                  <div>
                    <div className="text-sm text-gray-500">Transmission</div>
                    <div className="font-semibold">{vehicle.transmission}</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-gray-400 rounded-full mr-3"></div>
                  <div>
                    <div className="text-sm text-gray-500">Couleur</div>
                    <div className="font-semibold">{vehicle.color}</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{vehicle.doors}</div>
                    <div className="text-sm text-gray-500">Portes</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{vehicle.seats}</div>
                    <div className="text-sm text-gray-500">Places</div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">{vehicle.engine}</div>
                    <div className="text-sm text-gray-500">Moteur</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Description</h3>
              <p className="text-gray-600 leading-relaxed">{vehicle.description}</p>
            </div>

            {/* Features */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Équipements</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {vehicle.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact CTA */}
            <div className="bg-blue-600 text-white rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Intéressé par ce véhicule ?</h3>
              <p className="mb-4">Contactez-nous pour plus d'informations ou pour organiser une inspection.</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link 
                  to="/contact" 
                  className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors duration-300 text-center flex items-center justify-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Envoyer un message
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

export default VehicleDetail;