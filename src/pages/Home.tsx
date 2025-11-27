import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { ChevronDown, Users, Home as HomeIcon, Award } from "lucide-react";
//import logoDubodi from "@/assets/logo-dubodi.png";
import { ContactSection } from "../components/ContactSection";

const Home = () => {
  const scrollToHistory = () => {
    document.getElementById("history")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/20 via-background to-accent/10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDIzMSwgNzYsIDYwLCAwLjA1KSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-30"></div>

        {/* Badge de Status de Vagas */}
        <div className="absolute top-24 right-4 md:right-8 bg-accent text-accent-foreground px-6 py-3 rounded-full shadow-lg font-bold animate-pulse">
          🏠 Vagas Abertas 25.1
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="text-center animate-fade-in">
            <div className="mb-8 flex justify-center">
              {/* <img
                src={logoDubodi}
                alt="Logo República DuBodi"
                className="w-48 h-48 md:w-64 md:h-64 drop-shadow-2xl animate-scale-in hover:scale-105 transition-transform"
              /> */}
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4 tracking-tight">
              República <span className="text-primary">DuBodi</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto font-light">
              Tradição, Amizade e Excelência Acadêmica em Ouro Preto
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/about">
                <Button size="lg" className="text-lg font-semibold">
                  Conheça a Casa
                </Button>
              </Link>
              <Link to="/residents">
                <Button size="lg" variant="outline" className="text-lg font-semibold">
                  Moradores
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <button
          onClick={scrollToHistory}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
          aria-label="Rolar para baixo"
        >
          <ChevronDown size={40} />
        </button>
      </section>

      {/* Nossa História */}
      <section id="history" className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
              Nossa <span className="text-primary">História</span>
            </h2>

            <div className="bg-card p-8 md:p-12 rounded-2xl shadow-lg border-2 border-border">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Fundada no coração histórico de Ouro Preto, a República DuBodi nasceu do sonho
                  compartilhado de estudantes que buscavam mais do que apenas um lugar para morar.
                  Queríamos criar um verdadeiro lar, onde a tradição republicana se encontrasse com
                  a modernidade e o acolhimento.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Nossa casa carrega em seu nome a essência da união: "Du" representa a dualidade,
                  o equilíbrio entre os estudos e a vida social; "Bodi" remete ao bode, símbolo de
                  persistência e determinação, características que definem cada um de nossos
                  moradores ao longo da jornada universitária.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Ao longo dos anos, a DuBodi se tornou referência entre as repúblicas de Ouro
                  Preto, sendo reconhecida não apenas pela excelência acadêmica de seus membros,
                  mas também pelo ambiente acolhedor, pela organização impecável e pelo respeito às
                  tradições republicanas que cultivamos com carinho.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                  <div className="text-center p-6 bg-primary/5 rounded-xl">
                    <Users className="w-12 h-12 text-primary mx-auto mb-3" />
                    <h3 className="font-bold text-xl mb-2">Fraternidade</h3>
                    <p className="text-sm text-muted-foreground">
                      União que vai além da graduação
                    </p>
                  </div>

                  <div className="text-center p-6 bg-accent/10 rounded-xl">
                    <HomeIcon className="w-12 h-12 text-accent-foreground mx-auto mb-3" />
                    <h3 className="font-bold text-xl mb-2">Lar Acolhedor</h3>
                    <p className="text-sm text-muted-foreground">
                      Conforto e estrutura de primeira
                    </p>
                  </div>

                  <div className="text-center p-6 bg-primary/5 rounded-xl">
                    <Award className="w-12 h-12 text-primary mx-auto mb-3" />
                    <h3 className="font-bold text-xl mb-2">Tradição</h3>
                    <p className="text-sm text-muted-foreground">
                      Valores que resistem ao tempo
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  );
};

export default Home;
