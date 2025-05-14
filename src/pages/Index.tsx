
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ArtFormsSection from '@/components/ArtFormsSection';
import MapSection from '@/components/MapSection';
import TourismTrendsSection from '@/components/TourismTrendsSection';
import CulturalExperienceSection from '@/components/CulturalExperienceSection';
import NewsletterSection from '@/components/NewsletterSection';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ArtFormsSection />
        <MapSection />
        <TourismTrendsSection />
        <CulturalExperienceSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
