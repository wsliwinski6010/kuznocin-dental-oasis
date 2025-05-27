
import { useState, useEffect } from 'react';

const GallerySection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const galleryImages = [
    { id: 1, title: "Główne stanowisko lecznicze", icon: "fas fa-user-md" },
    { id: 2, title: "Tomograf CBCT najnowszej generacji", icon: "fas fa-cube" },
    { id: 3, title: "Mikroskop endodontyczny", icon: "fas fa-microscope" },
    { id: 4, title: "Stanowisko diagnostyczne", icon: "fas fa-search" },
    { id: 5, title: "System EMS Airflow", icon: "fas fa-wind" },
    { id: 6, title: "Elegancka poczekalnia", icon: "fas fa-couch" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="gallery" className="section-padding bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="container-max">
        <div className="text-center mb-20 fade-in-luxury">
          <h2 className="text-5xl md:text-6xl font-light mb-8 text-white heading-luxury">Nasz gabinet</h2>
          <p className="text-xl text-white/90 max-w-4xl mx-auto text-refined">
            Przestrzeń zaprojektowana z myślą o komforcie i funkcjonalności
          </p>
        </div>
        
        <div className="gallery-luxury rounded-3xl p-12 shadow-2xl fade-in-luxury">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((item, index) => (
              <div 
                key={item.id} 
                className={`bg-gradient-to-br from-yellow-50 to-amber-100 aspect-video rounded-3xl flex flex-col items-center justify-center card-luxury transition-all duration-700 ${
                  Math.floor(index / 3) === Math.floor(currentSlide / 3) ? 'opacity-100 scale-100' : 'opacity-60 scale-95'
                }`}
              >
                <div className="text-center">
                  <div className="w-16 h-16 luxury-gradient rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <i className={`${item.icon} text-white text-2xl`}></i>
                  </div>
                  <p className="text-yellow-800 font-medium text-lg heading-luxury">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-12 space-x-3">
            {Array.from({ length: Math.ceil(galleryImages.length / 3) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index * 3)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  Math.floor(currentSlide / 3) === index ? 'bg-yellow-600 scale-125' : 'bg-yellow-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
