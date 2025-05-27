
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const TeamSection = () => {
  return (
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
  );
};

export default TeamSection;
