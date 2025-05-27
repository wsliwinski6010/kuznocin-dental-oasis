
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
      description: "Leczenie próchnicy i odbudowa zębów nowoczesnymi materiałami.",
      icon: "fas fa-tooth"
    },
    {
      title: "Endodoncja (leczenie kanałowe)",
      description: "Leczenie kanałowe pod mikroskopem, z wykorzystaniem zaawansowanych narzędzi.",
      icon: "fas fa-microscope"
    },
    {
      title: "Tomografia CBCT",
      description: "Diagnostyka 3D wykonywana na miejscu dla precyzyjnej diagnozy.",
      icon: "fas fa-x-ray"
    },
    {
      title: "RTG punktowe i pantomograficzne",
      description: "Cyfrowe zdjęcia RTG i pantomogramy.",
      icon: "fas fa-camera"
    },
    {
      title: "Biodentyna",
      description: "Nowoczesna, biokompatybilna odbudowa zębów, szczególnie przy głębokich ubytkach.",
      icon: "fas fa-shield-alt"
    },
    {
      title: "Biżuteria nazębna",
      description: "Bezpieczne, ozdobne kryształki na zęby.",
      icon: "fas fa-gem"
    },
    {
      title: "ICON – usuwanie białych plam",
      description: "Nieinwazyjne usuwanie białych plam na szkliwie bez wiercenia.",
      icon: "fas fa-magic"
    },
    {
      title: "EMS Airflow",
      description: "Bezbolesne, szybkie usuwanie osadów, przebarwień i biofilmu bakteryjnego.",
      icon: "fas fa-wind"
    },
    {
      title: "Stomatologia estetyczna",
      description: "Licówki kompozytowe, bonding, flow injection – nowoczesne metody poprawy uśmiechu.",
      icon: "fas fa-smile"
    },
    {
      title: "Protetyka stomatologiczna",
      description: "Korony ceramiczne, mosty, szyny relaksacyjne do leczenia bruksizmu.",
      icon: "fas fa-crown"
    }
  ];

  const advantages = [
    {
      icon: Award,
      title: "Wieloletnie doświadczenie",
      description: "Profesjonalna opieka oparta na latach praktyki"
    },
    {
      icon: Star,
      title: "Nowoczesny sprzęt",
      description: "Najnowsze technologie stomatologiczne"
    },
    {
      icon: Heart,
      title: "Indywidualne podejście",
      description: "Każdy pacjent otrzymuje spersonalizowaną opiekę"
    },
    {
      icon: Shield,
      title: "Bezpieczeństwo pacjenta",
      description: "Najwyższe standardy higieny i bezpieczeństwa"
    }
  ];

  const reviews = [
    {
      name: "Anna Kowalska",
      rating: 5,
      text: "Fantastyczny gabinet! Pani doktor Śliwińska to prawdziwy profesjonalista. Leczenie było bezbolesne, a efekty przewyższyły moje oczekiwania.",
      date: "2024-01-15"
    },
    {
      name: "Marcin Nowak",
      rating: 5,
      text: "Bardzo nowoczesny sprzęt i miła atmosfera. Polecam szczególnie leczenie kanałowe - szybko i bez bólu!",
      date: "2024-01-08"
    },
    {
      name: "Katarzyna Wiśniewska",
      rating: 5,
      text: "Wreszcie znalazłam stomatologa, do którego chodzę z przyjemnością. Profesjonalne podejście i świetne efekty.",
      date: "2023-12-20"
    }
  ];

  const galleryImages = [
    { id: 1, title: "Gabinet główny" },
    { id: 2, title: "Tomograf CBCT" },
    { id: 3, title: "Stanowisko lecznicze" },
    { id: 4, title: "Mikroskop endodontyczny" },
    { id: 5, title: "Sprzęt EMS Airflow" },
    { id: 6, title: "Poczekalnia" }
  ];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '-50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in, .scale-in').forEach((el) => {
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
    }, 4000);
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
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm shadow-lg fixed w-full top-0 z-50">
        <div className="container-max">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <img 
                src="/lovable-uploads/90825bce-0c80-4b06-a440-2df0d0de5c8d.png" 
                alt="Joanna Śliwińska Stomatologia Logo" 
                className="h-12 w-auto logo-bounce"
              />
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'services', 'gallery', 'reviews', 'contact'].map((section) => (
                <button 
                  key={section}
                  onClick={() => scrollToSection(section)} 
                  className={`text-gray-700 hover:text-yellow-600 transition-colors font-medium ${
                    activeSection === section ? 'nav-active' : ''
                  }`}
                >
                  {section === 'home' && 'Strona główna'}
                  {section === 'about' && 'O nas'}
                  {section === 'services' && 'Usługi'}
                  {section === 'gallery' && 'Galeria'}
                  {section === 'reviews' && 'Opinie'}
                  {section === 'contact' && 'Kontakt'}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-yellow-100">
              <div className="py-4 space-y-2">
                {['home', 'about', 'services', 'gallery', 'reviews', 'contact'].map((section) => (
                  <button 
                    key={section}
                    onClick={() => scrollToSection(section)} 
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-yellow-50 hover:text-yellow-600"
                  >
                    {section === 'home' && 'Strona główna'}
                    {section === 'about' && 'O nas'}
                    {section === 'services' && 'Usługi'}
                    {section === 'gallery' && 'Galeria'}
                    {section === 'reviews' && 'Opinie'}
                    {section === 'contact' && 'Kontakt'}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 dental-gradient text-white section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container-max relative z-10">
          <div className="text-center fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif">
              Joanna Śliwińska
            </h1>
            <p className="text-2xl md:text-3xl mb-4 opacity-90 font-serif">
              Stomatologia
            </p>
            <p className="text-xl md:text-2xl mb-4 opacity-80">
              Kuznocin 91E, 96-500 Kuznocin
            </p>
            <p className="text-lg md:text-xl mb-12 opacity-70 max-w-2xl mx-auto">
              Nowoczesny gabinet stomatologiczny w Kuznocinie. 
              Profesjonalna opieka z wykorzystaniem najnowszych technologii.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                className="btn-primary"
                onClick={() => scrollToSection('contact')}
              >
                <Phone className="mr-2 w-5 h-5" />
                Umów wizytę
              </button>
              <button 
                className="btn-secondary"
                onClick={() => scrollToSection('services')}
              >
                Zobacz usługi
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-gradient-to-b from-yellow-50 to-white">
        <div className="container-max">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient font-serif">Kim jesteśmy</h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Gabinet lek. stom. Joanny Śliwińskiej to miejsce, gdzie łączymy wieloletnie doświadczenie 
              z nowoczesnymi technologiami stomatologicznymi. Oferujemy pacjentom komfort, bezpieczeństwo 
              i indywidualne podejście. Naszą misją jest zapewnienie najwyższej jakości opieki stomatologicznej, 
              bo zdrowy uśmiech to podstawa pewności siebie.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <Card key={index} className="text-center card-hover border-0 shadow-lg bg-white scale-in">
                <CardHeader>
                  <div className="w-20 h-20 dental-gradient rounded-full flex items-center justify-center mx-auto mb-4 icon-float">
                    <advantage.icon className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-xl font-serif text-gray-800">{advantage.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
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
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient font-serif">Nasze usługi</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Oferujemy szeroki zakres usług stomatologicznych z wykorzystaniem najnowszych technologii
            </p>
            <p className="text-lg text-yellow-600 mt-4 font-semibold">
              Wszystkie usługi dostępne na raty przez PayU
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="card-hover border-0 shadow-lg bg-gradient-to-br from-white to-yellow-50 scale-in">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 dental-gradient rounded-xl flex items-center justify-center">
                      <i className={`${service.icon} text-white text-2xl`}></i>
                    </div>
                    <CardTitle className="text-lg text-yellow-700 font-serif flex-1">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-700 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="section-padding dental-gradient-dark">
        <div className="container-max">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white font-serif">Galeria</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Poznaj nasz nowoczesny gabinet i zaawansowany sprzęt
            </p>
          </div>
          
          <div className="gallery-slider relative bg-white rounded-3xl p-8 shadow-2xl fade-in">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((item, index) => (
                <div 
                  key={item.id} 
                  className={`bg-gradient-to-br from-yellow-100 to-yellow-200 aspect-video rounded-2xl flex items-center justify-center card-hover transition-opacity duration-500 ${
                    Math.floor(index / 3) === Math.floor(currentSlide / 3) ? 'opacity-100' : 'opacity-50'
                  }`}
                >
                  <div className="text-center">
                    <i className="fas fa-camera text-4xl text-yellow-700 mb-4"></i>
                    <p className="text-yellow-800 font-semibold">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: Math.ceil(galleryImages.length / 3) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index * 3)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    Math.floor(currentSlide / 3) === index ? 'bg-yellow-600' : 'bg-yellow-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="section-padding bg-gradient-to-b from-yellow-50 to-white">
        <div className="container-max">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient font-serif">Opinie pacjentów</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Zobacz, co mówią o nas nasi pacjenci
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="review-card scale-in">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-gray-800 font-serif">{review.name}</h4>
                  <div className="flex space-x-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4 italic">"{review.text}"</p>
                <p className="text-sm text-gray-500">{new Date(review.date).toLocaleDateString('pl-PL')}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient font-serif">Nasz zespół</h2>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="card-hover border-0 shadow-2xl bg-gradient-to-br from-white to-yellow-50 scale-in">
              <CardHeader className="text-center">
                <div className="w-40 h-40 dental-gradient rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
                  <span className="text-white font-bold text-5xl font-serif">JS</span>
                </div>
                <CardTitle className="text-3xl font-serif text-gray-800">lek. stom. Joanna Śliwińska</CardTitle>
                <CardDescription className="text-xl text-yellow-600 font-semibold">
                  Właściciel gabinetu, specjalista stomatologii zachowawczej i endodoncji
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-700 leading-relaxed text-lg">
                  Absolwentka Uniwersytetu Medycznego, stale podnosi kwalifikacje, 
                  korzysta z najnowszych metod i technologii stomatologicznych. 
                  Pasjonatka endodoncji i stomatologii estetycznej.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding dental-gradient">
        <div className="container-max">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white font-serif">Kontakt</h2>
            <p className="text-xl text-white/90">
              Skontaktuj się z nami, aby umówić wizytę
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="card-hover border-0 shadow-xl bg-white/95 backdrop-blur-sm scale-in">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-8 h-8 text-yellow-600" />
                  <CardTitle className="font-serif">Adres</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-lg">Kuznocin 91E</p>
                <p className="text-gray-700 text-lg">96-500 Kuznocin</p>
                <Button variant="link" className="p-0 h-auto text-yellow-600 hover:text-yellow-700 font-semibold">
                  Zobacz na mapie
                </Button>
              </CardContent>
            </Card>

            <Card className="card-hover border-0 shadow-xl bg-white/95 backdrop-blur-sm scale-in">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Phone className="w-8 h-8 text-yellow-600" />
                  <CardTitle className="font-serif">Telefon</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-lg font-semibold">+48 501 654 398</p>
                <div className="flex items-center space-x-3 mt-4">
                  <Mail className="w-6 h-6 text-yellow-600" />
                  <span className="text-gray-700">j.m.sliwinska@wp.pl</span>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover border-0 shadow-xl bg-white/95 backdrop-blur-sm scale-in">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Clock className="w-8 h-8 text-yellow-600" />
                  <CardTitle className="font-serif">Godziny otwarcia</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">Poniedziałek - Piątek:</p>
                <p className="text-gray-700 font-semibold text-lg">12:00 - 20:00</p>
                <p className="text-gray-700 mt-2">Sobota i Niedziela:</p>
                <p className="text-gray-700 font-semibold">zamknięte</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Card className="card-hover border-0 shadow-xl max-w-md mx-auto bg-white/95 backdrop-blur-sm scale-in">
              <CardHeader>
                <CardTitle className="flex items-center justify-center space-x-3 font-serif">
                  <Facebook className="w-8 h-8 text-yellow-600" />
                  <span>Social Media</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white transition-all duration-300">
                  Odwiedź naszą stronę na Facebooku
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-2xl font-semibold mb-6 text-white font-serif">Formy płatności</h3>
            <div className="flex justify-center items-center space-x-8 text-white/90 text-lg">
              <div className="flex items-center space-x-2">
                <i className="fas fa-money-bill-wave text-2xl"></i>
                <span>Gotówka</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-credit-card text-2xl"></i>
                <span>Karta</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-mobile-alt text-2xl"></i>
                <span>BLIK</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-calendar-alt text-2xl"></i>
                <span>Raty PayU</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container-max text-center">
          <img 
            src="/lovable-uploads/90825bce-0c80-4b06-a440-2df0d0de5c8d.png" 
            alt="Joanna Śliwińska Stomatologia Logo" 
            className="h-16 w-auto mx-auto mb-6 opacity-80"
          />
          <p className="text-lg">&copy; 2025 Joanna Śliwińska Stomatologia. Wszelkie prawa zastrzeżone.</p>
          <p className="text-gray-400 mt-2">Wykonane z ❤️ dla zdrowia Twojego uśmiechu</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
