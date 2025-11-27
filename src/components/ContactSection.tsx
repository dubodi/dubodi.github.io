import { MessageCircle, Instagram, Facebook, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ContactSection = () => {
  const phoneNumber = "+5537999411393"; // Substituir pelo número real
  const message = "Fala Dory, fiquei interessado em morar na DuBodi, podemos conversar melhor?";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
  return (
    <section className="py-16 bg-dubodi-gray">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Entre em <span className="text-primary">Contato</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card p-8 rounded-xl border-2 border-border hover:border-[#25D366] transition-all hover:shadow-lg group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#25D366]/10 p-3 rounded-full group-hover:bg-[#25D366] transition-colors">
                  <MessageCircle className="text-[#25D366] group-hover:text-white transition-colors" size={28} />
                </div>
                <h3 className="text-xl font-bold">WhatsApp</h3>
              </div>
              <p className="text-muted-foreground">
                Tire suas dúvidas diretamente com a gente pelo WhatsApp
              </p>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/repubdubodi"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card p-8 rounded-xl border-2 border-border hover:border-[#E4405F] transition-all hover:shadow-lg group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#E4405F]/10 p-3 rounded-full group-hover:bg-[#E4405F] transition-colors">
                  <Instagram className="text-[#E4405F] group-hover:text-white transition-colors" size={28} />
                </div>
                <h3 className="text-xl font-bold">Instagram</h3>
              </div>
              <p className="text-muted-foreground">
                Acompanhe nosso dia a dia e novidades no Instagram
              </p>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/repubdubodi"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card p-8 rounded-xl border-2 border-border hover:border-[#1877F2] transition-all hover:shadow-lg group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#1877F2]/10 p-3 rounded-full group-hover:bg-[#1877F2] transition-colors">
                  <Facebook className="text-[#1877F2] group-hover:text-white transition-colors" size={28} />
                </div>
                <h3 className="text-xl font-bold">Facebook</h3>
              </div>
              <p className="text-muted-foreground">
                Curta nossa página e fique por dentro dos eventos
              </p>
            </a>

            {/* Localização */}
            <div className="bg-card p-8 rounded-xl border-2 border-border">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <MapPin className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-bold">Localização</h3>
              </div>
              <p className="text-muted-foreground">
                João Monlevade - MG<br />
                Próximo a Pontos de Onibus, Supermercados e Farmácias
              </p>
            </div>
          </div>


          {/* Mapa */}
          <div className="rounded-xl overflow-hidden border-2 border-border shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3753.6801088521443!2d-43.187005323799475!3d-19.811155981550755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa5a9d9b34aa493%3A0xb224a30a965e72a3!2sRep%C3%BAblica%20DuBodi!5e0!3m2!1spt-BR!2sbr!4v1764217173111!5m2!1spt-BR!2sbr"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da República DuBodi"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
