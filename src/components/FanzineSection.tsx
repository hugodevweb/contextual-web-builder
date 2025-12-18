import { Button } from "@/components/ui/button";
import { BookOpen, Download, Star } from "lucide-react";
import fanzineCover from "@/assets/fanzine-cover.jpg";

const FanzineSection = () => {
  return (
    <section id="fanzine" className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <img
                src={fanzineCover}
                alt="Fanzine Horror"
                className="w-full max-w-md mx-auto transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            
            {/* Badge */}
            <div className="absolute -bottom-4 -right-4 lg:right-8 bg-primary text-primary-foreground px-4 py-2 rounded-lg shadow-lg">
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 fill-current" />
                <span className="font-display font-bold">Numéro 42</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="font-body text-primary text-sm tracking-[0.2em] uppercase mb-3">
              Publication Trimestrielle
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
              Le Fanzine<br />
              <span className="text-gradient">de l'Épouvante</span>
            </h2>
            <p className="font-body text-lg text-muted-foreground mb-6">
              Depuis près de 10 ans, notre fanzine explore l'univers de l'horreur, 
              du fantastique et de l'heroic fantasy. Analyses, interviews exclusives, 
              critiques et découvertes inédites vous attendent chaque trimestre.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                "4 numéros par an, papier ou numérique",
                "Accès à tous les anciens numéros digitalisés",
                "Liseuse intégrée dans votre espace membre",
                "Contenu exclusif et avant-premières",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="font-body text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg">
                <BookOpen className="mr-2 h-5 w-5" />
                S'abonner - 29,99€/an
              </Button>
              <Button variant="heroOutline" size="lg">
                <Download className="mr-2 h-5 w-5" />
                Extrait gratuit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FanzineSection;
