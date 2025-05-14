
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ArtForm {
  id: string;
  name: string;
  region: string;
  description: string;
  image: string;
}

const artForms: ArtForm[] = [
  {
    id: 'kathakali',
    name: 'Kathakali',
    region: 'Kerala',
    description: 'Classical Indian dance-drama known for its elaborately colorful make-up, costumes and face masks.',
    image: 'https://images.unsplash.com/photo-1583265627959-fb7042f5133b?w=600&auto=format&fit=crop',
  },
  {
    id: 'madhubani',
    name: 'Madhubani',
    region: 'Bihar',
    description: 'Folk painting practiced in the Mithila region characterized by geometric patterns.',
    image: 'https://images.unsplash.com/photo-1582557292087-aa2e8eb78248?w=600&auto=format&fit=crop',
  },
  {
    id: 'bharatanatyam',
    name: 'Bharatanatyam',
    region: 'Tamil Nadu',
    description: 'One of the oldest classical dance traditions in India with divine connotations.',
    image: 'https://images.unsplash.com/photo-1503516459261-40c66117780a?w=600&auto=format&fit=crop',
  },
  {
    id: 'warli',
    name: 'Warli Art',
    region: 'Maharashtra',
    description: 'Tribal art form known for its simple stick figures and use of earth colors.',
    image: 'https://images.unsplash.com/photo-1586791969105-35e8010c3880?w=600&auto=format&fit=crop',
  }
];

const ArtFormsSection: React.FC = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10">
          <div>
            <h6 className="text-accent font-medium mb-2">Traditional Expressions</h6>
            <h2 className="text-3xl md:text-4xl font-bold">Discover Art Forms</h2>
          </div>
          <Button asChild variant="outline" className="mt-4 md:mt-0">
            <Link to="/artforms">View All Art Forms</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {artForms.map((art) => (
            <Link to={`/artforms/${art.id}`} key={art.id}>
              <Card className="artform-card card-hover border-none">
                <div className="overflow-hidden">
                  <img
                    src={art.image}
                    alt={art.name}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold mb-1">{art.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{art.region}</p>
                  <p className="text-sm line-clamp-3">{art.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArtFormsSection;
