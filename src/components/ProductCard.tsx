import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  image: string;
  title: string;
  category: string;
  price: number;
  originalPrice?: number;
}

const ProductCard = ({ image, title, category, price, originalPrice }: ProductCardProps) => {
  return (
    <div className="group relative bg-card rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
      {/* Image */}
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {originalPrice && (
          <div className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-medium px-2 py-1 rounded">
            Promo
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
          {category}
        </p>
        <h3 className="font-display text-lg font-semibold text-foreground mb-2 line-clamp-2">
          {title}
        </h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-display text-xl font-bold text-primary">
              {price.toFixed(2)}€
            </span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                {originalPrice.toFixed(2)}€
              </span>
            )}
          </div>
          <Button variant="ghost" size="icon" className="hover:bg-primary hover:text-primary-foreground">
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
