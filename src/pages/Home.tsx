import doryFoto from "../components/assets/Dory.png";
import casadoFoto from "../components/assets/Casado.jpeg";
import talibaFoto from "../components/assets/Taliba.png";
import falazadaFoto from "../components/assets/Falazada.png";
import choraoFoto from "../components/assets/Fotochoraovet (1).svg";
import QuartoDory from "../components/assets/fotoCasa/QuartoDory (1).jpeg";
import QuartoDory1 from "../components/assets/fotoCasa/QuartoDory (2).jpeg";
import QuartoDory3 from "../components/assets/fotoCasa/QuartoDory (3).jpeg";
import Quartofalazada from "../components/assets/fotoCasa/QuartoFalazada.jpeg";
import Quartocasado from "../components/assets/fotoCasa/QuartoCasado.jpeg";
import BanheiroDory from "../components/assets/fotoCasa/BanheiroDory (1).jpeg";
import BanheiroDory2 from "../components/assets/fotoCasa/BanheiroDory (2).jpeg";
import Lavanderia from "../components/assets/fotoCasa/Lavanderia.jpeg";
import AreaExterna from "../components/assets/fotoCasa/AreaExterna1.jpeg";
import AreaExterna2 from "../components/assets/fotoCasa/AreaExterna2.png";
import QuartoTaliba from "../components/assets/fotoCasa/QuartoTaliba.jpeg";
import Sala from "../components/assets/fotoCasa/Sala (1).jpeg"; 
import Sala1 from "../components/assets/fotoCasa/Sala (2).jpeg"; 
import Sala2 from "../components/assets/fotoCasa/Sala (3).jpeg";
//import Lanhouse from "../components/assets/fotoCasa/";
import Banheiro from "../components/assets/fotoCasa/Banheiro.jpeg";
import Banheiro2 from "../components/assets/fotoCasa/Banheiro2.jpeg";
//import Lavabo from "../components/assets/fotoCasa/";
import heroBackground from "../components/assets/logoDouradoDuBodi.jpg";



import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronDown,
  Users,
  Home as HomeIcon,
  Award,
  Bed,
  Wifi,
  BookOpen,
  Tv,
  Bath,
  MapPin,
  GraduationCap,
  Calendar,
  School,
  X
} from "lucide-react";



// Importações de UI (Shadcn)
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { ContactSection } from "@/components/ContactSection"; // Mantenha seu componente se já existir


// --- DADOS E MOCKS ---

// Dados da Estrutura (Antigo About.tsx)
const features = [
  {
    icon: Bed,
    title: "4 Quartos Espaçosos",
    description: "2 suítes privativas com banheiro próprio para maior conforto e privacidade.",
  },
  {
    icon: Bath,
    title: "4 Banheiros",
    description: "Total de 4 banheiros completos, garantindo comodidade para todos.",
  },
  {
    icon: Wifi,
    title: "Internet 700 MB",
    description: "Fibra óptica de alta velocidade, ideal para estudos, EAD e entretenimento.",
  },
  {
    icon: BookOpen,
    title: "Ambiente de Estudos",
    description: "Espaços silenciosos e organizados, perfeitos para focar nos estudos.",
  },
  {
    icon: Tv,
    title: "Serviços de Streaming",
    description: "Acesso completo a todas as principais plataformas de streaming.",
  },
  {
    icon: HomeIcon,
    title: "Totalmente Mobiliada",
    description: "Casa equipada com tudo que você precisa: móveis, eletrodomésticos e utensílios.",
  },
];

// Dados da Galeria
const galleryImages = [
  { id: 1, url: Sala, alt: "Sala de estar" },
  { id: 2, url: Sala1, alt: "Sala de estar" },
  { id: 3, url: Sala2, alt: "Sala de estar" },
  { id: 4, url: "", alt: "Cozinha" },
  { id: 5, url: QuartoDory, alt: "Suite 1" },
  { id: 6, url: QuartoDory1, alt: "Suite 1" },
  { id: 7, url: QuartoDory3, alt: "Suite 1" },
  { id: 8, url: BanheiroDory, alt: "Banheiro Suite 1" },
  { id: 9, url: BanheiroDory2, alt: "Banheiro Suite 1" },
  { id: 10, url: QuartoTaliba, alt: "Suite 2" },
  { id: 11, url: "", alt: "Banheiro Suite 2" },
  { id: 12, url: Quartofalazada, alt: "Quarto 1" },
  { id: 13, url: Quartocasado, alt: "Quarto 2" },
  { id: 14, url: "", alt: "Lanhouse" },
  { id: 15, url: Banheiro, alt: "Banheiro" },
  { id: 16, url: Banheiro2, alt: "Banheiro" },
  { id: 17, url: "", alt: "Lavabo" },
  { id: 18, url: "", alt: "Fachada" },
  { id: 19, url: Lavanderia, alt: "Lavanderia" },
  { id: 20, url: AreaExterna, alt: "Área de externa" },
  { id: 21, url: AreaExterna2, alt: "Área de externa 2" },
];

// Dados dos Moradores
const residents = [
  {
    id: 1,
    name: "Carlos",
    nickname: "Falazada",
    surname: "Roberto",
    photo: falazadaFoto,
    hierarchy: "Decano",
    hierarchyType: "veteran",
    course: "Engenharia de Produção",
    period: "18.2",
    institution: "UFOP",
    city: "Coronel Fabriciano - MG",
  },
  {
    id: 2,
    name: "Luccas",
    nickname: "Talibã",
    surname: "Carneiro",
    photo: talibaFoto,
    hierarchy: "Morador",
    hierarchyType: "resident",
    course: "Sistemas de Informação",
    period: "20.1",
    institution: "UFOP",
    city: "Montes Claros - MG",
  },
  {
    id: 3,
    name: "Thiago",
    nickname: "Casado",
    surname: "Ker",
    photo: casadoFoto,
    hierarchy: "Morador",
    hierarchyType: "resident",
    course: "Sistemas de Informação",
    period: "23.2",
    institution: "UFOP",
    city: "Manhumirim - MG",
  },
  {
    id: 4,
    name: "Rafael",
    nickname: "Dory",
    surname: "Pereira",
    photo: doryFoto,
    hierarchy: "Morador",
    hierarchyType: "resident",
    course: "Sistemas de Informação",
    period: "24.2",
    institution: "UFOP",
    city: "Divinópolis - MG",
  },
  {
    id: 5,
    name: "Davi",
    nickname: "Chorão",
    surname: "Zanotti",
    photo: choraoFoto,
    hierarchy: "Bixo",
    hierarchyType: "bixete",
    course: "Sistemas de Informação",
    period: "24.1",
    institution: "UFOP",
    city: "Ipatinga - MG",
  },
];

const Home = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const getHierarchyColor = (type: string) => {
    switch (type) {
      case "veteran":
        return "bg-yellow-500 text-black hover:bg-yellow-600"; // Ajuste para Tailwind padrão se suas variaveis dubodi-yellow falharem
      case "resident":
        return "bg-red-600 text-white hover:bg-red-700";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <main className="min-h-screen">

      {/* --- 1. HERO SECTION --- */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/20 via-background to-accent/10 pt-20">

        {/* <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDIzMSwgNzYsIDYwLCAwLjA1KSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-30"></div> */}

        {/* Background Image */}
        {/* <div
          className="absolute inset-0 -z-30 bg-center bg-cover"
          style={{ backgroundImage: `url(${heroBackground})` }}
        /> */}

        <div className="absolute inset-0 -z-30 bg-center bg-cover brightness-75" style={{ backgroundImage: `url(${heroBackground})` }} />

        {/* Película / Overlay para legibilidade */}
        <div className="absolute inset-0 -z-20 bg-black/55" />

        {/* Pattern atual por cima da película (opcional) */}
        <div className="absolute inset-0 -z-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDIzMSwgNzYsIDYwLCAwLjA1KSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-30" />

        {/* Badge de Status */}
        <div className="absolute top-28 right-4 md:right-8 bg-accent text-accent-foreground px-6 py-3 rounded-full shadow-lg font-bold animate-pulse z-20 border border-primary/20">
          🏠 Vagas Abertas 26.1
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4 tracking-tight">
              República
              <span className="relative inline-block ml-3">
                {/* 1. Camada Vermelha (A mais grossa, fica no fundo) */}
                <span className="
      absolute inset-0 -z-20
      text-transparent
      font-extrabold
      [-webkit-text-stroke:18px_#D62828] md:[-webkit-text-stroke:18px_#D62828]
      [paint-order:stroke_fill]
    ">
                  DuBodi
                </span>

                {/* 2. Camada Branca (Grossa, fica no meio) */}
                <span className="
      absolute inset-0 -z-10
      text-transparent
      font-extrabold
      [-webkit-text-stroke:5px_white] md:[-webkit-text-stroke:7px_white]
      [paint-order:stroke_fill]
    ">
                  DuBodi
                </span>

                {/* 3. Camada Preta (Fina/Normal, fica na frente) */}
                <span className="
      relative z-10
      text-black
      font-extrabold
    ">
                  DuBodi
                </span>
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto font-light">
              Tradição, Amizade e Excelência Acadêmica em João Monlevade
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="text-lg font-semibold shadow-lg shadow-primary/20"
                onClick={() => scrollToSection('about')}
              >
                Conheça a Casa
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg font-semibold"
                onClick={() => scrollToSection('residents')}
              >
                Moradores
              </Button>
            </div>
          </div>
        </div>

        <button
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce cursor-pointer"
          aria-label="Rolar para baixo"
        >
          <ChevronDown size={40} />
        </button>
      </section>

      {/* --- 2. SOBRE (HISTÓRIA + ESTRUTURA) --- */}
      <section id="about" className="py-24 bg-background">
        <div className="container mx-auto px-4">

          {/* Parte da História */}
          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
              Nossa <span className="text-primary">História</span>
            </h2>
            <div className="bg-card p-8 md:p-12 rounded-2xl shadow-lg border-2 border-border/50">
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Fundada em 18 de março de 2010, a República DuBodi nasceu da iniciativa de quatro estudantes visionários. Inicialmente, o objetivo era acolher alunos que faziam parte da Ordem DeMolay, mas, com o passar dos anos, nossos horizontes se expandiram. Esse critério foi deixado de lado para acolher diversos alunos, prezando pela diversidade e pela integração.

Ao longo de mais de uma década, construímos um legado de companheirismo, união, parceria e respeito. Para nós, viver em república vai muito além de dividir um teto, trata-se de pensar no coletivo, criar vínculos verdadeiros e interagir com todos da casa e com outras repúblicas.

O nome e o símbolo do 'Bode' representam a nossa identidade, marcada pela persistência e pelo compromisso com a república. Aqui, repudiamos o individualismo e a falta de responsabilidade, buscando sempre desenvolver a parte social e acadêmica de cada morador, fazendo a DuBodi alcançar novos lugares.
                </p>

                {/* Ícones de Valores */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                  <div className="text-center p-6 bg-secondary/20 rounded-xl hover:bg-secondary/30 transition-colors">
                    <Users className="w-12 h-12 text-primary mx-auto mb-3" />
                    <h3 className="font-bold text-xl mb-2">Fraternidade</h3>
                    <p className="text-sm text-muted-foreground">União que vai além da graduação</p>
                  </div>
                  <div className="text-center p-6 bg-accent/10 rounded-xl hover:bg-accent/20 transition-colors">
                    <HomeIcon className="w-12 h-12 text-accent-foreground mx-auto mb-3" />
                    <h3 className="font-bold text-xl mb-2">Lar Acolhedor</h3>
                    <p className="text-sm text-muted-foreground">Conforto e estrutura de primeira</p>
                  </div>
                  <div className="text-center p-6 bg-secondary/20 rounded-xl hover:bg-secondary/30 transition-colors">
                    <Award className="w-12 h-12 text-primary mx-auto mb-3" />
                    <h3 className="font-bold text-xl mb-2">Tradição</h3>
                    <p className="text-sm text-muted-foreground">Valores que resistem ao tempo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Parte da Estrutura (Features) */}
          <div className="mt-24">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Estrutura <span className="text-primary">Premium</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Tudo que você precisa para uma experiência universitária completa
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-card p-8 rounded-2xl border-2 border-border hover:border-primary transition-all hover:shadow-xl hover:-translate-y-1 group"
                >
                  <div className="mb-6 inline-block">
                    <div className="bg-primary/10 p-4 rounded-xl group-hover:bg-primary/20 transition-colors group-hover:scale-110 transform duration-300">
                      <feature.icon className="w-10 h-10 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. GALERIA --- */}
      <section id="gallery" className="py-24 bg-secondary/10 border-y border-border/50">
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
            {galleryImages.map((image) => (
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <span className="text-white font-bold text-lg tracking-wide px-4 text-center">{image.alt}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Modal da Galeria */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-5xl p-0 bg-black/95 border-primary/20 overflow-hidden">
            {/* Botão de fechar customizado caso o DialogClose não esteja visível */}
            <DialogClose className="absolute right-4 top-4 z-50 rounded-full bg-black/50 p-2 text-white hover:bg-white/20">
              <X className="h-6 w-6" />
              <span className="sr-only">Fechar</span>
            </DialogClose>
            {selectedImage && (
              <div className="relative flex items-center justify-center h-full w-full">
                <img
                  src={selectedImage}
                  alt="Imagem ampliada"
                  className="max-h-[85vh] w-auto object-contain rounded-lg"
                />
              </div>
            )}
          </DialogContent>
        </Dialog>
      </section>

      {/* --- 4. MORADORES --- */}
      <section id="residents" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Nossos <span className="text-primary">Moradores</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Conheça as pessoas que fazem da DuBodi um lar especial
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {residents.map((resident) => (
              <Card
                key={resident.id}
                className="overflow-hidden border-2 hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group"
              >
                <CardHeader className="p-0">
                  <div className="relative aspect-square overflow-hidden bg-muted">
                    <img
                      src={resident.photo}
                      alt={`${resident.name} ${resident.surname}`}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="px-4 pt-4 pb-2">
                    <Badge
                      className={`w-full justify-center py-1.5 font-bold text-xs uppercase tracking-wide border-0 ${getHierarchyColor(resident.hierarchyType)}`}
                    >
                      {resident.hierarchy}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-4 space-y-3">
                  <div className="text-center">
                    <h3 className="font-bold text-lg leading-tight">
                      {resident.name} <span className="text-primary">"{resident.nickname}"</span> {resident.surname}
                    </h3>
                  </div>

                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-start gap-2">
                      <GraduationCap className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{resident.course}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>Período {resident.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <School className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{resident.institution}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{resident.city}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* --- 5. CONTATO --- */}
      <section id="contact" className="bg-gradient-to-t from-black to-background">
        <ContactSection />
      </section>

    </main>
  );
};

export default Home;