
import { Phone, Mail, MapPin, Clock, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ContactSection = () => {
  return (
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
  );
};

export default ContactSection;
