
import React from 'react';

const GoogleMap = () => {
  // Adres gabinetu: Kuznocin 91E, 96-500 Kuznocin
  const address = "Kuznocin 91E, 96-500 Kuznocin, Poland";
  const encodedAddress = encodeURIComponent(address);

  return (
    <div className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden">
      <iframe
        src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodedAddress}&zoom=15`}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Lokalizacja gabinetu stomatologicznego"
        className="w-full h-full"
      />
      
      {/* Fallback content when API key is not available */}
      <div className="absolute inset-0 bg-gold/10 flex items-center justify-center">
        <div className="text-center p-6">
          <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h4 className="text-lg font-medium text-dark-brown mb-2">Nasza lokalizacja</h4>
          <p className="text-medium-brown mb-4">Kuznocin 91E<br />96-500 Kuznocin</p>
          <a 
            href={`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-gold text-white rounded-lg hover:bg-deep-gold transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Otwórz w Google Maps
          </a>
        </div>
      </div>
    </div>
  );
};

export default GoogleMap;
