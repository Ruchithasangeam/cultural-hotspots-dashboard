
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-cultural-pattern">
      <div className="absolute inset-0 hero-gradient opacity-90"></div>
      <div className="relative container mx-auto px-4 py-20 md:py-32 z-10">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Discover India's Cultural <span className="text-cultural-gold">Heritage</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/90">
            Explore the rich tapestry of traditional art forms, uncover cultural experiences, and embrace responsible tourism across India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
              <Link to="/artforms">
                Explore Art Forms
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/30">
              <Link to="/destinations">
                Discover Destinations
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroSection;
