
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-farmhouse-wood-dark text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-serif font-bold mb-4">
              Vivenza <span className="text-farmhouse-earth-light">Farm Oasis</span>
            </h3>
            <p className="mb-6 text-farmhouse-earth-light/80 max-w-md">
              Experience the perfect blend of luxury and rustic charm at our exclusive farmhouse retreat. Reconnect with nature and create lasting memories.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-farmhouse-earth-light transition-colors" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="text-white hover:text-farmhouse-earth-light transition-colors" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" className="text-white hover:text-farmhouse-earth-light transition-colors" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-farmhouse-earth-light/80 hover:text-farmhouse-earth-light transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-farmhouse-earth-light/80 hover:text-farmhouse-earth-light transition-colors">About Us</a>
              </li>
              <li>
                <a href="#gallery" className="text-farmhouse-earth-light/80 hover:text-farmhouse-earth-light transition-colors">Gallery</a>
              </li>
              <li>
                <a href="#booking" className="text-farmhouse-earth-light/80 hover:text-farmhouse-earth-light transition-colors">Book Now</a>
              </li>
              <li>
                <a href="#contact" className="text-farmhouse-earth-light/80 hover:text-farmhouse-earth-light transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="text-farmhouse-earth-light/80">
                123 Farm Lane, Countryside Valley, CV12 3AB
              </li>
              <li>
                <a href="tel:+12345678901" className="text-farmhouse-earth-light/80 hover:text-farmhouse-earth-light transition-colors">+1 (234) 567-8901</a>
              </li>
              <li>
                <a href="mailto:info@vivenzafarmoasis.com" className="text-farmhouse-earth-light/80 hover:text-farmhouse-earth-light transition-colors">info@vivenzafarmoasis.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-farmhouse-earth-light/70 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Vivenza Farm Oasis. All rights reserved.
          </p>
          
          <div className="flex items-center">
            <button 
              onClick={scrollToTop}
              className="p-2 bg-farmhouse-green text-white rounded-full hover:bg-farmhouse-green-dark transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
