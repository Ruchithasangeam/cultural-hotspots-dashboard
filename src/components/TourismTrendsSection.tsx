
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend
} from 'recharts';

const monthlyData = [
  { name: 'Jan', domestic: 280, international: 120 },
  { name: 'Feb', domestic: 300, international: 150 },
  { name: 'Mar', domestic: 400, international: 180 },
  { name: 'Apr', domestic: 500, international: 240 },
  { name: 'May', domestic: 600, international: 320 },
  { name: 'Jun', domestic: 400, international: 280 },
  { name: 'Jul', domestic: 300, international: 250 },
  { name: 'Aug', domestic: 320, international: 230 },
  { name: 'Sep', domestic: 450, international: 280 },
  { name: 'Oct', domestic: 580, international: 350 },
  { name: 'Nov', domestic: 620, international: 380 },
  { name: 'Dec', domestic: 750, international: 420 },
];

const regionData = [
  { name: 'Rajasthan', visitors: 820 },
  { name: 'Kerala', visitors: 620 },
  { name: 'Tamil Nadu', visitors: 580 },
  { name: 'Uttar Pradesh', visitors: 520 },
  { name: 'Maharashtra', visitors: 480 },
];

const TourismTrendsSection: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h6 className="text-accent font-medium mb-2">Data Insights</h6>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tourism Trends & Patterns</h2>
          <p className="text-muted-foreground">
            Explore the seasonal variations and regional distribution of cultural tourism across India.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Monthly Visitor Trends</CardTitle>
            </CardHeader>
            <CardContent className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={monthlyData}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Area 
                    type="monotone" 
                    dataKey="domestic" 
                    stackId="1"
                    stroke="#5E35B1" 
                    fill="#5E35B1" 
                  />
                  <Area 
                    type="monotone" 
                    dataKey="international" 
                    stackId="1"
                    stroke="#FF6F00" 
                    fill="#FF6F00" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Top Cultural Destinations</CardTitle>
            </CardHeader>
            <CardContent className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={regionData}
                  margin={{ top: 10, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="visitors" fill="#D32F2F" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          </div>
          <div className='pt-10'>
          <Card >
            <CardHeader>
              <CardTitle>Seasonality & Tourism Trends in Cultural Hotspots</CardTitle>
            </CardHeader>
            <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
                      <div className="bg-muted p-6 rounded-lg">
                        <h3 className="text-lg font-bold mb-2">Peak Season (Oct-Mar)</h3>
                        <p className="text-muted-foreground">
                        Pleasant weather drives 70% of annual cultural tourism. Heritage sites like Taj Mahal, Rajasthan's forts experience maximum footfall.</p>
                        
                        <li className='pt-2'>Festival season with Diwali, Dussehra </li>
                        <li>Wedding tourism peaks</li>
                        <li>International visitor influx</li>
                        
                      </div>
                      <div className="bg-muted p-6 rounded-lg">
                        <h3 className="text-lg font-bold mb-2">Monsoon Impact (Jun-Sep)</h3>
                        <p className="text-muted-foreground">
                        Coastal and hill station cultural sites see increased domestic tourism, while desert regions experience 60% decline. </p>
                        <li className='pt-2'>Kerala backwaters gain popularity</li>
                        <li>Himalayan monasteries peak season</li>
                        <li>Reduced desert fort visits</li>
                      </div>
                      <div className="bg-muted p-6 rounded-lg">
                        <h3 className="text-lg font-bold mb-2">Summer Trends (Apr-May)</h3>
                        <p className="text-muted-foreground">
                        Hill stations and cooler regions see surge in cultural tourism. Plains experience 40% reduction in visits.
                        </p>
                        <li className='pt-2'>Shimla, Darjeeling cultural sites busy</li>
                        <li>School vacation tourism</li>
                        <li>Early morning heritage walks popular</li>
                      </div>
                    </div>
                  </CardContent>           
          </Card>
          </div>

          <div className='pt-10'>
          <div className="grid grid-cols-1 lg:grid-cols gap-8">
          
<Card className="mb-8">
  <CardHeader>
    <CardTitle>Relatively Untouched Cultural Areas & Reasons</CardTitle>
  </CardHeader>
  <CardContent>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h3 className="text-xl font-bold mb-4">Hidden Cultural Gems</h3>
        <div className="space-y-4">
          <div className="border-l-4 border-primary pl-4">
            <h4 className="font-semibold mb-2">Arunachal Pradesh Monasteries</h4>
            <p className="text-sm text-muted-foreground">
              Ancient Buddhist monasteries with unique Monpa culture remain largely unexplored due to permit requirements and remote locations.
            </p>
          </div>
          
          <div className="border-l-4 border-accent pl-4">
            <h4 className="font-semibold mb-2">Chhattisgarh Tribal Art Villages</h4>
            <p className="text-sm text-muted-foreground">
              Traditional Gond and Baiga art forms in remote villages lack tourism infrastructure and accessibility.
            </p>
          </div>
          
          <div className="border-l-4 border-secondary pl-4">
            <h4 className="font-semibold mb-2">Andaman Indigenous Culture</h4>
            <p className="text-sm text-muted-foreground">
              Protected tribal areas with strict access controls preserve authentic cultures but limit cultural tourism.
            </p>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-xl font-bold mb-4">Barriers to Cultural Tourism</h3>
        <div className="space-y-4">
          <div className="bg-red-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2 text-red-800">Infrastructure Challenges</h4>
            <ul className="text-sm text-red-700 space-y-1">
              <li>• Poor road connectivity to remote cultural sites</li>
              <li>• Limited accommodation options</li>
              <li>• Lack of tourist facilities and guides</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2 text-blue-800">Regulatory Factors</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• Protected area restrictions (Inner Line Permits)</li>
              <li>• Environmental conservation policies</li>
              <li>• Limited tourist quotas for sensitive areas</li>
            </ul>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2 text-green-800">Cultural Preservation</h4>
            <ul className="text-sm text-green-700 space-y-1">
              <li>• Community preference for cultural privacy</li>
              <li>• Fear of commercialization of traditions</li>
              <li>• Language barriers with local communities</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </CardContent>
</Card>
          </div>
 </div>
 </div>
</section>
    
  );


};

export default TourismTrendsSection;
