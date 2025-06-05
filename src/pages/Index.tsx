import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, Menu, X, Star, Shield, Heart, Award, ChevronDown, Camera, Monitor, Wrench, Gem, Sparkles, Wind, Crown, Smile } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import GoogleMap from '@/components/GoogleMap';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollY, setScrollY] = useState(0);
  
  const services = [{
    title: "Stomatologia zachowawcza",
    description: "Precyzyjne leczenie próchnicy i odbudowa zębów materiałami najwyższej jakości.",
    icon: Heart
  }, {
    title: "Endodoncja (leczenie kanałowe)",
    description: "Precyzyjne leczenie kanałowe w powiększeniu z użyciem zaawansowanych narzędzi pomiarowych X-Smart Pro, Dentsply, Sirona.",
    icon: Wrench
  }, {
    title: "Tomografia CBCT 3D",
    description: "Najnowocześniejsza diagnostyka trójwymiarowa wykonywana w gabinecie.",
    icon: Camera
  }, {
    title: "Radiologia cyfrowa",
    description: "Precyzyjne zdjęcia RTG i pantomogramy w technologii cyfrowej.",
    icon: Monitor
  }, {
    title: "Biodentyna",
    description: "Innowacyjna, biokompatybilna odbudowa przy głębokich ubytkach próchnicowych.",
    icon: Shield
  }, {
    title: "Biżuteria nazębna",
    description: "Ekskluzywne kryształki i ozdoby dentystyczne najwyższej jakości.",
    icon: Gem
  }, {
    title: "ICON - usuwanie białych plam",
    description: "Infiltracja żywicą: nowoczesna metoda nieinwazyjnego usuwania białych plam na szkliwie bez wiercenia.",
    icon: Sparkles
  }, {
    title: "EMS Airflow",
    description: "Rewolucja w higienie jamy ustnej! AIRFLOW® PROPHYLAXIS MASTER - bezbolesne i szybkie usunięcie osadów, przebarwień i biofilmu bakteryjnego. Natychmiastowy efekt bielszego uśmiechu!",
    icon: Wind
  }, {
    title: "Stomatologia estetyczna",
    description: "Nowoczesne licówki kompozytowe w technologii flow injection oraz bonding - precyzyjna, przewidywalna i minimalnie inwazyjna poprawa uśmiechu.",
    icon: Smile
  }, {
    title: "Protetyka stomatologiczna",
    description: "Korony ceramiczne, mosty protetyczne oraz indywidualne szyny relaksacyjne do leczenia bruksizmu.",
    icon: Crown
  }];
  const advantages = [{
    icon: Award,
    title: "Wieloletnia ekspertyza",
    description: "Dekady doświadczenia w najwyższej jakości opiece stomatologicznej"
  }, {
    icon: Star,
    title: "Technologia premium",
    description: "Najnowocześniejszy sprzęt i materiały światowej klasy"
  }, {
    icon: Heart,
    title: "Indywidualna opieka",
    description: "Holistyczne podejście dostosowane do unikalnych potrzeb"
  }, {
    icon: Shield,
    title: "Najwyższe standardy",
    description: "Bezwzględne przestrzeganie protokołów bezpieczeństwa"
  }];
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '-100px 0px'
    };
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);
    document.querySelectorAll('section[id]').forEach(section => {
      observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };
  
  return <div className="min-h-screen bg-cream">
      {/* Navigation */}
      <nav className={`fixed w-full top-0 z-50 transition-all duration-500 ${scrollY > 50 ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <img src="/lovable-uploads/90825bce-0c80-4b06-a440-2df0d0de5c8d.png" alt="Joanna Śliwińska Stomatologia" className="h-12 w-auto" />
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {['home', 'about', 'services', 'gallery', 'contact'].map(section => <button key={section} onClick={() => scrollToSection(section)} className={`nav-link ${activeSection === section ? 'active' : ''}`}>
                  {section === 'home' && 'Strona główna'}
                  {section === 'about' && 'O praktyce'}
                  {section === 'services' && 'Usługi'}
                  {section === 'gallery' && 'Gabinet'}
                  {section === 'contact' && 'Kontakt'}
                </button>)}
            </div>

            {/* Mobile menu button */}
            <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && <div className="lg:hidden bg-white/95 backdrop-blur-lg border-t">
              <div className="py-6 space-y-4">
                {['home', 'about', 'services', 'gallery', 'contact'].map(section => <button key={section} onClick={() => scrollToSection(section)} className="block w-full text-left px-6 py-3 text-dark-brown hover:bg-gold/10">
                    {section === 'home' && 'Strona główna'}
                    {section === 'about' && 'O praktyce'}
                    {section === 'services' && 'Usługi'}
                    {section === 'gallery' && 'Gabinet'}
                    {section === 'contact' && 'Kontakt'}
                  </button>)}
              </div>
            </div>}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cream to-light-gold opacity-90"></div>
        
        {/* AI-generated dental illustration - positioned as decorative element */}
        <div className="absolute top-1/4 right-8 hidden lg:block opacity-20 animate-pulse">
          <img 
            src="/lovable-uploads/04e7ef58-c209-46fb-9b40-0380d9dc3331.png" 
            alt="Dental care illustration" 
            className="w-64 h-64 object-cover rounded-full shadow-2xl"
          />
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="hero-title mb-6">
            Joanna Śliwińska
          </h1>
          <p className="hero-subtitle mb-8">
            Stomatologia
          </p>
          <p className="hero-description mb-12">Stomatologia blisko Ciebie, komfort i indywidualne leczenie dla każdego.</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button onClick={() => scrollToSection('contact')} className="btn-primary">
              Umów wizytę
            </button>
            <button onClick={() => scrollToSection('services')} className="btn-secondary">
              Nasze usługi
            </button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-gold" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">O naszej praktyce</h2>
            <p className="section-description max-w-3xl mx-auto">Nasz gabinet to miejsce łączące doświadczenie, technologię i indywidualne podejście do pacjenta. Oferujemy komfort i nowoczesne metody leczenia w przyjaznej atmosferze.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => <Card key={index} className="advantage-card">
                <CardHeader className="text-center">
                  <div className="advantage-icon">
                    <advantage.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="advantage-title">{advantage.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="advantage-description">
                    {advantage.description}
                  </CardDescription>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-light-cream">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">Nasze usługi</h2>
            <p className="section-description">
              Oferujemy kompleksowe usługi stomatologiczne z wykorzystaniem najnowocześniejszych technologii
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => <div key={index} className="service-card">
                <div className="service-icon-container">
                  <div className="w-16 h-16 bg-gold rounded-2xl flex items-center justify-center mb-4">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">Nasz gabinet</h2>
            <p className="section-description">
              Nowoczesne wnętrza i profesjonalne wyposażenie dla Twojego komfortu
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="gallery-item">
              <img 
                src="/lovable-uploads/14e27ad7-5a91-46ba-ae94-0664ff017ff9.png" 
                alt="pic1" 
                className="gallery-image"
              />
            </div>
            <div className="gallery-item">
              <img 
                src="/lovable-uploads/81cdac06-e857-4ea0-9e96-47f16247dd77.png" 
                alt="pic2" 
                className="gallery-image"
              />
            </div>
            <div className="gallery-item">
              <img 
                src="/lovable-uploads/1cf466a3-82ef-4cab-82e1-edc133d21429.png" 
                alt="pic3" 
                className="gallery-image"
              />
            </div>
            <div className="gallery-item">
              <img 
                src="/lovable-uploads/c9bf53cd-29cf-43fe-9084-8c536ba1137c.png" 
                alt="pic4" 
                className="gallery-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-title mb-16">Doktor</h2>
          
          <Card className="team-card">
            <CardHeader>
              <div className="team-avatar">
                <span>JS</span>
              </div>
              <CardTitle className="team-name">lek. stom. Joanna Śliwińska</CardTitle>
              <CardDescription className="team-specialty">Właściciel gabinetu, specjalista stomatologii zachowawczej i endodoncji</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="team-bio">
                Absolwentka Uniwersytetu Medycznego, z wieloletnim stażem specjalizuje się w stomatologii zachowawczej i endodoncji. Regularnie uczestniczy w szkoleniach i konferencjach naukowych, aby zapewnić pacjentom najwyższą jakość leczenia z wykorzystaniem najnowocześniejszych metod i technologii.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-dark-brown text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title text-white">Kontakt</h2>
            <p className="section-description text-cream">
              Zapraszamy do kontaktu w celu uzyskania informacji i umówienia wizyty
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="contact-card">
              <CardHeader>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Kuznocin+91E,+96-500+Kuznocin,+Poland"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-icon hover:bg-deep-gold transition-colors duration-300"
                >
                  <MapPin className="w-6 h-6" />
                </a>
                <CardTitle>Lokalizacja</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Kuznocin 91E</p>
                <p>96-500 Kuznocin</p>
              </CardContent>
            </Card>

            <Card className="contact-card">
              <CardHeader>
                <div className="contact-icon">
                  <Phone className="w-6 h-6" />
                </div>
                <CardTitle>Telefon</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold">+48 501 654 398</p>
              </CardContent>
            </Card>

            <Card className="contact-card">
              <CardHeader>
                <div className="contact-icon">
                  <Mail className="w-6 h-6" />
                </div>
                <CardTitle>Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold">j.m.sliwinska@wp.pl</p>
              </CardContent>
            </Card>
          </div>

          {/* Godziny przyjęć */}
          <div className="mb-12">
            <Card className="contact-card max-w-md mx-auto">
              <CardHeader>
                <div className="contact-icon">
                  <Clock className="w-6 h-6" />
                </div>
                <CardTitle>Godziny przyjęć</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Poniedziałek - Piątek:</p>
                <p className="font-semibold">12:00 - 20:00</p>
                <p className="mt-2">Weekend: zamknięte</p>
              </CardContent>
            </Card>
          </div>

          {/* Google Map Section */}
          <div className="mb-12">
            <GoogleMap />
          </div>

          <div className="text-center">
            <h3 className="text-xl font-medium mb-6 text-gold">Metody płatności</h3>
            <div className="flex justify-center items-center space-x-8 text-cream">
              <span>Gotówka</span>
              <span>Karta</span>
              <span>BLIK</span>
              <span>Raty PayU</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-6xl mx-auto text-center px-6">
          <img src="/lovable-uploads/90825bce-0c80-4b06-a440-2df0d0de5c8d.png" alt="Joanna Śliwińska Stomatologia" className="h-16 w-auto mx-auto mb-6 opacity-80" />
          <p>© 2025 Stomatologia lek. stom. Joanna Śliwińska . Wszelkie prawa zastrzeżone.</p>
          <p className="text-gray-400 mt-2">Stworzone z pasją dla zdrowia Twojego uśmiechu</p>
        </div>
      </footer>
    </div>;
};
export default Index;
