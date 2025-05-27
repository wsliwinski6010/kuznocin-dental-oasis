
import { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Menu, X, Star, Shield, Heart, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

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

  const advantages = [
    {
      icon: Award,
      title: "Wieloletnia ekspertyza",
      description: "Dekady doświadczenia w najwyższej jakości opiece stomatologicznej",
      gradient: "from-amber-400 to-yellow-500"
    },
    {
      icon: Star,
      title: "Technologia premium",
      description: "Najnowocześniejszy sprzęt i materiały światowej klasy",
      gradient: "from-yellow-400 to-amber-500"
    },
    {
      icon: Heart,
      title: "Indywidualna opieka",
      description: "Holistyczne podejście dostosowane do unikalnych potrzeb",
      gradient: "from-rose-400 to-pink-500"
    },
    {
      icon: Shield,
      title: "Najwyższe standardy",
      description: "Bezwzględne przestrzeganie protokołów bezpieczeństwa",
      gradient: "from-green-400 to-emerald-500"
    }
  ];

  const galleryImages = [
    { id: 1, title: "Główne stanowisko lecznicze", icon: "fas fa-user-md" },
    { id: 2, title: "Tomograf CBCT najnowszej generacji", icon: "fas fa-cube" },
    { id: 3, title: "Mikroskop endodontyczny", icon: "fas fa-microscope" },
    { id: 4, title: "Stanowisko diagnostyczne", icon: "fas fa-search" },
    { id: 5, title: "System EMS Airflow", icon: "fas fa-wind" },
    { id: 6, title: "Elegancka poczekalnia", icon: "fas fa-couch" }
  ];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '-80px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in-luxury, .scale-in-luxury').forEach((el) => {
      observer.observe(el);
    });

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Elegant Navigation */}
      <nav className="bg-white/95 backdrop-blur-md shadow-sm fixed w-full top-0 z-50 border-b border-yellow-100">
        <div className="container-max">
          <div className="flex justify-between items-center py-5">
            <div className="flex items-center space-x-6">
              <img 
                src="/lovable-uploads/90825bce-0c80-4b06-a440-2df0d0de5c8d.png" 
                alt="Joanna Śliwińska Stomatologia Logo" 
                className="h-14 w-auto logo-elegant"
              />
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-12">
              {['home', 'about', 'services', 'gallery', 'contact'].map((section) => (
                <button 
                  key={section}
                  onClick={() => scrollToSection(section)} 
                  className={`text-gray-700 hover:text-yellow-700 transition-all duration-300 font-medium text-lg ${
                    activeSection === section ? 'nav-active' : ''
                  }`}
                >
                  {section === 'home' && 'Strona główna'}
                  {section === 'about' && 'O praktyce'}
                  {section === 'services' && 'Usługi'}
                  {section === 'gallery' && 'Gabinet'}
                  {section === 'contact' && 'Kontakt'}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-yellow-100">
              <div className="py-6 space-y-4">
                {['home', 'about', 'services', 'gallery', 'contact'].map((section) => (
                  <button 
                    key={section}
                    onClick={() => scrollToSection(section)} 
                    className="block w-full text-left px-6 py-3 text-gray-700 hover:bg-yellow-50 hover:text-yellow-700 text-lg font-medium"
                  >
                    {section === 'home' && 'Strona główna'}
                    {section === 'about' && 'O praktyce'}
                    {section === 'services' && 'Usługi'}
                    {section === 'gallery' && 'Gabinet'}
                    {section === 'contact' && 'Kontakt'}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 luxury-gradient text-white section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-black/10"></div>
        <div className="container-max relative z-10">
          <div className="text-center fade-in-luxury">
            <h1 className="text-6xl md:text-8xl font-light mb-8 heading-luxury">
              Joanna Śliwińska
            </h1>
            <p className="text-3xl md:text-4xl mb-6 opacity-95 heading-luxury font-light">
              Stomatologia
            </p>
            <p className="text-xl md:text-2xl mb-6 opacity-85 font-light">
              Kuznocin 91E • 96-500 Kuznocin
            </p>
            <p className="text-lg md:text-xl mb-16 opacity-75 max-w-3xl mx-auto text-refined leading-relaxed">
              Ekskluzywny gabinet stomatologiczny łączący wieloletnie doświadczenie 
              z najnowocześniejszymi technologiami medycznymi. Indywidualna opieka na najwyższym poziomie.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <button 
                className="btn-luxury-outline"
                onClick={() => scrollToSection('services')}
              >
                Poznaj nasze usługi
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding luxury-gradient-subtle">
        <div className="container-max">
          <div className="text-center mb-20 fade-in-luxury">
            <h2 className="text-5xl md:text-6xl font-light mb-8 text-luxury-gradient heading-luxury">O naszej praktyce</h2>
            <p className="text-xl text-gray-700 max-w-5xl mx-auto leading-relaxed text-refined">
              Nasza praktyka stomatologiczna to przestrzeń, gdzie łączymy artyzm z nauką, 
              tradycję z innowacją. Każdy zabieg wykonujemy z najwyższą precyzją, 
              wykorzystując materiały i technologie światowej klasy. Nasza filozofia opiera się 
              na holistycznym podejściu do zdrowia jamy ustnej i budowaniu długotrwałych relacji z pacjentami.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {advantages.map((advantage, index) => (
              <Card key={index} className="text-center card-luxury border-0 shadow-lg bg-white scale-in-luxury">
                <CardHeader>
                  <div className={`w-24 h-24 bg-gradient-to-br ${advantage.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 icon-breathe shadow-lg`}>
                    <advantage.icon className="w-12 h-12 text-white" />
                  </div>
                  <CardTitle className="text-2xl heading-luxury text-gray-800 font-medium">{advantage.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-lg leading-relaxed text-refined">
                    {advantage.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
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

      {/* Gallery Section */}
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

      {/* Team Section */}
      <section className="section-padding luxury-gradient-subtle">
        <div className="container-max">
          <div className="text-center mb-20 fade-in-luxury">
            <h2 className="text-5xl md:text-6xl font-light mb-8 text-luxury-gradient heading-luxury">Doktor</h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="card-luxury border-0 shadow-2xl bg-white scale-in-luxury">
              <CardHeader className="text-center">
                <div className="w-48 h-48 luxury-gradient rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
                  <span className="text-white font-light text-6xl heading-luxury">JS</span>
                </div>
                <CardTitle className="text-4xl heading-luxury text-gray-800 font-light">lek. stom. Joanna Śliwińska</CardTitle>
                <CardDescription className="text-2xl text-yellow-600 font-medium heading-luxury mt-4">
                  Specjalista stomatologii zachowawczej i endodoncji
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-700 leading-relaxed text-xl text-refined">
                  Absolwentka Uniwersytetu Medycznego z wieloletnim doświadczeniem klinicznym. 
                  Specjalizuje się w endodoncji mikroskopowej i stomatologii estetycznej. 
                  Członek prestiżowych towarzystw naukowych, regularnie uczestniczy w międzynarodowych 
                  kursach i konferencjach, aby zapewnić pacjentom najwyższy standard opieki.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding luxury-gradient">
        <div className="container-max">
          <div className="text-center mb-20 fade-in-luxury">
            <h2 className="text-5xl md:text-6xl font-light mb-8 text-white heading-luxury">Kontakt</h2>
            <p className="text-xl text-white/90 text-refined">
              Zapraszamy do kontaktu w celu uzyskania informacji
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <Card className="card-luxury border-0 shadow-xl bg-white/95 backdrop-blur-sm scale-in-luxury">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <MapPin className="w-10 h-10 text-yellow-600" />
                  <CardTitle className="heading-luxury text-2xl font-medium">Lokalizacja</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-xl text-refined">Kuznocin 91E</p>
                <p className="text-gray-700 text-xl text-refined">96-500 Kuznocin</p>
                <Button variant="link" className="p-0 h-auto text-yellow-600 hover:text-yellow-700 font-medium text-lg mt-3">
                  Lokalizacja na mapie
                </Button>
              </CardContent>
            </Card>

            <Card className="card-luxury border-0 shadow-xl bg-white/95 backdrop-blur-sm scale-in-luxury">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Phone className="w-10 h-10 text-yellow-600" />
                  <CardTitle className="heading-luxury text-2xl font-medium">Telefon</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-xl font-semibold text-refined">+48 501 654 398</p>
                <div className="flex items-center space-x-4 mt-6">
                  <Mail className="w-8 h-8 text-yellow-600" />
                  <span className="text-gray-700 text-lg text-refined">j.m.sliwinska@wp.pl</span>
                </div>
              </CardContent>
            </Card>

            <Card className="card-luxury border-0 shadow-xl bg-white/95 backdrop-blur-sm scale-in-luxury">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Clock className="w-10 h-10 text-yellow-600" />
                  <CardTitle className="heading-luxury text-2xl font-medium">Godziny przyjęć</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-lg text-refined">Poniedziałek - Piątek:</p>
                <p className="text-gray-700 font-semibold text-xl text-refined">12:00 - 20:00</p>
                <p className="text-gray-700 mt-4 text-lg text-refined">Sobota i Niedziela:</p>
                <p className="text-gray-700 font-semibold text-refined">zamknięte</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <Card className="card-luxury border-0 shadow-xl max-w-lg mx-auto bg-white/95 backdrop-blur-sm scale-in-luxury">
              <CardHeader>
                <CardTitle className="flex items-center justify-center space-x-4 heading-luxury text-2xl font-medium">
                  <Facebook className="w-10 h-10 text-yellow-600" />
                  <span>Media społecznościowe</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white transition-all duration-500 text-lg py-3">
                  Znajdź nas na Facebooku
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-3xl font-medium mb-8 text-white heading-luxury">Metody płatności</h3>
            <div className="flex justify-center items-center space-x-12 text-white/95 text-xl">
              <div className="flex items-center space-x-3">
                <i className="fas fa-money-bill-wave text-3xl"></i>
                <span className="text-refined">Gotówka</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-credit-card text-3xl"></i>
                <span className="text-refined">Karta</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-mobile-alt text-3xl"></i>
                <span className="text-refined">BLIK</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-calendar-alt text-3xl"></i>
                <span className="text-refined">Raty PayU</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container-max text-center">
          <img 
            src="/lovable-uploads/90825bce-0c80-4b06-a440-2df0d0de5c8d.png" 
            alt="Joanna Śliwińska Stomatologia Logo" 
            className="h-20 w-auto mx-auto mb-8 opacity-80 logo-elegant"
          />
          <p className="text-xl text-refined">&copy; 2025 Joanna Śliwińska Stomatologia. Wszelkie prawa zastrzeżone.</p>
          <p className="text-gray-400 mt-4 text-lg text-refined">Stworzone z pasją dla zdrowia Twojego uśmiechu</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
