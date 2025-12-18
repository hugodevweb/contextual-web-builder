import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import FanzineSection from "@/components/FanzineSection";
import CommunitySection from "@/components/CommunitySection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ProductsSection />
        <FanzineSection />
        <CommunitySection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
