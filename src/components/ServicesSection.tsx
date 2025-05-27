
const ServicesSection = () => {
  const services = [
    {
      title: "Stomatologia zachowawcza",
      description: "Precyzyjne leczenie próchnicy i odbudowa zębów materiałami najwyższej jakości.",
      icon: "fas fa-tooth",
      color: "from-amber-50 to-amber-100"
    },
    {
      title: "Endodoncja mikroskopowa",
      description: "Zaawansowane leczenie kanałowe pod kontrolą mikroskopu endodontycznego.",
      icon: "fas fa-microscope",
      color: "from-yellow-50 to-yellow-100"
    },
    {
      title: "Tomografia CBCT 3D",
      description: "Najnowocześniejsza diagnostyka trójwymiarowa wykonywana w gabinecie.",
      icon: "fas fa-cube",
      color: "from-amber-50 to-orange-100"
    },
    {
      title: "Radiologia cyfrowa",
      description: "Precyzyjne zdjęcia RTG i pantomogramy w technologii cyfrowej.",
      icon: "fas fa-camera",
      color: "from-yellow-50 to-amber-100"
    },
    {
      title: "Biodentyna",
      description: "Innowacyjna, biokompatybilna odbudowa przy głębokich ubytkach próchnicowych.",
      icon: "fas fa-shield-alt",
      color: "from-green-50 to-emerald-100"
    },
    {
      title: "Biżuteria nazębna",
      description: "Ekskluzywne kryształki i ozdoby dentystyczne najwyższej jakości.",
      icon: "fas fa-gem",
      color: "from-purple-50 to-pink-100"
    },
    {
      title: "ICON - technologia infiltracji",
      description: "Rewolucyjna metoda usuwania białych plam bez tradycyjnego wiercenia.",
      icon: "fas fa-magic",
      color: "from-blue-50 to-cyan-100"
    },
    {
      title: "EMS Airflow",
      description: "Bezbolesne, ultra-nowoczesne usuwanie osadów i przebarwień.",
      icon: "fas fa-wind",
      color: "from-sky-50 to-blue-100"
    },
    {
      title: "Stomatologia estetyczna",
      description: "Artystyczne licówki kompozytowe i zaawansowane techniki bonding.",
      icon: "fas fa-palette",
      color: "from-rose-50 to-pink-100"
    },
    {
      title: "Protetyka ekskluzywna",
      description: "Ceramiczne korony, mosty i szyny relaksacyjne premium.",
      icon: "fas fa-crown",
      color: "from-amber-50 to-yellow-100"
    }
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-20 fade-in-luxury">
          <h2 className="text-5xl md:text-6xl font-light mb-8 text-luxury-gradient heading-luxury">Spektrum usług</h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto text-refined">
            Oferujemy kompleksowe usługi stomatologiczne z wykorzystaniem najnowocześniejszych technologii
          </p>
          <p className="text-lg text-yellow-600 mt-6 font-medium heading-luxury">
            Wszystkie zabiegi dostępne w systemie płatności ratalnych PayU
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div key={index} className="service-card scale-in-luxury">
              <div className="flex items-start space-x-6 mb-6">
                <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center shadow-md`}>
                  <i className={`${service.icon} text-gray-700 text-2xl`}></i>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl text-yellow-700 heading-luxury font-medium mb-3">{service.title}</h3>
                  <p className="text-gray-700 text-base leading-relaxed text-refined">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
