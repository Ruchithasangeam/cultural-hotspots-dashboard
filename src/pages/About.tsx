
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="bg-primary text-white py-12 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">About Bharatiya Kala</h1>
            <p className="max-w-2xl mx-auto text-lg text-white/90">
              Connecting cultural heritage with responsible tourism across India.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg mb-6">
                  Bharatiya Kala is dedicated to showcasing India's rich cultural tapestry while promoting responsible tourism that preserves our heritage for future generations.
                </p>
                <p className="mb-6">
                  We believe that by connecting travelers with authentic cultural experiences, we can create meaningful exchanges that benefit both visitors and local communities. Our data-driven approach helps identify opportunities for sustainable cultural tourism across India.
                </p>
                <p>
                  Through our platform, we aim to highlight lesser-known art forms and cultural destinations, ensuring that the full diversity of India's heritage receives the recognition and support it deserves.
                </p>
              </div>
              <div className="bg-muted rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1587925358603-c2eea5305bbc?w=800&auto=format&fit=crop" 
                  alt="Traditional Indian dancers performing" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-t-4 border-t-primary">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-4">Data-Driven Insights</h3>
                  <p>
                    We analyze tourism patterns, visitor preferences, and cultural preservation needs using data from government sources like data.gov.in to inform our recommendations and identify gaps in cultural tourism.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-t-4 border-t-accent">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-4">Community Collaboration</h3>
                  <p>
                    We work closely with local artisans, cultural organizations, and tourism stakeholders to ensure authentic representation and sustainable economic benefits for communities.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-t-4 border-t-cultural-gold">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-4">Responsible Tourism</h3>
                  <p>
                    We promote travel practices that respect cultural heritage, support local economies, and minimize environmental impact, ensuring that tourism serves as a force for preservation rather than degradation.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-40 h-40 mx-auto rounded-full overflow-hidden mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&auto=format&fit=crop" 
                    alt="Aarti Sharma" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold">Aarti Sharma</h3>
                <p className="text-muted-foreground">Cultural Research Lead</p>
              </div>
              <div className="text-center">
                <div className="w-40 h-40 mx-auto rounded-full overflow-hidden mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop" 
                    alt="Rajiv Mehta" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold">Rajiv Mehta</h3>
                <p className="text-muted-foreground">Data Analytics Director</p>
              </div>
              <div className="text-center">
                <div className="w-40 h-40 mx-auto rounded-full overflow-hidden mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&auto=format&fit=crop" 
                    alt="Meena Iyer" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold">Meena Iyer</h3>
                <p className="text-muted-foreground">Community Partnerships</p>
              </div>
              <div className="text-center">
                <div className="w-40 h-40 mx-auto rounded-full overflow-hidden mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=300&auto=format&fit=crop" 
                    alt="Arjun Kapoor" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold">Arjun Kapoor</h3>
                <p className="text-muted-foreground">Sustainable Tourism Expert</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
            <p className="max-w-2xl mx-auto text-lg mb-8">
              Whether you're a traveler, cultural enthusiast, or tourism professional, you can contribute to our mission of preserving and celebrating India's cultural heritage.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Share Your Experience</h3>
                <p>
                  Submit your cultural tourism stories and photos to inspire others.
                </p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Partner With Us</h3>
                <p>
                  Collaborate on cultural preservation and responsible tourism initiatives.
                </p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Stay Informed</h3>
                <p>
                  Subscribe to our newsletter for updates on cultural events and opportunities.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
