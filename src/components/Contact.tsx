
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form submission logic would go here
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll respond shortly.",
    });
    
    // Reset form
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="py-20 bg-farmhouse-earth-light">
      <div className="container-custom">
        <h2 className="section-heading text-center mb-12">Get in Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-xl shadow-md animate-fade-in">
            <h3 className="text-2xl font-bold mb-6 text-farmhouse-wood-dark">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="text-farmhouse-green mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-farmhouse-wood-dark">Location</h4>
                  <p className="text-muted-foreground">123 Farm Lane, Countryside Valley, CV12 3AB</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="text-farmhouse-green mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-farmhouse-wood-dark">Phone</h4>
                  <p className="text-muted-foreground">+1 (234) 567-8901</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="text-farmhouse-green mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-farmhouse-wood-dark">Email</h4>
                  <p className="text-muted-foreground">info@vivenzafarmoasis.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="text-farmhouse-green mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-farmhouse-wood-dark">Open Hours</h4>
                  <p className="text-muted-foreground">Check-in: 2:00 PM - 8:00 PM</p>
                  <p className="text-muted-foreground">Check-out: Before 11:00 AM</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-semibold text-farmhouse-wood-dark mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-farmhouse-green hover:text-farmhouse-green-dark transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
                <a href="#" className="text-farmhouse-green hover:text-farmhouse-green-dark transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
                <a href="#" className="text-farmhouse-green hover:text-farmhouse-green-dark transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold mb-6 text-farmhouse-wood-dark">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-3">
                <Label htmlFor="name" className="text-farmhouse-wood-dark">Your Name</Label>
                <Input id="name" required placeholder="Enter your name" />
              </div>
              
              <div className="space-y-3">
                <Label htmlFor="email" className="text-farmhouse-wood-dark">Email Address</Label>
                <Input id="email" type="email" required placeholder="Enter your email" />
              </div>
              
              <div className="space-y-3">
                <Label htmlFor="subject" className="text-farmhouse-wood-dark">Subject</Label>
                <Input id="subject" required placeholder="How can we help you?" />
              </div>
              
              <div className="space-y-3">
                <Label htmlFor="message" className="text-farmhouse-wood-dark">Message</Label>
                <textarea 
                  id="message" 
                  className="w-full min-h-32 p-3 border rounded-md"
                  required
                  placeholder="Write your message here..."
                />
              </div>
              
              <Button type="submit" className="btn-primary w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
