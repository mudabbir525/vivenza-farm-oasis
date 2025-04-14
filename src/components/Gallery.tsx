
import { useState } from 'react';
import { X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1567194974473-57ce6e9b3e1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      alt: "Farmhouse exterior view",
      title: "The Main House"
    },
    {
      src: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      alt: "Luxury farmhouse bedroom",
      title: "Master Bedroom"
    },
    {
      src: "https://images.unsplash.com/photo-1595516082268-2dd76f2288c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      alt: "Farmhouse kitchen with wooden elements",
      title: "Fully Equipped Kitchen"
    },
    {
      src: "https://images.unsplash.com/photo-1541123603104-512919d6a96c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      alt: "Swimming pool surrounded by nature",
      title: "Private Pool"
    },
    {
      src: "https://images.unsplash.com/photo-1593696954577-ab3d39317b97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      alt: "Outdoor dining area with farm view",
      title: "Outdoor Dining"
    },
    {
      src: "https://images.unsplash.com/photo-1605551048578-91213ba40c24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      alt: "Cozy living room with fireplace",
      title: "Cozy Living Room"
    }
  ];

  const openModal = (src: string) => {
    setSelectedImage(src);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container-custom">
        <h2 className="section-heading text-center mb-12">Experience Our Beautiful Farmhouse</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openModal(image.src)}
            >
              <div className="relative overflow-hidden h-64">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end">
                  <div className="p-4 w-full text-white translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-semibold">{image.title}</h3>
                    <p className="text-white/80">{image.alt}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for image preview */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={closeModal}>
          <button 
            className="absolute top-4 right-4 text-white p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              closeModal();
            }}
          >
            <X size={24} />
          </button>
          <img 
            src={selectedImage} 
            alt="Enlarged gallery image" 
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
