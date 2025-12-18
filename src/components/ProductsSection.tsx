import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";

const products = [
  {
    id: 1,
    image: product1,
    title: "Figurine Collector - Le Démon des Abysses",
    category: "Figurines",
    price: 89.99,
    originalPrice: 119.99,
  },
  {
    id: 2,
    image: product2,
    title: "Nuits d'Épouvante - Jeu de Plateau",
    category: "Jeux",
    price: 49.99,
  },
  {
    id: 3,
    image: product3,
    title: "Riflesso di un Coltello nella Notte - Blu-ray",
    category: "Films",
    price: 24.99,
  },
];

const ProductsSection = () => {
  return (
    <section id="boutique" className="py-20 md:py-32 bg-background">
      <div className="container px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="font-body text-primary text-sm tracking-[0.2em] uppercase mb-3">
            Notre Sélection
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Produits en Vedette
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Découvrez notre collection exclusive de figurines, jeux et films 
            pour tous les amateurs d'horreur et de fantastique.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              title={product.title}
              category={product.category}
              price={product.price}
              originalPrice={product.originalPrice}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="heroOutline" size="lg">
            Voir toute la boutique
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
