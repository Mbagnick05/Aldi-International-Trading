import React from 'react';
import { Car, Mail, Phone, MapPin, MessageCircle, Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img src="/Logoo.png" alt="ALDI Logo" className="w-8 h-8" />
              <span className="font-bold text-xl">ALDI International Trading</span>
            </div>
            <p className="text-gray-300 mb-4">
              Votre partenaire de confiance pour l'exportation de véhicules et la fourniture 
              de produits automobiles et de peinture de qualité supérieure.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://wa.me/15817775787" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-green-400 transition-colors p-2 rounded-full hover:bg-green-400/10"
                title="WhatsApp"
              >
                <MessageCircle className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-colors p-2 rounded-full hover:bg-blue-400/10"
                title="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-500 transition-colors p-2 rounded-full hover:bg-blue-500/10"
                title="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="/vehicles" className="text-gray-300 hover:text-blue-400 transition-colors">Exportation Véhicules</a></li>
              <li><a href="/supplies" className="text-gray-300 hover:text-blue-400 transition-colors">Huiles Moteur Haut de Gamme</a></li>
              <li><a href="/supplies" className="text-gray-300 hover:text-blue-400 transition-colors">Peinture et Filtres</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">Consultation</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300">diagnealiou787@aldiinternational.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300">+1 (581) 777-5787</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-blue-400 mt-1" />
                <span className="text-gray-300">1930 avenue des Martyrs<br />Québec, Canada</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2025 ALDI International Trading. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;