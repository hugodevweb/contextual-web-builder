import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="La Petite Maison de l'Épouvante"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 pt-20">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-body text-primary text-sm md:text-base tracking-[0.3em] uppercase mb-4 animate-fade-up opacity-0" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
            Le lieu de rêve pour frissonner
          </p>
          
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-up opacity-0" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
            <span className="text-foreground">La Petite Maison</span>
            <br />
            <span className="text-gradient">de l'Épouvante</span>
          </h1>
          
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-8 animate-fade-up opacity-0" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
            Plongez dans l'univers de l'horreur avec notre boutique exclusive, 
            notre fanzine culte et notre communauté de passionnés.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up opacity-0" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
            <Button variant="hero" size="xl">
              Explorer la Boutique
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="heroOutline" size="xl">
              <Play className="mr-2 h-5 w-5" />
              Découvrir Evil Ed
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
