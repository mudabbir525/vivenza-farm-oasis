
import { Check } from 'lucide-react';

const About = () => {
  const features = [
    'Organic farm-to-table breakfast',
    'Private swimming pool',
    'Guided farm tours',
    'Wellness activities',
    'Serene natural surroundings',
    'Pet-friendly accommodations'
  ];

  return (
    <section id="about" className="py-20 bg-farmhouse-earth-light">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 animate-fade-in">
            <h2 className="section-heading">Welcome to Vivenza Farm Oasis</h2>
            
            <p className="text-lg text-farmhouse-wood-dark mb-6">
              Nestled among rolling hills and lush farmlands, Vivenza Farm Oasis offers a perfect blend of rustic charm and modern luxury. Our farmhouse retreat provides an authentic rural experience while ensuring the comfort and amenities of a premium getaway.
            </p>
            
            <p className="text-lg text-farmhouse-wood-dark mb-8">
              Whether you're seeking a peaceful weekend retreat, a family vacation, or a romantic escape, our farm offers an idyllic setting to reconnect with nature and create cherished memories.
            </p>
            
            <h3 className="section-subheading">Experience Includes:</h3>
            
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <Check className="text-farmhouse-green flex-shrink-0" />
                  <span className="text-farmhouse-wood-dark">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="order-1 md:order-2 grid grid-cols-2 gap-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="space-y-4">
              <img 
                src="https://images.unsplash.com/photo-1517022812141-23620dba5c23?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Sheep grazing in the farm" 
                className="rounded-lg shadow-lg w-full h-48 object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1485833077593-4278bba3f11f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Deer in the forest near the farm" 
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
            </div>
            <div className="space-y-4 mt-6">
              <img 
                src="https://images.unsplash.com/photo-1466721591366-2d5fba72006d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Animals on the farm" 
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Ox on the mountain near the farm" 
                className="rounded-lg shadow-lg w-full h-48 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
