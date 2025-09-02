import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Gauge, Fuel, Settings, Mail, Phone, CheckCircle, XCircle } from 'lucide-react';

const VehicleDetail = () => {
  const { id } = useParams();

  // Données spécifiques pour chaque véhicule avec deux images
  const vehicleData: { [key: string]: any } = {
    '1': {
      id: 1,
      brand: 'Toyota',
      model: 'Camry',
      year: 2023,
      images: [
        'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      mileage: '15,000 km',
      fuel: 'Essence',
      transmission: 'Automatique',
      engine: '2.5L 4-cylindres',
      color: 'Blanc Perle',
      doors: 4,
      seats: 5,
      description: 'Toyota Camry 2023 en excellent état, parfaite pour l\'exportation. Véhicule bien entretenu avec historique complet. Idéal pour les marchés internationaux. Cette berline offre un parfait équilibre entre confort, fiabilité et économie de carburant.',
      specifications: {
        'Moteur': '2.5L 4-cylindres',
        'Puissance': '203 ch',
        'Couple': '247 Nm',
        'Consommation': '7.8L/100km',
        'Réservoir': '60 litres',
        'Poids': '1,590 kg'
      }
    },
    '2': {
      id: 2,
      brand: 'Honda',
      model: 'Civic',
      year: 2022,
      images: [
        'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      mileage: '25,000 km',
      fuel: 'Essence',
      transmission: 'Manuelle',
      engine: '2.0L 4-cylindres',
      color: 'Gris Métallique',
      doors: 4,
      seats: 5,
      description: 'Honda Civic 2022 sportive et économique. Parfaite pour les jeunes conducteurs et l\'exportation vers les marchés émergents. Transmission manuelle pour une conduite engageante et une consommation optimisée.',
      specifications: {
        'Moteur': '2.0L 4-cylindres',
        'Puissance': '158 ch',
        'Couple': '187 Nm',
        'Consommation': '6.9L/100km',
        'Réservoir': '47 litres',
        'Poids': '1,330 kg'
      }
    },
    '3': {
      id: 3,
      brand: 'BMW',
      model: 'X5',
      year: 2023,
      images: [
        'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      mileage: '8,000 km',
      fuel: 'Diesel',
      transmission: 'Automatique',
      engine: '3.0L 6-cylindres Diesel',
      color: 'Noir Saphir',
      doors: 5,
      seats: 7,
      description: 'BMW X5 2023 de luxe avec moteur diesel performant. SUV premium parfait pour l\'exportation vers les marchés haut de gamme. Intérieur cuir, technologie avancée et performances exceptionnelles.',
      specifications: {
        'Moteur': '3.0L 6-cylindres Diesel',
        'Puissance': '265 ch',
        'Couple': '620 Nm',
        'Consommation': '8.2L/100km',
        'Réservoir': '83 litres',
        'Poids': '2,135 kg'
      }
    },
    '4': {
      id: 4,
      brand: 'Mercedes',
      model: 'C-Class',
      year: 2022,
      images: [
        'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      mileage: '20,000 km',
      fuel: 'Essence',
      transmission: 'Automatique',
      engine: '2.0L 4-cylindres Turbo',
      color: 'Argent Iridium',
      doors: 4,
      seats: 5,
      description: 'Mercedes C-Class 2022 élégante et raffinée. Berline de luxe allemande avec finitions premium. Parfaite pour l\'exportation vers les marchés exigeants recherchant le prestige et la qualité Mercedes-Benz.',
      specifications: {
        'Moteur': '2.0L 4-cylindres Turbo',
        'Puissance': '255 ch',
        'Couple': '370 Nm',
        'Consommation': '7.4L/100km',
        'Réservoir': '66 litres',
        'Poids': '1,665 kg'
      }
    },
    '5': {
      id: 5,
      brand: 'Audi',
      model: 'A4',
      year: 2023,
      images: [
        'https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      mileage: '12,000 km',
      fuel: 'Essence',
      transmission: 'Automatique',
      engine: '2.0L TFSI',
      color: 'Bleu Navarra',
      doors: 4,
      seats: 5,
      description: 'Audi A4 2023 avec technologie Quattro. Berline sportive allemande alliant performance et élégance. Design moderne et intérieur technologique. Excellente pour l\'exportation vers les marchés premium.',
      specifications: {
        'Moteur': '2.0L TFSI',
        'Puissance': '190 ch',
        'Couple': '320 Nm',
        'Consommation': '6.8L/100km',
        'Réservoir': '54 litres',
        'Poids': '1,520 kg'
      }
    },
    '6': {
      id: 6,
      brand: 'KIA',
      model: 'Sportage',
      year: 2022,
      images: [
        'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      mileage: '18,000 km',
      fuel: 'Essence',
      transmission: 'Automatique',
      engine: '2.4L 4-cylindres',
      color: 'Rouge Passion',
      doors: 5,
      seats: 5,
      description: 'KIA Sportage 2022 SUV compact moderne avec excellent rapport qualité-prix. Design attractif et garantie étendue. Idéal pour l\'exportation vers les marchés recherchant la fiabilité et l\'économie.',
      specifications: {
        'Moteur': '2.4L 4-cylindres',
        'Puissance': '181 ch',
        'Couple': '237 Nm',
        'Consommation': '8.9L/100km',
        'Réservoir': '62 litres',
        'Poids': '1,695 kg'
      }
    },
    '7': {
      id: 7,
      brand: 'NISSAN',
      model: 'Altima',
      year: 2023,
      images: [
        'https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      mileage: '22,000 km',
      fuel: 'Essence',
      transmission: 'CVT',
      engine: '2.5L 4-cylindres',
      color: 'Blanc Perle',
      doors: 4,
      seats: 5,
      description: 'Nissan Altima 2023 berline familiale spacieuse et confortable. Transmission CVT pour une conduite douce et économique. Parfaite pour l\'exportation vers les marchés familiaux.',
      specifications: {
        'Moteur': '2.5L 4-cylindres',
        'Puissance': '188 ch',
        'Couple': '244 Nm',
        'Consommation': '7.6L/100km',
        'Réservoir': '60 litres',
        'Poids': '1,544 kg'
      }
    },
    '8': {
      id: 8,
      brand: 'SUBARU',
      model: 'Outback',
      year: 2023,
      images: [
        'https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      mileage: '14,000 km',
      fuel: 'Essence',
      transmission: 'CVT',
      engine: '2.5L Boxer',
      color: 'Vert Forêt',
      doors: 5,
      seats: 5,
      description: 'Subaru Outback 2023 avec traction intégrale permanente. Parfait pour les terrains difficiles et les conditions hivernales. Idéal pour l\'exportation vers les régions montagneuses ou aux climats rigoureux.',
      specifications: {
        'Moteur': '2.5L Boxer',
        'Puissance': '182 ch',
        'Couple': '239 Nm',
        'Consommation': '8.1L/100km',
        'Réservoir': '63 litres',
        'Poids': '1,730 kg'
      }
    },
    '9': {
      id: 9,
      brand: 'Hyundai',
      model: 'Elantra',
      year: 2022,
      images: [
        'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      mileage: '28,000 km',
      fuel: 'Essence',
      transmission: 'Automatique',
      engine: '2.0L 4-cylindres',
      color: 'Gris Titanium',
      doors: 4,
      seats: 5,
      description: 'Hyundai Elantra 2022 berline compacte moderne avec design dynamique. Excellente garantie et fiabilité reconnue. Parfaite pour l\'exportation vers les marchés recherchant l\'innovation et la valeur.',
      specifications: {
        'Moteur': '2.0L 4-cylindres',
        'Puissance': '147 ch',
        'Couple': '179 Nm',
        'Consommation': '7.1L/100km',
        'Réservoir': '50 litres',
        'Poids': '1,370 kg'
      }
    },
    '10': {
      id: 10,
      brand: 'LEXUS',
      model: 'RX',
      year: 2023,
      images: [
        'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      mileage: '10,000 km',
      fuel: 'Hybride',
      transmission: 'Automatique',
      engine: '3.5L V6 Hybride',
      color: 'Blanc Nacré',
      doors: 5,
      seats: 5,
      description: 'Lexus RX 2023 SUV hybride de luxe avec finitions exceptionnelles. Technologie hybride avancée pour une consommation réduite. Parfait pour l\'exportation vers les marchés premium recherchant l\'écologie et le luxe.',
      specifications: {
        'Moteur': '3.5L V6 Hybride',
        'Puissance': '308 ch',
        'Couple': '350 Nm',
        'Consommation': '6.2L/100km',
        'Réservoir': '65 litres',
        'Poids': '2,075 kg'
      }
    },
    '11': {
      id: 11,
      brand: 'Mazda',
      model: 'CX-5',
      year: 2022,
      images: [
        'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      mileage: '19,000 km',
      fuel: 'Essence',
      transmission: 'Automatique',
      engine: '2.5L SKYACTIV-G',
      color: 'Rouge Âme',
      doors: 5,
      seats: 5,
      description: 'Mazda CX-5 2022 SUV compact avec technologie SKYACTIV. Design élégant et conduite dynamique. Moteur économique et fiable. Excellent choix pour l\'exportation vers les marchés appréciant le style japonais.',
      specifications: {
        'Moteur': '2.5L SKYACTIV-G',
        'Puissance': '187 ch',
        'Couple': '252 Nm',
        'Consommation': '8.4L/100km',
        'Réservoir': '58 litres',
        'Poids': '1,620 kg'
      }
    }
  };

  const vehicle = vehicleData[id || '1'] || vehicleData['1'];
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
            <div className="grid grid-cols-2 gap-2">
              {vehicle.images.map((image: string, index: number) => (
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
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {vehicle.brand} {vehicle.model}
            </h1>
            <div className="flex items-center text-gray-600 mb-6">
              <Calendar className="w-5 h-5 mr-2" />
              <span className="text-lg">{vehicle.year}</span>
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

            {/* Technical Specifications */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Spécifications Techniques</h3>
              <div className="space-y-3">
                {Object.entries(vehicle.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-2 border-b border-gray-100 last:border-b-0">
                    <span className="font-medium text-gray-700">{key}</span>
                    <span className="text-gray-600">{value}</span>
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