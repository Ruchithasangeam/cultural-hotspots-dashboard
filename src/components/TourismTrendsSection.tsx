
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
      </div>
    </section>
  );
};

export default TourismTrendsSection;
