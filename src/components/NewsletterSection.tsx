import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Skull } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Bienvenue dans l'épouvante !",
        description: "Vous recevrez bientôt nos dernières actualités.",
      });
      setEmail("");
    }
  };

  return (
    <section className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-noise mix-blend-overlay" />
      </div>

      <div className="container px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
            <Skull className="h-8 w-8 text-primary" />
          </div>

          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Restez informé des<br />
            <span className="text-gradient">dernières terreurs</span>
          </h2>
          <p className="font-body text-muted-foreground mb-8">
            Inscrivez-vous à notre newsletter pour recevoir nos actualités, 
            offres exclusives et les dernières sorties du monde de l'horreur.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Votre adresse email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-background border-border focus:border-primary h-12"
              required
            />
            <Button type="submit" variant="hero" size="lg">
              <Send className="mr-2 h-4 w-4" />
              S'inscrire
            </Button>
          </form>

          <p className="font-body text-xs text-muted-foreground mt-4">
            En vous inscrivant, vous acceptez de recevoir nos communications. 
            Désabonnement possible à tout moment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
