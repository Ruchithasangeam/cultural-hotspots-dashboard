
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive"
      });
      return;
    }
    
    // In a real app, we would send this to a backend
    toast({
      title: "Success!",
      description: "You have been subscribed to our newsletter",
    });
    
    setEmail('');
  };
  
  return (
    <section className="py-16 bg-primary/5 cultural-pattern">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto overflow-hidden border-none shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="bg-primary p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
              <p className="mb-6">
                Subscribe to our newsletter to receive updates on cultural events, new art forms, tourism insights, and responsible travel tips.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                  <span>Monthly cultural digest</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                  <span>Seasonal travel recommendations</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                  <span>Exclusive cultural experiences</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                  <span>Artisan spotlights</span>
                </li>
              </ul>
            </div>
            
            <CardContent className="p-8 flex items-center">
              <div>
                <h4 className="text-xl font-bold mb-2">Join Our Community</h4>
                <p className="text-muted-foreground mb-4">
                  Enter your email to receive our newsletter.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full"
                  />
                  <Button type="submit" className="w-full">
                    Subscribe
                  </Button>
                </form>
                <p className="text-xs text-muted-foreground mt-4">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </CardContent>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default NewsletterSection;
