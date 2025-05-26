
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
  //  image: 'https://images.unsplash.com/photo-1583265627959-fb7042f5133b?w=600&auto=format&fit=crop',
  image:'https://media.istockphoto.com/id/1221935714/photo/kathakali-kerala-classical-dance-men-unique-body-expression.jpg?s=612x612&w=0&k=20&c=l5jkczq7yyJocnBqNcntTEx-OoZevZNcXePnp05i_hc='

  },
  {
    id: 'madhubani',
    name: 'Madhubani',
    region: 'Bihar',
    category: 'Painting',
    description: 'Folk painting practiced in the Mithila region characterized by geometric patterns.',
   // image: 'https://images.unsplash.com/photo-1582557292087-aa2e8eb78248?w=600&auto=format&fit=crop',
   image:'https://kala-sanskruti.com/wp-content/uploads/2023/03/Madhubani_AG001.jpg'

  },
  {
    id: 'bharatanatyam',
    name: 'Bharatanatyam',
    region: 'Tamil Nadu',
    category: 'Dance',
    description: 'One of the oldest classical dance traditions in India with divine connotations.',
   // image: 'https://images.unsplash.com/photo-1503516459261-40c66117780a?w=600&auto=format&fit=crop',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZpsTR7igDJnTkxgRi7FxsiOWW3WrAUL8Sjw&s'
  },
  {
    id: 'warli',
    name: 'Warli Art',
    region: 'Maharashtra',
    category: 'Painting',
    description: 'Tribal art form known for its simple stick figures and use of earth colors.', 
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2uXsZWonPt8tDjt3np_WyKBhUOnNR3RLHIA&s'
  },
  {
    id: 'kuchipudi',
    name: 'Kuchipudi',
    region: 'Andhra Pradesh',
    category: 'Dance',
    description: 'Classical dance from Andhra Pradesh with roots in ancient Hindu Sanskrit texts.',
   // image: 'https://images.unsplash.com/photo-1563841166968-526858717c65?w=600&auto=format&fit=crop',
   image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJp4FDXyoN-DwMOQiSQxru8d7PLSkQ7VXHXQ&s'
  },
  {
    id: 'tanjore-painting',
    name: 'Tanjore Painting',
    region: 'Tamil Nadu',
    category: 'Painting',
    description: 'Classical South Indian painting style characterized by rich, flat colors with gold foil details.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLLKLxoDZ9wszOfarRLpSOTYzULYg3zvhUGA&s',
  },
  {
    id: 'gond',
    name: 'Gond Art',
    region: 'Madhya Pradesh',
    category: 'Painting',
    description: 'Form of painting from folk and tribal art that uses dots and lines to create vibrant works.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-xrqeTbGA76abbOsBx-jeJdC7l-LjfI1sZQ&s',
  },
  {
    id: 'manipuri',
    name: 'Manipuri',
    region: 'Manipur',
    category: 'Dance',
    description: 'One of the classical dances of India with graceful and gentle movements.',
    image: 'data:image/jpeg;base64,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',
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
