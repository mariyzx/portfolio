import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import songify from "@/assets/songify.png";
import nest from "@/assets/nest-js.jpg";
import { Card } from "./ui/card";

const projects = [
  {
    title: "Songify!",
    description: "Aplicação full-stack, responsável por reproduzir músicas das mais variadas bandas e artistas, criar uma lista de músicas favoritas e editar o perfil da pessoa usuária logada.",
    image: songify,
    tags: ["Node.js", "MySQL", "Express", "Prisma", "React", "Styled Components"],
    demo: "",
    github: "https://github.com/mariyzx/songify",
  },
  {
    title: "Nest Shop!",
    description: "Uma API REST completa desenvolvida com NestJS para gerenciar uma loja online, incluindo gerenciamento de usuários, produtos e pedidos com autenticação JWT e cache Redis.",
    image: nest,
    tags: ["NestJS", "PostgreSQL", "Redis", "JWT", "Docker", "Redis"],
    demo: "",
    github: "https://github.com/mariyzx/nest-loja",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="space-y-12 animate-fade-in">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Meus <span className="text-primary">Projetos</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Confira alguns dos projetos que desenvolvi recentemente
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className="group overflow-hidden bg-card border-border hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                </div>
                
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3 pt-2">
                    {project.demo && <Button
                      size="sm"
                      className="flex-1 bg-primary hover:bg-primary/90"
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>}
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-primary/50 hover:bg-primary/10"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Código
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
