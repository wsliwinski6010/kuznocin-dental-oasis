
interface HeroSectionProps {
  onServicesClick: () => void;
}

const HeroSection = ({ onServicesClick }: HeroSectionProps) => {
  return (
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
              onClick={onServicesClick}
            >
              Poznaj nasze usługi
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
