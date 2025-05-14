
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';

interface ArtForm {
  id: string;
  name: string;
  region: string;
  category: string;
  description: string;
  image: string;
}

// Sample art forms data
const artFormsData: ArtForm[] = [
  {
    id: 'kathakali',
    name: 'Kathakali',
    region: 'Kerala',
    category: 'Dance',
    description: 'Classical Indian dance-drama known for its elaborately colorful make-up, costumes and face masks.',
    image: 'https://images.unsplash.com/photo-1583265627959-fb7042f5133b?w=600&auto=format&fit=crop',
  },
  {
    id: 'madhubani',
    name: 'Madhubani',
    region: 'Bihar',
    category: 'Painting',
    description: 'Folk painting practiced in the Mithila region characterized by geometric patterns.',
    image: 'https://images.unsplash.com/photo-1582557292087-aa2e8eb78248?w=600&auto=format&fit=crop',
  },
  {
    id: 'bharatanatyam',
    name: 'Bharatanatyam',
    region: 'Tamil Nadu',
    category: 'Dance',
    description: 'One of the oldest classical dance traditions in India with divine connotations.',
    image: 'https://images.unsplash.com/photo-1503516459261-40c66117780a?w=600&auto=format&fit=crop',
  },
  {
    id: 'warli',
    name: 'Warli Art',
    region: 'Maharashtra',
    category: 'Painting',
    description: 'Tribal art form known for its simple stick figures and use of earth colors.',
    image: 'https://images.unsplash.com/photo-1586791969105-35e8010c3880?w=600&auto=format&fit=crop',
  },
  {
    id: 'kuchipudi',
    name: 'Kuchipudi',
    region: 'Andhra Pradesh',
    category: 'Dance',
    description: 'Classical dance from Andhra Pradesh with roots in ancient Hindu Sanskrit texts.',
    image: 'https://images.unsplash.com/photo-1563841166968-526858717c65?w=600&auto=format&fit=crop',
  },
  {
    id: 'tanjore-painting',
    name: 'Tanjore Painting',
    region: 'Tamil Nadu',
    category: 'Painting',
    description: 'Classical South Indian painting style characterized by rich, flat colors with gold foil details.',
    image: 'https://images.unsplash.com/photo-1576085898323-218337e3e43c?w=600&auto=format&fit=crop',
  },
  {
    id: 'gond',
    name: 'Gond Art',
    region: 'Madhya Pradesh',
    category: 'Painting',
    description: 'Form of painting from folk and tribal art that uses dots and lines to create vibrant works.',
    image: 'https://images.unsplash.com/photo-1569172122301-bc5008bc09c5?w=600&auto=format&fit=crop',
  },
  {
    id: 'manipuri',
    name: 'Manipuri',
    region: 'Manipur',
    category: 'Dance',
    description: 'One of the classical dances of India with graceful and gentle movements.',
    image: 'https://images.unsplash.com/photo-1516641051054-9df6a1aad654?w=600&auto=format&fit=crop',
  },
];

const ArtForms = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');

  const filteredArtForms = artFormsData.filter((artForm) => {
    // Filter by category if a specific tab is active
    if (activeTab !== 'all' && artForm.category.toLowerCase() !== activeTab) {
      return false;
    }
    
    // Filter by search query
    if (searchQuery) {
      return (
        artForm.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        artForm.region.toLowerCase().includes(searchQuery.toLowerCase()) ||
        artForm.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    return true;
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="bg-primary text-white py-12 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Traditional Art Forms</h1>
            <p className="max-w-2xl mx-auto text-lg text-white/90">
              Explore the rich diversity of India's traditional art forms - from classical dances to folk paintings.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <div className="relative max-w-md mx-auto mb-8">
                <Input
                  type="text"
                  placeholder="Search art forms or regions..."
                  className="pl-10 pr-4 py-2"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              </div>

              <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
                <TabsList className="w-full max-w-2xl mx-auto grid grid-cols-3 sm:grid-cols-5">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="dance">Dance</TabsTrigger>
                  <TabsTrigger value="painting">Painting</TabsTrigger>
                  <TabsTrigger value="music">Music</TabsTrigger>
                  <TabsTrigger value="craft">Crafts</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredArtForms.map((art) => (
                <Link to={`/artforms/${art.id}`} key={art.id}>
                  <Card className="artform-card card-hover border-none h-full">
                    <div className="overflow-hidden">
                      <img
                        src={art.image}
                        alt={art.name}
                        className="w-full h-48 object-cover"
                      />
                    </div>
                    <CardContent className="p-4">
                      <div className="flex flex-col h-full">
                        <h3 className="text-lg font-bold mb-1">{art.name}</h3>
                        <div className="flex gap-2 mb-2">
                          <span className="text-sm text-muted-foreground">{art.region}</span>
                          <span className="text-xs bg-secondary px-2 rounded-full flex items-center">
                            {art.category}
                          </span>
                        </div>
                        <p className="text-sm line-clamp-3">{art.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {filteredArtForms.length === 0 && (
              <div className="text-center py-8">
                <p className="text-muted-foreground">No art forms match your search criteria.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ArtForms;
