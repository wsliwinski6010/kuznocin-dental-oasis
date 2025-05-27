
import { Star, Shield, Heart, Award } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const AboutSection = () => {
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

  return (
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
  );
};

export default AboutSection;
