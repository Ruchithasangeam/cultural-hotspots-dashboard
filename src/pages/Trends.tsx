
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription 
} from '@/components/ui/card';
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
  Legend,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
  { name: 'Rajasthan', visitors: 820, percent: 22 },
  { name: 'Kerala', visitors: 620, percent: 17 },
  { name: 'Tamil Nadu', visitors: 580, percent: 16 },
  { name: 'Uttar Pradesh', visitors: 520, percent: 14 },
  { name: 'Maharashtra', visitors: 480, percent: 13 },
  { name: 'Others', visitors: 680, percent: 18 },
];

const yearData = [
  { name: '2017', visitors: 1800 },
  { name: '2018', visitors: 2200 },
  { name: '2019', visitors: 2600 },
  { name: '2020', visitors: 900 },
  { name: '2021', visitors: 1300 },
  { name: '2022', visitors: 2400 },
  { name: '2023', visitors: 3100 },
];

const ageData = [
  { name: '18-24', value: 15 },
  { name: '25-34', value: 30 },
  { name: '35-44', value: 25 },
  { name: '45-54', value: 18 },
  { name: '55+', value: 12 },
];

const COLORS = ['#5E35B1', '#D32F2F', '#FF6F00', '#388E3C', '#303F9F'];

const Trends = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="bg-primary text-white py-12 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Tourism Trends & Analytics</h1>
            <p className="max-w-2xl mx-auto text-lg text-white/90">
              Data-driven insights into cultural tourism patterns, visitor preferences, and heritage site popularity.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="visitor">
              <div className="flex justify-center mb-6">
                <TabsList>
                  <TabsTrigger value="visitor">Visitor Trends</TabsTrigger>
                  <TabsTrigger value="regional">Regional Analysis</TabsTrigger>
                  <TabsTrigger value="demographic">Demographics</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="visitor" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Monthly Visitor Trends</CardTitle>
                      <CardDescription>Domestic vs. International tourists (in thousands)</CardDescription>
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
                      <CardTitle>Annual Growth</CardTitle>
                      <CardDescription>Yearly cultural tourism visitors (in thousands)</CardDescription>
                    </CardHeader>
                    <CardContent className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                          data={yearData}
                          margin={{ top: 10, right: 30, left: 20, bottom: 5 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Bar dataKey="visitors" fill="#303F9F" />
                        </BarChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Key Insights</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="bg-muted p-6 rounded-lg">
                        <h3 className="text-lg font-bold mb-2">Seasonal Patterns</h3>
                        <p className="text-muted-foreground">
                          Peak tourism seasons occur during October-December and March-May, aligning with pleasant weather conditions and major cultural festivals.
                        </p>
                      </div>
                      <div className="bg-muted p-6 rounded-lg">
                        <h3 className="text-lg font-bold mb-2">COVID-19 Impact</h3>
                        <p className="text-muted-foreground">
                          The 2020-2021 period saw a steep decline in visitors due to the pandemic, but cultural tourism rebounded strongly in 2022-2023.
                        </p>
                      </div>
                      <div className="bg-muted p-6 rounded-lg">
                        <h3 className="text-lg font-bold mb-2">Domestic Tourism</h3>
                        <p className="text-muted-foreground">
                          Domestic tourism comprises 70% of cultural site visits, with international visitors making up the remaining 30%.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="regional" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Top Cultural Destinations</CardTitle>
                      <CardDescription>Visitor distribution by region (in thousands)</CardDescription>
                    </CardHeader>
                    <CardContent className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                          data={regionData}
                          layout="vertical"
                          margin={{ top: 10, right: 30, left: 80, bottom: 5 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis type="number" />
                          <YAxis dataKey="name" type="category" />
                          <Tooltip />
                          <Bar dataKey="visitors" fill="#D32F2F" />
                        </BarChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Regional Distribution</CardTitle>
                      <CardDescription>Percentage of cultural tourism by state</CardDescription>
                    </CardHeader>
                    <CardContent className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={regionData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="percent"
                          >
                            {regionData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip />
                        </PieChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Undiscovered Cultural Hotspots</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      <div className="bg-muted p-6 rounded-lg">
                        <h3 className="text-lg font-bold mb-2">Northeast India</h3>
                        <p className="text-muted-foreground">
                          Rich tribal culture and heritage sites remain largely unexplored due to connectivity challenges and limited tourism infrastructure.
                        </p>
                      </div>
                      <div className="bg-muted p-6 rounded-lg">
                        <h3 className="text-lg font-bold mb-2">Central India</h3>
                        <p className="text-muted-foreground">
                          Tribal art forms and historical sites in parts of Chhattisgarh and Jharkhand lack exposure despite their cultural significance.
                        </p>
                      </div>
                      <div className="bg-muted p-6 rounded-lg">
                        <h3 className="text-lg font-bold mb-2">Western Gujarat</h3>
                        <p className="text-muted-foreground">
                          Traditional crafts and architectural marvels in smaller towns receive fewer visitors compared to major tourist circuits.
                        </p>
                      </div>
                      <div className="bg-muted p-6 rounded-lg">
                        <h3 className="text-lg font-bold mb-2">Coastal Odisha</h3>
                        <p className="text-muted-foreground">
                          Ancient temples and maritime heritage sites remain less frequented despite their historical and artistic importance.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="demographic" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Visitor Age Distribution</CardTitle>
                      <CardDescription>Demographics of cultural tourists</CardDescription>
                    </CardHeader>
                    <CardContent className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={ageData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={({ name, value }) => `${name}: ${value}%`}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                          >
                            {ageData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip />
                        </PieChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Visitor Insights</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div>
                          <h3 className="font-bold mb-2">Tourist Spending</h3>
                          <p className="text-muted-foreground mb-2">
                            Average spending on cultural tourism activities and experiences.
                          </p>
                          <div className="bg-secondary rounded-full h-4">
                            <div 
                              className="bg-primary h-4 rounded-full" 
                              style={{ width: '65%' }}
                            ></div>
                          </div>
                          <div className="flex justify-between text-sm mt-1">
                            <span>₹0</span>
                            <span>₹5,000</span>
                            <span>₹10,000</span>
                          </div>
                          <p className="text-sm text-muted-foreground mt-2">
                            Average spend: ₹6,500 per visitor
                          </p>
                        </div>
                        
                        <div>
                          <h3 className="font-bold mb-2">Trip Duration</h3>
                          <p className="text-muted-foreground mb-2">
                            Average days spent at cultural destinations.
                          </p>
                          <div className="bg-secondary rounded-full h-4">
                            <div 
                              className="bg-accent h-4 rounded-full" 
                              style={{ width: '40%' }}
                            ></div>
                          </div>
                          <div className="flex justify-between text-sm mt-1">
                            <span>1 day</span>
                            <span>5 days</span>
                            <span>10 days</span>
                          </div>
                          <p className="text-sm text-muted-foreground mt-2">
                            Average duration: 4.2 days
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Visitor Motivations & Interests</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="bg-muted p-6 rounded-lg">
                        <h3 className="text-lg font-bold mb-2">Primary Motivations</h3>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                          <li>Experiencing authentic cultural traditions</li>
                          <li>Photography and social media sharing</li>
                          <li>Learning about historical significance</li>
                          <li>Participating in local festivals</li>
                        </ul>
                      </div>
                      <div className="bg-muted p-6 rounded-lg">
                        <h3 className="text-lg font-bold mb-2">Preferred Activities</h3>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                          <li>Heritage site visits (87%)</li>
                          <li>Cultural performances (64%)</li>
                          <li>Craft workshops (42%)</li>
                          <li>Food experiences (76%)</li>
                        </ul>
                      </div>
                      <div className="bg-muted p-6 rounded-lg">
                        <h3 className="text-lg font-bold mb-2">Information Sources</h3>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                          <li>Social media (58%)</li>
                          <li>Travel websites (46%)</li>
                          <li>Word of mouth (32%)</li>
                          <li>Government tourism portals (28%)</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Trends;
