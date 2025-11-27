import { Bed, Wifi, BookOpen, Tv, Home, Bath } from "lucide-react";

export const About = () => {
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
      icon: Home,
      title: "Totalmente Mobiliada",
      description: "Casa equipada com tudo que você precisa: móveis, eletrodomésticos e utensílios.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nossa <span className="text-primary">Estrutura</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tudo que você precisa para uma experiência universitária completa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-2xl border-2 border-border hover:border-primary transition-all hover:shadow-xl group"
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
    </section>
  );
};
