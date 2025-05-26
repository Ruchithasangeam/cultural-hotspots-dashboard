
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Experience {
  id: string;
  title: string;
  location: string;
  description: string;
  image: string;
  featured?: boolean;
}

const experiences: Experience[] = [
  {
    id: 'pottery-workshop',
    title: 'Traditional Pottery Workshop',
    location: 'Jaipur, Rajasthan',
    description: 'Learn the ancient craft of Blue Pottery from master artisans in the Pink City.',
   image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt4slhPJ9G-HiitnHgESFN-pPNQsKsQdNl9w&s'
  },
  {
    id: 'folk-dance',                 
    title: 'Folk Dance Performance',
    location: 'Jodhpur, Rajasthan',
    description: 'Experience vibrant Kalbelia dance performances with traditional music.',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9taAGO8EDHs3WGiCfHBFgxtI1lWnFu_oXLA&s'
  },
  {
    id: 'weaving',
    title: 'Traditional Silk Weaving',
    location: 'Varanasi, Uttar Pradesh',
    description: 'Learn about the intricate art of Banarasi silk weaving from local artisans.',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFN3M8SHdS3arCuYHEdp7a6qObo-7_F5am8g&s'
  }
];

const CulturalExperienceSection: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10">
          <div>
            <h6 className="text-accent font-medium mb-2">Immersive Tourism</h6>
            <h2 className="text-3xl md:text-4xl font-bold">Cultural Experiences</h2>
          </div>
          <Button asChild variant="outline" className="mt-4 md:mt-0">
            <Link to="/experiences">View All Experiences</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {experiences.map((exp) => (
            <Card 
              key={exp.id} 
              className={`card-hover overflow-hidden ${
                exp.featured ? 'border-2 border-accent' : ''
              }`}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={exp.image} 
                  alt={exp.title} 
                  className="w-full h-full object-cover"
                />
                {exp.featured && (
                  <span className="absolute top-3 right-3 bg-accent text-white text-xs px-2 py-1 rounded-md">
                    Featured
                  </span>
                )}
              </div>
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 text-muted-foreground text-sm mb-2">
                  <MapPin className="h-4 w-4" />
                  <span>{exp.location}</span>
                </div>
                <h3 className="text-lg font-bold mb-2">{exp.title}</h3>
                <p className="text-muted-foreground">{exp.description}</p>
              </CardContent>
              <CardFooter className="pt-0">
                <Button asChild variant="link" className="p-0">
                  <Link to={`/experiences/${exp.id}`}>
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CulturalExperienceSection;
