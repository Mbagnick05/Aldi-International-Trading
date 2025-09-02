import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Calendar, DollarSign, Car } from 'lucide-react';

const Vehicles = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  // Mock data - sera remplacé par les données Laravel
  const vehicles = [
    {
      id: 1,
      brand: 'Toyota',
      model: 'Camry',
      year: 2023,
      price: 28500,
      image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=400',
      mileage: '15,000 km',
      fuel: 'Essence',
      transmission: 'Automatique'
    },
    {
      id: 2,
      brand: 'Honda',
      model: 'Civic',
      year: 2022,
      price: 24000,
      image: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=400',
      mileage: '25,000 km',
      fuel: 'Essence',
      transmission: 'Manuelle'
    },
    {
      id: 3,
      brand: 'BMW',
      model: 'X5',
      year: 2023,
      price: 65000,
      image: 'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=400',
      mileage: '8,000 km',
      fuel: 'Diesel',
      transmission: 'Automatique'
    },
    {
      id: 4,
      brand: 'Mercedes',
      model: 'C-Class',
      year: 2022,
      price: 45000,
      image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=400',
      mileage: '20,000 km',
      fuel: 'Essence',
      transmission: 'Automatique'
    },
    {
      id: 5,
      brand: 'Audi',
      model: 'A4',
      year: 2023,
      price: 42000,
      image: 'https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=400',
      mileage: '12,000 km',
      fuel: 'Essence',
      transmission: 'Automatique'
    },
    {
      id: 6,
      brand: 'KIA',
      model: 'Sportage',
      year: 2022,
      price: 32000,
      image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=400',
      mileage: '18,000 km',
      fuel: 'Essence',
      transmission: 'Automatique'
    },
    {
      id: 7,
      brand: 'NISSAN',
      model: 'Altima',
      year: 2023,
      price: 26500,
      image: 'https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=400',
      mileage: '22,000 km',
      fuel: 'Essence',
      transmission: 'CVT'
    },
    {
      id: 8,
      brand: 'SUBARU',
      model: 'Outback',
      year: 2023,
      price: 35000,
      image: 'https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg?auto=compress&cs=tinysrgb&w=400',
      mileage: '14,000 km',
      fuel: 'Essence',
      transmission: 'CVT'
    },
    {
      id: 9,
      brand: 'Hyundai',
      model: 'Elantra',
      year: 2022,
      price: 23500,
      image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=400',
      mileage: '28,000 km',
      fuel: 'Essence',
      transmission: 'Automatique'
    },
    {
      id: 10,
      brand: 'LEXUS',
      model: 'RX',
      year: 2023,
      price: 58000,
      image: 'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=400',
      mileage: '10,000 km',
      fuel: 'Hybride',
      transmission: 'Automatique'
    },
    {
      id: 11,
      brand: 'Mazda',
      model: 'CX-5',
      year: 2022,
      price: 29500,
      image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=400',
      mileage: '19,000 km',
      fuel: 'Essence',
      transmission: 'Automatique'
    }
  ];

  const brands = [...new Set(vehicles.map(v => v.brand))];

  const filteredVehicles = vehicles.filter(vehicle => {
    const matchesSearch = vehicle.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         vehicle.model.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBrand = !selectedBrand || vehicle.brand === selectedBrand;

    return matchesSearch && matchesBrand;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Catalogue de Véhicules</h1>
          <p className="text-xl text-gray-300">Découvrez notre sélection de véhicules pour l'exportation</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Rechercher..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
            >
              <option value="">Toutes les marques</option>
              {brands.map(brand => (
                <option key={brand} value={brand}>{brand}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-gray-600">
            {filteredVehicles.length} véhicule(s) trouvé(s)
          </p>
        </div>

        {/* Vehicle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVehicles.map(vehicle => (
            <div key={vehicle.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img 
                src={vehicle.image} 
                alt={`${vehicle.brand} ${vehicle.model}`}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {vehicle.brand} {vehicle.model}
                </h3>
                <div className="flex items-center text-gray-600 mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{vehicle.year}</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 mb-4">
                  <div>Kilométrage: {vehicle.mileage}</div>
                  <div>Carburant: {vehicle.fuel}</div>
                  <div className="col-span-2">Transmission: {vehicle.transmission}</div>
                </div>
                <Link 
                  to={`/vehicles/${vehicle.id}`}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-300 text-center block"
                >
                  Voir les détails
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredVehicles.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Car className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">Aucun véhicule trouvé</h3>
            <p className="text-gray-500">Essayez de modifier vos critères de recherche</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Vehicles;