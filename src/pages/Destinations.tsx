
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Search, MapPin, Star } from 'lucide-react';

interface Destination {
  id: string;
  name: string;
  state: string;
  region: string;
  description: string;
  rating: number;
  tags: string[];
  image: string;
}

const destinations: Destination[] = [
  {
    id: 'varanasi',
    name: 'Varanasi',
    state: 'Uttar Pradesh',
    region: 'North',
    description: 'One of the oldest continuously inhabited cities in the world, known for its spiritual significance.',
    rating: 4.8,
    tags: ['Spiritual', 'Historical', 'Ghats', 'Silk'],
    image: 'https://images.unsplash.com/photo-1571536802807-30451e3955d8?w=600&auto=format&fit=crop'
  },
  {
    id: 'jaipur',
    name: 'Jaipur',
    state: 'Rajasthan',
    region: 'North',
    description: 'Known as the "Pink City", famous for its majestic palaces, colorful bazaars, and rich handicrafts.',
    rating: 4.7,
    tags: ['Heritage', 'Architecture', 'Handicrafts'],
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiRao-0n1PLNKOPj5_EGJQ-RTuSEuWDg81qQ&s'
  },
  {
    id: 'hampi',
    name: 'Hampi',
    state: 'Karnataka',
    region: 'South',
    description: 'UNESCO World Heritage Site with ruins of the Vijayanagara Empire, known for its temples and stone structures.',
    rating: 4.9,
    tags: ['UNESCO', 'Ruins', 'Ancient'],
   image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4V1hQ80lQimhF87joCc9VKEvdtEtK2imNuQ&s'
   },
  {
    id: 'khajuraho',
    name: 'Khajuraho',
    state: 'Madhya Pradesh',
    region: 'Central',
    description: 'Famous for its medieval Hindu and Jain temples with intricate sculptures and carvings.',
    rating: 4.6,
    tags: ['Temples', 'UNESCO', 'Sculptures'],
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSZUFujzsUqrirIi6fDJblyYs7xpz9cofrlg&s'
  },
  {
    id: 'mysore',
    name: 'Mysore',
    state: 'Karnataka',
    region: 'South',
    description: 'Cultural capital of Karnataka known for its palaces, silk sarees, and Mysore Pak sweet.',
    rating: 4.5,
    tags: ['Palace', 'Art', 'Silk'],
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzHALe1Fe1foOTGwGINzOCylc2a-hgg_CuvA&s'
  },
  {
    id: 'kolkata',
    name: 'Kolkata',
    state: 'West Bengal',
    region: 'East',
    description: "India's cultural capital with rich literary, artistic, and cultural heritage.",
    rating: 4.6,
    tags: ['Literature', 'Art', 'Colonial'],
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYCf8uTcbqmVo0UyBel5uPIYSiKy5w64SYaw&s'
  },
  {
    id: 'madurai',
    name: 'Madurai',
    state: 'Tamil Nadu',
    region: 'South',
    description: 'Ancient city known for Meenakshi Amman Temple and its rich cultural heritage.',
    rating: 4.4,
    tags: ['Temples', 'Ancient', 'Religious'],
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7dNsBdJLn7Kl34CS2Snwoul5KOB6hlxhZGA&s'
  },
  {
    id: 'guwahati',
    name: 'Guwahati',
    state: 'Assam',
    region: 'Northeast',
    description: 'Gateway to Northeast India, known for Kamakhya Temple and Assamese culture.',
    rating: 4.3,
    tags: ['Northeast', 'Temple', 'Cultural'],
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVjXk2YGTAVkxa8ceG7YGC_VAgO-VPc7Fqrw&s'
  },
];

const Destinations = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');

  const filteredDestinations = destinations.filter((destination) => {
    // Filter by region if a specific tab is active
    if (activeTab !== 'all' && destination.region.toLowerCase() !== activeTab.toLowerCase()) {
      return false;
    }
    
    // Filter by search query
    if (searchQuery) {
      return (
        destination.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        destination.state.toLowerCase().includes(searchQuery.toLowerCase()) ||
        destination.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        destination.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
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
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Cultural Destinations</h1>
            <p className="max-w-2xl mx-auto text-lg text-white/90">
              Discover India's cultural hotspots, heritage sites, and artistic centers across the country.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <div className="relative max-w-md mx-auto mb-8">
                <Input
                  type="text"
                  placeholder="Search destinations or cultural interests..."
                  className="pl-10 pr-4 py-2"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              </div>

              <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
                <TabsList className="w-full max-w-2xl mx-auto grid grid-cols-2 sm:grid-cols-6">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="north">North</TabsTrigger>
                  <TabsTrigger value="south">South</TabsTrigger>
                  <TabsTrigger value="east">East</TabsTrigger>
                  <TabsTrigger value="west">West</TabsTrigger>
                  <TabsTrigger value="northeast">Northeast</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDestinations.map((destination) => (
                <Card key={destination.id} className="overflow-hidden card-hover">
                  <div className="relative h-52">
                    <img
                      src={destination.image}
                      alt={destination.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <h3 className="text-white text-lg font-bold">{destination.name}</h3>
                    </div>
                  </div>

                  <CardContent className="p-4">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-1 text-muted-foreground text-sm">
                        <MapPin className="h-4 w-4" />
                        <span>{destination.state}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{destination.rating}</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{destination.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {destination.tags.map((tag) => (
                        <Badge key={tag} variant="outline">{tag}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredDestinations.length === 0 && (
              <div className="text-center py-8">
                <p className="text-muted-foreground">No destinations match your search criteria.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Destinations;
