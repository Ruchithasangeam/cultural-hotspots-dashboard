
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';

const regions = [
  { id: 'north', name: 'North India', hotspots: 42, highlight: true },
  { id: 'south', name: 'South India', hotspots: 37, highlight: false },
  { id: 'east', name: 'East India', hotspots: 29, highlight: false },
  { id: 'west', name: 'West India', hotspots: 31, highlight: false },
  { id: 'central', name: 'Central India', hotspots: 24, highlight: false },
  { id: 'northeast', name: 'North East', hotspots: 18, highlight: false },
];

const MapSection: React.FC = () => {
  const [activeRegion, setActiveRegion] = useState(regions[0]);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h6 className="text-accent font-medium mb-2">Cultural Geography</h6>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Cultural Hotspots</h2>
          <p className="text-muted-foreground">
            Discover cultural landmarks, heritage sites, and artistic hubs across India's diverse regions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4">Regions</h3>
            <div className="space-y-2">
              {regions.map((region) => (
                <div 
                  key={region.id}
                  onClick={() => setActiveRegion(region)}
                  className={`p-4 rounded-md cursor-pointer transition-all ${
                    activeRegion.id === region.id 
                      ? 'bg-primary text-white' 
                      : 'bg-secondary hover:bg-secondary/80'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{region.name}</span>
                    <span className="bg-white/20 text-sm px-2 py-0.5 rounded">{region.hotspots}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-2 bg-muted rounded-lg p-4 h-[500px] flex items-center justify-center">
            <div className="text-center">
              <p className="text-muted-foreground mb-2">Interactive Map</p>
              <h3 className="text-xl font-bold mb-4">Cultural Hotspots in {activeRegion.name}</h3>
              <div className="bg-secondary/50 p-8 rounded-md">
                <p>Map visualization would be displayed here</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Displaying {activeRegion.hotspots} cultural hotspots
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
