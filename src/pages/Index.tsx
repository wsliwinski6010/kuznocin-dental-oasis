
import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Menu, X, Star, Shield, Heart, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      title: "Stomatologia zachowawcza",
      description: "Leczenie próchnicy i odbudowa zębów nowoczesnymi materiałami."
    },
    {
      title: "Endodoncja (leczenie kanałowe)",
      description: "Leczenie kanałowe pod mikroskopem, z wykorzystaniem zaawansowanych narzędzi (X-Smart Pro, Dentsply, Sirona)."
    },
    {
      title: "Tomografia CBCT",
      description: "Diagnostyka 3D wykonywana na miejscu dla precyzyjnej diagnozy."
    },
    {
      title: "RTG punktowe i pantomograficzne",
      description: "Cyfrowe zdjęcia RTG i pantomogramy."
    },
    {
      title: "Biodentyna",
      description: "Nowoczesna, biokompatybilna odbudowa zębów, szczególnie przy głębokich ubytkach."
    },
    {
      title: "Biżuteria nazębna",
      description: "Bezpieczne, ozdobne kryształki na zęby."
    },
    {
      title: "ICON – usuwanie białych plam",
      description: "Nieinwazyjne usuwanie białych plam na szkliwie bez wiercenia."
    },
    {
      title: "EMS Airflow",
      description: "Bezbolesne, szybkie usuwanie osadów, przebarwień i biofilmu bakteryjnego – natychmiastowy efekt bielszego uśmiechu."
    },
    {
      title: "Stomatologia estetyczna",
      description: "Licówki kompozytowe, bonding, flow injection – nowoczesne metody poprawy uśmiechu."
    },
    {
      title: "Protetyka stomatologiczna",
      description: "Korony ceramiczne, mosty, szyny relaksacyjne do leczenia bruksizmu."
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
      <nav className="bg-white shadow-md fixed w-full top-0 z-50">
        <div className="container-max">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 medical-gradient rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">JS</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Dr Joanna Śliwińska</h1>
                <p className="text-sm text-gray-600">Stomatologia</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 transition-colors">Strona główna</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 transition-colors">O nas</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600 transition-colors">Usługi</button>
              <button onClick={() => scrollToSection('team')} className="text-gray-700 hover:text-blue-600 transition-colors">Zespół</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 transition-colors">Kontakt</button>
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
            <div className="md:hidden bg-white border-t">
              <div className="py-4 space-y-2">
                <button onClick={() => scrollToSection('home')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">Strona główna</button>
                <button onClick={() => scrollToSection('about')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">O nas</button>
                <button onClick={() => scrollToSection('services')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">Usługi</button>
                <button onClick={() => scrollToSection('team')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">Zespół</button>
                <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">Kontakt</button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 medical-gradient text-white section-padding">
        <div className="container-max">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Stomatologia<br />
              lek. stom. Joanna Śliwińska
            </h1>
            <p className="text-xl md:text-2xl mb-4 opacity-90">
              Kuznocin 91E, 96-500 Kuznocin
            </p>
            <p className="text-lg md:text-xl mb-8 opacity-80">
              Nowoczesny gabinet stomatologiczny w Kuznocinie
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100"
                onClick={() => scrollToSection('contact')}
              >
                <Phone className="mr-2 w-5 h-5" />
                Umów wizytę
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-blue-600"
                onClick={() => scrollToSection('services')}
              >
                Zobacz usługi
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">Kim jesteśmy</h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Gabinet lek. stom. Joanny Śliwińskiej to miejsce, gdzie łączymy wieloletnie doświadczenie 
              z nowoczesnymi technologiami stomatologicznymi. Oferujemy pacjentom komfort, bezpieczeństwo 
              i indywidualne podejście. Naszą misją jest zapewnienie najwyższej jakości opieki stomatologicznej, 
              bo zdrowy uśmiech to podstawa pewności siebie.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <Card key={index} className="text-center card-hover border-0 shadow-md">
                <CardHeader>
                  <div className="w-16 h-16 medical-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <advantage.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{advantage.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {advantage.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">Nasze usługi</h2>
            <p className="text-lg text-gray-700">
              Oferujemy szeroki zakres usług stomatologicznych z wykorzystaniem najnowszych technologii
            </p>
            <p className="text-sm text-blue-600 mt-4 font-medium">
              Wszystkie usługi dostępne na raty przez PayU
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="card-hover border-0 shadow-md">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-600">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-700">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">Galeria</h2>
            <p className="text-lg text-gray-700">
              Poznaj nasz nowoczesny gabinet i zaawansowany sprzęt
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-gray-200 aspect-video rounded-lg flex items-center justify-center card-hover">
                <span className="text-gray-500 text-lg">Zdjęcie gabinetu {item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">Nasz zespół</h2>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="card-hover border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="w-32 h-32 medical-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-4xl">JS</span>
                </div>
                <CardTitle className="text-2xl">lek. stom. Joanna Śliwińska</CardTitle>
                <CardDescription className="text-lg text-blue-600">
                  Właściciel gabinetu, specjalista stomatologii zachowawczej i endodoncji
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-700 leading-relaxed">
                  Absolwentka Uniwersytetu Medycznego, stale podnosi kwalifikacje, 
                  korzysta z najnowszych metod i technologii stomatologicznych.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">Kontakt</h2>
            <p className="text-lg text-gray-700">
              Skontaktuj się z nami, aby umówić wizytę
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="card-hover border-0 shadow-md">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-6 h-6 text-blue-600" />
                  <CardTitle>Adres</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">Kuznocin 91E</p>
                <p className="text-gray-700">96-500 Kuznocin</p>
                <Button variant="link" className="p-0 h-auto text-blue-600">
                  Zobacz na mapie
                </Button>
              </CardContent>
            </Card>

            <Card className="card-hover border-0 shadow-md">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Phone className="w-6 h-6 text-blue-600" />
                  <CardTitle>Telefon</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">+48 501 654 398</p>
                <div className="flex items-center space-x-3 mt-4">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">j.m.sliwinska@wp.pl</span>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover border-0 shadow-md">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Clock className="w-6 h-6 text-blue-600" />
                  <CardTitle>Godziny otwarcia</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">Poniedziałek - Piątek:</p>
                <p className="text-gray-700 font-medium">12:00 - 20:00</p>
                <p className="text-gray-700 mt-2">Sobota i Niedziela:</p>
                <p className="text-gray-700 font-medium">zamknięte</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Card className="card-hover border-0 shadow-md max-w-md mx-auto">
              <CardHeader>
                <CardTitle className="flex items-center justify-center space-x-3">
                  <Facebook className="w-6 h-6 text-blue-600" />
                  <span>Social Media</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  Odwiedź naszą stronę na Facebooku
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <h3 className="text-xl font-semibold mb-4">Formy płatności</h3>
            <p className="text-gray-700">Gotówka • Karta • BLIK • Raty przez PayU</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container-max text-center">
          <p>&copy; 2025 Joanna Śliwińska Stomatologia. Wszelkie prawa zastrzeżone.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
