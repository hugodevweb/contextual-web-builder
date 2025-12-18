import { Facebook, Twitter, Instagram, Youtube, MapPin, Mail, Phone } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  const shopLinks = [
    { name: "Figurines", href: "#" },
    { name: "Jeux de société", href: "#" },
    { name: "Films Blu-ray", href: "#" },
    { name: "Bandes dessinées", href: "#" },
    { name: "Goodies", href: "#" },
  ];

  const companyLinks = [
    { name: "À propos", href: "#" },
    { name: "Le Festival", href: "#" },
    { name: "Evil Ed Productions", href: "#" },
    { name: "Nos magasins", href: "#" },
    { name: "Contact", href: "#" },
  ];

  const stores = [
    "Paris",
    "Lyon",
    "Aix-en-Provence",
    "Angoulême",
    "Londres",
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-display text-xl font-bold text-foreground mb-4">
              La Petite Maison<br />
              <span className="text-primary">de l'Épouvante</span>
            </h3>
            <p className="font-body text-sm text-muted-foreground mb-6">
              Le lieu de rêve pour frissonner. Votre destination pour l'horreur, 
              le fantastique et l'heroic fantasy depuis plus de 10 ans.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Boutique */}
          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">
              Boutique
            </h4>
            <ul className="space-y-2">
              {shopLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Entreprise */}
          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">
              Entreprise
            </h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">
              Nos Magasins
            </h4>
            <ul className="space-y-2 mb-6">
              {stores.map((store) => (
                <li key={store} className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="font-body text-sm text-muted-foreground">
                    {store}
                  </span>
                </li>
              ))}
            </ul>
            <div className="space-y-2">
              <a
                href="mailto:contact@petitemaisonepouvante.com"
                className="flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                <Mail className="h-4 w-4 text-primary" />
                contact@petitemaisonepouvante.com
              </a>
              <a
                href="tel:+33123456789"
                className="flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                <Phone className="h-4 w-4 text-primary" />
                +33 1 23 45 67 89
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-sm text-muted-foreground">
            © 2025 La Petite Maison de l'Épouvante. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <a href="#" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
              Mentions légales
            </a>
            <a href="#" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
              CGV
            </a>
            <a href="#" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
              RGPD
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
