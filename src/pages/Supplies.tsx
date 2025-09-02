import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Package, Wrench, Palette } from 'lucide-react';

const Supplies = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  // Mock data - sera remplacé par les données Laravel
  const supplies = [
    {
      id: 1,
      name: 'Huile Moteur Synthétique',
      category: 'Huiles Moteur Haut de Gamme',
      image: '/src/assets/huile3.jpg',
      brand: '5W-20  5W-30  5W-40  OW-20',
      description: 'Huiles moteur synthétiques de qualité professionnelle pour tous types de véhicules',
      inStock: true
    },
    {
      id: 2,
      name: 'peinture haut de gamme',
      category: 'Peinture',
      price: 89.99,
      image: '/src/assets/peinture1.jpg',
      brand: 'Boomerang',
      description: 'Peinture acrylique professionnelle pour usage résidentiel, commercial et industriel',
      inStock: true
    },
    {
      id: 3,
      name: 'Filtre',
      category: 'Filtre',
      price: 24.99,
      image: '/src/assets/filtre1.jpg',
      brand: 'Filtre Automobile',
      description: 'Filtres automobiles haute performance pour tous types de véhicules',
      inStock: true
    }
  ];

  const categories = [...new Set(supplies.map(s => s.category))];

  const filteredSupplies = supplies.filter(supply => {
    const matchesSearch = supply.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         supply.brand.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || supply.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Huiles Moteur Haut de Gamme':
        return <Wrench className="w-6 h-6" />;
      case 'Peinture':
        return <Palette className="w-6 h-6" />;
      case 'Filtre':
        return <Package className="w-6 h-6" />;
      default:
        return <Package className="w-6 h-6" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Huiles Moteur Haut de Gamme':
        return 'bg-green-100 text-green-800';
      case 'Peinture':
        return 'bg-purple-100 text-purple-800';
      case 'Filtre':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Catalogue de Fournitures</h1>
          <p className="text-xl text-gray-300">Fournitures automobiles et de peinture de qualité professionnelle</p>
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
                placeholder="Rechercher un produit..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">Toutes les catégories</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-gray-600">
            {filteredSupplies.length} produit(s) trouvé(s)
          </p>
        </div>

        {/* Supplies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSupplies.map(supply => (
            <div key={supply.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img 
                  src={supply.image} 
                  alt={supply.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(supply.category)}`}>
                    {supply.category}
                  </span>
                </div>
                {!supply.inStock && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Rupture de stock
                    </span>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-2">
                  {getCategoryIcon(supply.category)}
                  <span className="ml-2 text-sm text-gray-500">{supply.brand}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {supply.name}
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm">
                  {supply.description}
                </p>
                
                <Link 
                  to={`/supplies/${supply.id}`}
                  className={`w-full block text-center px-4 py-2 rounded-lg font-semibold transition-colors duration-300 ${
                    supply.inStock 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  Voir détails
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredSupplies.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Package className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">Aucun produit trouvé</h3>
            <p className="text-gray-500">Essayez de modifier vos critères de recherche</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Supplies;