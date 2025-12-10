import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import logoDuBodi from "./assets/image.svg";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Lista de seções correspondentes aos IDs na sua Home.tsx
  const navLinks = [
    { id: "home", label: "Início" },
    { id: "about", label: "A Casa" },
    { id: "gallery", label: "Galeria" },
    { id: "residents", label: "Moradores" },
    { id: "contact", label: "Contato" },
  ];

  // Função para rolar suavemente até a seção
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault(); // Evita que a URL mude bruscamente
    const element = document.getElementById(id);
    if (element) {
      // Ajuste o offset (-80px) se o menu ficar em cima do título
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });

      setIsOpen(false); // Fecha o menu mobile se estiver aberto
      setActiveSection(id);
    }
  };

  // Efeito para detectar qual seção está visível na tela (Scroll Spy)
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset para compensar a altura da navbar

      for (const link of navLinks) {
        const section = document.getElementById(link.id);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(link.id);
            break; // Para o loop assim que encontrar a seção atual
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-md border-b border-border/40 z-50 shadow-sm transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          
          {/* LOGO */}
          <a 
            href="#home" 
            onClick={(e) => scrollToSection(e, 'home')}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity group"
          >
            <img 
              src={logoDuBodi} 
              alt="Logo DuBodi" 
              // h-16 aumenta a altura (64px)
              // w-auto mantém a proporção correta (não estica)
              // object-contain garante que a imagem inteira apareça sem cortes
              className="h-60 md:h-60 w-44 md:w-44" 
            />
          </a>
          

          {/* NAVEGAÇÃO DESKTOP */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => scrollToSection(e, link.id)}
                className={`text-sm font-bold uppercase tracking-widest transition-all duration-300 relative py-2 ${
                  activeSection === link.id 
                    ? "text-primary" 
                    : "text-foreground/80 hover:text-primary hover:scale-105"
                }`}
              >
                {link.label}
                {/* Linha animada embaixo do link ativo */}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transform transition-transform duration-300 ${
                  activeSection === link.id ? "scale-x-100" : "scale-x-0"
                }`} />
              </a>
            ))}
          </nav>

          {/* BOTÃO MENU MOBILE */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-foreground hover:bg-primary/10 hover:text-primary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </Button>
        </div>

        {/* NAVEGAÇÃO MOBILE (Menu Dropdown) */}
        {isOpen && (
          <nav className="md:hidden absolute top-20 left-0 w-full bg-background/95 backdrop-blur-xl border-b border-border shadow-2xl animate-in slide-in-from-top-5 duration-300">
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => scrollToSection(e, link.id)}
                  className={`text-lg font-semibold py-3 px-4 rounded-lg transition-colors border border-transparent ${
                    activeSection === link.id
                      ? "bg-primary/15 text-primary border-primary/20"
                      : "hover:bg-muted text-foreground/80"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};