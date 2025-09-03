import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, User, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construire le message WhatsApp
    const phoneNumber = '15817775787'; // +1 581-777-5787
    
    // Créer le type de demande en français basé sur la sélection
    let typeDemandeText = '';
    switch(formData.subject) {
      case 'vehicle-export':
        typeDemandeText = 'Demande d\'exportation de véhicules';
        break;
      case 'paint-supplies':
        typeDemandeText = 'Demande de fournitures de peinture';
        break;
      case 'quote':
        typeDemandeText = 'Demande de devis';
        break;
      case 'other':
        typeDemandeText = 'Autre demande';
        break;
      default:
        typeDemandeText = 'Contact depuis le site ALDI International Trading';
    }
    
    // Construire le message WhatsApp
    const message = encodeURIComponent(
      `🔹 *ALDI International Trading* 🔹\n\n` +
      `Bonjour ! Voici les détails de ma demande :\n\n` +
      `👤 *Nom :* ${formData.name}\n` +
      `📧 *Email :* ${formData.email}\n` +
      `📞 *Téléphone :* ${formData.phone || 'Non renseigné'}\n` +
      `📋 *Type de demande :* ${typeDemandeText}\n\n` +
      `💬 *Message :*\n${formData.message}\n\n` +
      `Merci pour votre attention !\n` +
      `Cordialement, ${formData.name}`
    );
    
    // Ouvrir WhatsApp avec le message pré-rempli
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
    
    // Réinitialiser le formulaire après envoi
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    
    // Message de confirmation
    alert('Redirection vers WhatsApp en cours... Votre message est prêt à être envoyé !');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contactez-nous</h1>
          <p className="text-xl text-gray-300">Nous sommes là pour répondre à toutes vos questions</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Informations de Contact</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">contact@aldiinternationaltrading.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Téléphone</h3>
                    <p className="text-gray-600">+1 (581) 777-5787</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Adresse</h3>
                    <p className="text-gray-600">
                      1930 avenue des Martyrs<br />
                      Québec, Canada
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <Clock className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Heures d'ouverture</h3>
                    <div className="text-gray-600">
                      <p>Lun - Ven: 8h00 - 18h00</p>
                      <p>Sam: 9h00 - 16h00</p>
                      <p>Dim: Fermé</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Owner Photo */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <img 
                    src="/Aliou.png" 
                    alt="Propriétaire ALDI International Trading"
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h4 className="font-semibold text-gray-900">Aliou Diagne</h4>
                  <p className="text-gray-600">Directeur Général</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Envoyez-nous un message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nom complet *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Votre nom complet"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="votre@email.com"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Téléphone
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="+1 (581) 777-5787"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Sujet *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={formData.subject}
                      onChange={handleChange}
                    >
                      <option value="">Sélectionnez un sujet</option>
                      <option value="vehicle-export">Exportation de véhicules</option>
                      <option value="paint-supplies">Fournitures de peinture</option>
                      <option value="quote">Demande de devis</option>
                      <option value="other">Autre</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-4 text-gray-400 w-5 h-5" />
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="Décrivez votre demande en détail..."
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Envoyer via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Notre Localisation</h2>
            <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-600">
                <MapPin className="w-16 h-16 mx-auto mb-4" />
                <p className="text-lg font-semibold">1930 avenue des Martyrs</p>
                <p>Québec, Canada</p>
                <p className="text-sm mt-2">Carte interactive sera intégrée ici</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ); 
};

export default Contact;