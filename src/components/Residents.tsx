import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, GraduationCap, Calendar, School } from "lucide-react";

export const Residents = () => {
  const residents = [
    {
      id: 1,
      name: "Carlos",
      nickname: "Falazada",
      surname: "Roberto",
      photo: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&fit=crop",
      hierarchy: "Decano",
      hierarchyType: "veteran",
      course: "Engenharia de Produção",
      period: "18.2",
      institution: "UFOP",
      city: "Coronel Fabriciano - MG",
    },
    {
      id: 2,
      name: "Lucas",
      nickname: "Talibã",
      surname: "Carneiro",
      photo: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400&h=400&fit=crop",
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
      photo: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400&h=400&fit=crop",
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
      photo: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=400&fit=crop",
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
      photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
      hierarchy: "Bixo",
      hierarchyType: "freshman",
      course: "Sistemas de Informação",
      period: "24.1",
      institution: "UFOP",
      city: "Ipatinga - MG",
    },
  ];

  const getHierarchyColor = (type: string) => {
    switch (type) {
      case "veteran":
        return "bg-dubodi-yellow text-dubodi-black";
      case "freshman":
        return "bg-primary text-white";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="residents" className="py-20 bg-gradient-subtle">
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
                    className={`w-full justify-center py-2 font-bold text-sm uppercase tracking-wide ${getHierarchyColor(resident.hierarchyType)}`}
                  >
                    {resident.hierarchy}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-4 space-y-3">
                <div className="text-center">
                  <h3 className="font-bold text-lg leading-tight">
                    {resident.name} "{resident.nickname}" {resident.surname}
                  </h3>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <GraduationCap className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{resident.course}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">Período {resident.period}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <School className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{resident.institution}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{resident.city}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
