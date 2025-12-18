import { Button } from "@/components/ui/button";
import { Users, MessageCircle, Bell, ArrowRight } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Échanges & Trocs",
    description: "Proposez vos goodies à échanger ou à donner à d'autres passionnés de la communauté.",
  },
  {
    icon: Bell,
    title: "Notifications Intelligentes",
    description: "Recevez des alertes personnalisées quand un article correspondant à vos centres d'intérêt est disponible.",
  },
  {
    icon: MessageCircle,
    title: "Chat Communautaire",
    description: "Discutez avec d'autres fans, partagez vos découvertes et organisez des événements.",
  },
];

const CommunitySection = () => {
  return (
    <section id="communaute" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="font-body text-primary text-sm tracking-[0.2em] uppercase mb-3">
            Rejoignez-nous
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            L'Espace Communautaire
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Un lieu unique pour les passionnés d'horreur. Échangez, découvrez et 
            connectez-vous avec une communauté qui partage votre passion.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 md:p-8 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <feature.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="font-body text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="hero" size="lg">
            Rejoindre la Communauté
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
