import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Car, Package, Users, TrendingUp, DollarSign, Eye, Plus, LogOut } from 'lucide-react';

const AdminDashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Vérification de l'authentification - sera remplacé par Laravel
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin');
  };

  // Mock data - sera remplacé par les données Laravel
  const stats = {
    totalVehicles: 24,
    totalSupplies: 156,
    totalInquiries: 12,
    monthlyRevenue: 125000
  };

  const recentActivities = [
    { id: 1, type: 'vehicle', action: 'Nouveau véhicule ajouté', item: 'Toyota Camry 2023', time: '2 heures' },
    { id: 2, type: 'inquiry', action: 'Nouvelle demande', item: 'Export vers Maroc', time: '4 heures' },
    { id: 3, type: 'supply', action: 'Stock mis à jour', item: 'Huile Mobil 1', time: '6 heures' },
    { id: 4, type: 'vehicle', action: 'Véhicule vendu', item: 'BMW X5 2022', time: '1 jour' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold text-gray-900">Tableau de Bord Administrateur</h1>
            <div className="flex items-center space-x-4">
              <Link 
                to="/" 
                className="text-gray-600 hover:text-gray-900 flex items-center"
              >
                <Eye className="w-5 h-5 mr-2" />
                Voir le site
              </Link>
              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center transition-colors"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Déconnexion
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Véhicules</p>
                <p className="text-3xl font-bold text-gray-900">{stats.totalVehicles}</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <Car className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <div className="mt-4">
              <Link 
                to="/admin/vehicles" 
                className="text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                Gérer les véhicules →
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Fournitures</p>
                <p className="text-3xl font-bold text-gray-900">{stats.totalSupplies}</p>
              </div>
              <div className="bg-green-100 p-3 rounded-full">
                <Package className="w-6 h-6 text-green-600" />
              </div>
            </div>
            <div className="mt-4">
              <Link 
                to="/admin/supplies" 
                className="text-green-600 hover:text-green-700 text-sm font-medium"
              >
                Gérer les fournitures →
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Demandes</p>
                <p className="text-3xl font-bold text-gray-900">{stats.totalInquiries}</p>
              </div>
              <div className="bg-orange-100 p-3 rounded-full">
                <Users className="w-6 h-6 text-orange-600" />
              </div>
            </div>
            <div className="mt-4">
              <span className="text-orange-600 text-sm font-medium">
                Nouvelles demandes
              </span>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Revenus (mois)</p>
                <p className="text-3xl font-bold text-gray-900">{stats.monthlyRevenue.toLocaleString()}$</p>
              </div>
              <div className="bg-purple-100 p-3 rounded-full">
                <DollarSign className="w-6 h-6 text-purple-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
              <span className="text-green-600 text-sm font-medium">+12% ce mois</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Actions Rapides</h2>
              <div className="space-y-4">
                <Link 
                  to="/admin/vehicles" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center"
                >
                  <Plus className="w-5 h-5 mr-2" />
                  Ajouter un véhicule
                </Link>
                <Link 
                  to="/admin/supplies" 
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center"
                >
                  <Plus className="w-5 h-5 mr-2" />
                  Ajouter une fourniture
                </Link>
                <Link 
                  to="/contact" 
                  className="w-full bg-gray-600 hover:bg-gray-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center"
                >
                  <Eye className="w-5 h-5 mr-2" />
                  Voir les demandes
                </Link>
              </div>
            </div>
          </div>

          {/* Recent Activities */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Activités Récentes</h2>
              <div className="space-y-4">
                {recentActivities.map(activity => (
                  <div key={activity.id} className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <div className={`p-2 rounded-full mr-4 ${
                      activity.type === 'vehicle' ? 'bg-blue-100' :
                      activity.type === 'supply' ? 'bg-green-100' : 'bg-orange-100'
                    }`}>
                      {activity.type === 'vehicle' ? (
                        <Car className={`w-5 h-5 ${
                          activity.type === 'vehicle' ? 'text-blue-600' :
                          activity.type === 'supply' ? 'text-green-600' : 'text-orange-600'
                        }`} />
                      ) : activity.type === 'supply' ? (
                        <Package className="w-5 h-5 text-green-600" />
                      ) : (
                        <Users className="w-5 h-5 text-orange-600" />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900">{activity.action}</p>
                      <p className="text-gray-600 text-sm">{activity.item}</p>
                    </div>
                    <span className="text-gray-500 text-sm">Il y a {activity.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;