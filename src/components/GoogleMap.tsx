
import React from 'react';
import { MapPin, ExternalLink } from 'lucide-react';

const GoogleMap = () => {
  // Adres gabinetu: Kuznocin 91E, 96-500 Kuznocin
  const address = "Kuznocin 91E, 96-500 Kuznocin, Poland";
  const encodedAddress = encodeURIComponent(address);

  return (
    <div className="w-full h-96 bg-gradient-to-br from-light-cream to-cream rounded-lg overflow-hidden relative border border-light-gold shadow-lg">
      {/* Fallback content when API key is not available */}
      <div className="absolute inset-0 flex items-center justify-center bg-white/90 backdrop-blur-sm">
        <div className="text-center p-8">
          <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <MapPin className="w-10 h-10 text-white" />
          </div>
          <h4 className="text-2xl font-bold text-dark-brown mb-4">Nasza lokalizacja</h4>
          <p className="text-lg text-dark-brown mb-6 leading-relaxed font-medium">
            Kuznocin 91E<br />
            96-500 Kuznocin<br />
            Polska
          </p>
          <a 
            href={`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gold text-white rounded-lg hover:bg-deep-gold transition-all duration-300 hover:shadow-lg hover:-translate-y-1 font-medium"
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            Otwórz w Google Maps
          </a>
          
          <div className="mt-6 text-sm text-medium-brown">
            <p>Kliknij powyżej, aby zobaczyć szczegółową mapę i uzyskać wskazówki dojazdu</p>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-4 left-4 w-3 h-3 bg-gold rounded-full opacity-50"></div>
      <div className="absolute top-8 right-6 w-2 h-2 bg-deep-gold rounded-full opacity-30"></div>
      <div className="absolute bottom-6 left-8 w-4 h-4 bg-light-gold rounded-full opacity-40"></div>
      <div className="absolute bottom-4 right-4 w-3 h-3 bg-gold rounded-full opacity-60"></div>
    </div>
  );
};

export default GoogleMap;
