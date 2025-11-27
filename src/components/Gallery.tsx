import { Card } from "@/components/ui/card";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Placeholder images - estes devem ser substituídos por fotos reais da casa
  const images = [
    { id: 1, url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop", alt: "Sala de estar" },
    { id: 2, url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop", alt: "Quarto" },
    { id: 3, url: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop", alt: "Cozinha" },
    { id: 4, url: "https://images.unsplash.com/photo-1552581234-26160f608093?w=800&h=600&fit=crop", alt: "Área externa" },
    { id: 5, url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop", alt: "Fachada" },
    { id: 6, url: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&h=600&fit=crop", alt: "Área de convivência" },
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Galeria de <span className="text-primary">Fotos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Conheça cada cantinho da nossa república
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {images.map((image) => (
            <Card 
              key={image.id} 
              className="overflow-hidden cursor-pointer group border-2 hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              onClick={() => setSelectedImage(image.url)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={image.url}
                  alt={image.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <span className="text-white font-bold text-lg tracking-wide">{image.alt}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl p-0 bg-black/95 border-0">
          {selectedImage && (
            <div className="relative">
              <img
                src={selectedImage}
                alt="Imagem ampliada"
                className="w-full h-auto rounded-lg"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
