import logoDubodi from "./assets/logo_vetorizada.svg";
import { MessageCircle, Instagram, Facebook } from "lucide-react";

export const Footer = () => {
  const phoneNumber = "+5537999411393"; // Substituir pelo número real
  const message = "Fala Dory, fiquei interessado em morar na DuBodi, podemos conversar melhor?";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <footer className="bg-dubodi-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center space-y-6">
          { <img 
            src={logoDubodi} 
            alt="Logo DuBodi" 
            className="w-auto h-80 object-contain"
          /> }
          <div>
            <h3 className="text-2xl font-bold mb-2">República DuBodi</h3>
            <p className="text-white/70">
              Tradição, Amizade e Excelência Acadêmica
            </p>
          </div>
          
          {/* Redes Sociais */}
          <div className="flex gap-6">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 p-3 rounded-full hover:bg-[#25D366] transition-colors hover:scale-110 transform"
              aria-label="WhatsApp"
            >
              <MessageCircle size={24} />
            </a>
            <a
              href="https://instagram.com/repubdubodi"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 p-3 rounded-full hover:bg-[#E4405F] transition-colors hover:scale-110 transform"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://facebook.com/repubdubodi"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 p-3 rounded-full hover:bg-[#1877F2] transition-colors hover:scale-110 transform"
              aria-label="Facebook"
            >
              <Facebook size={24} />
            </a>
          </div>

          <div className="border-t border-white/20 w-full pt-6">
            <p className="text-white/50 text-sm">
              © {new Date().getFullYear()} República DuBodi. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
