
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Emily & David",
      location: "New York, USA",
      quote: "Our stay at Vivenza Farm Oasis exceeded all expectations. The serene environment, attention to detail, and warm hospitality made our anniversary weekend unforgettable.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1522556189639-b150ed9c4330?ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
    },
    {
      name: "James Family",
      location: "London, UK",
      quote: "The kids absolutely loved the farm animals and outdoor activities. The accommodations were luxurious yet maintained the authentic farmhouse charm. We'll definitely be back!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1509994196812-897f5a6ab49c?ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
    },
    {
      name: "Sarah & Michael",
      location: "Toronto, Canada",
      quote: "A perfect retreat from the city hustle. We enjoyed the organic meals, peaceful surroundings, and excellent amenities. The hosts went above and beyond to make our stay special.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-farmhouse-wood-light/10">
      <div className="container-custom">
        <h2 className="section-heading text-center mb-4">What Our Guests Say</h2>
        <p className="text-center text-lg mb-12 max-w-2xl mx-auto text-farmhouse-wood">
          Hear from families and couples who have experienced the magic of Vivenza Farm Oasis
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-bold text-farmhouse-wood-dark">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
              
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-farmhouse-wood-dark italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
