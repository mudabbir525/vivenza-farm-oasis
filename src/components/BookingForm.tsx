
import { useState } from 'react';
import { format } from 'date-fns';
import { Calendar as CalendarIcon, Users, Plus, Minus } from 'lucide-react';
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

const BookingForm = () => {
  const { toast } = useToast();
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!checkIn || !checkOut || !name || !email || !phone) {
      toast({
        title: "Missing Information",
        description: "Please fill all required fields",
        variant: "destructive"
      });
      return;
    }
    
    // Process booking
    toast({
      title: "Booking Request Received!",
      description: "We will contact you shortly to confirm your stay.",
    });
    
    // Reset form
    setCheckIn(undefined);
    setCheckOut(undefined);
    setAdults(2);
    setChildren(0);
    setName('');
    setEmail('');
    setPhone('');
    setSpecialRequests('');
  };

  return (
    <section id="booking" className="py-20 bg-farmhouse-green/10">
      <div className="container-custom">
        <h2 className="section-heading text-center mb-12">Book Your Stay</h2>
        
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Check-in Date */}
                <div className="space-y-2">
                  <Label htmlFor="check-in">Check-in Date *</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        id="check-in"
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !checkIn && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {checkIn ? format(checkIn, "PPP") : <span>Select date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={checkIn}
                        onSelect={setCheckIn}
                        initialFocus
                        disabled={(date) => date < new Date()}
                        className="pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                
                {/* Check-out Date */}
                <div className="space-y-2">
                  <Label htmlFor="check-out">Check-out Date *</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        id="check-out"
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !checkOut && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {checkOut ? format(checkOut, "PPP") : <span>Select date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={checkOut}
                        onSelect={setCheckOut}
                        initialFocus
                        disabled={(date) => !checkIn || date <= checkIn}
                        className="pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                
                {/* Guests */}
                <div className="space-y-2">
                  <Label>Adults *</Label>
                  <div className="flex items-center border rounded-md">
                    <Button 
                      type="button"
                      variant="ghost" 
                      size="icon"
                      onClick={() => setAdults(Math.max(1, adults - 1))}
                      className="h-10 w-10"
                    >
                      <Minus size={16} />
                    </Button>
                    <div className="flex-1 text-center">{adults}</div>
                    <Button 
                      type="button"
                      variant="ghost" 
                      size="icon"
                      onClick={() => setAdults(Math.min(10, adults + 1))}
                      className="h-10 w-10"
                    >
                      <Plus size={16} />
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label>Children</Label>
                  <div className="flex items-center border rounded-md">
                    <Button 
                      type="button"
                      variant="ghost" 
                      size="icon"
                      onClick={() => setChildren(Math.max(0, children - 1))}
                      className="h-10 w-10"
                    >
                      <Minus size={16} />
                    </Button>
                    <div className="flex-1 text-center">{children}</div>
                    <Button 
                      type="button"
                      variant="ghost" 
                      size="icon"
                      onClick={() => setChildren(Math.min(6, children + 1))}
                      className="h-10 w-10"
                    >
                      <Plus size={16} />
                    </Button>
                  </div>
                </div>
                
                {/* Contact Info */}
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input 
                    id="name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    placeholder="Your full name" 
                    required 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="your.email@example.com" 
                    required 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    value={phone} 
                    onChange={(e) => setPhone(e.target.value)} 
                    placeholder="Your contact number" 
                    required 
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="special-requests">Special Requests</Label>
                <textarea 
                  id="special-requests"
                  className="w-full min-h-24 p-3 border rounded-md"
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  placeholder="Any special requirements or requests..."
                />
              </div>
              
              <Button type="submit" className="btn-primary w-full py-6">
                Request Booking
              </Button>
              
              <p className="text-sm text-muted-foreground text-center">
                * Required fields. We'll contact you within 24 hours to confirm availability.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
