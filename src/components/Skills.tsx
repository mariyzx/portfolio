import { Code2, Database, Layout, Smartphone, Server, Palette } from "lucide-react";

const skills = [
  {
    icon: Server,
    title: "Backend Development",
    description: "Node.js, Python, Java, APIs REST, GraphQL",
  },
  {
    icon: Database,
    title: "Databases & Cloud",
    description: "PostgreSQL, MongoDB, Redis, AWS, Docker",
  },
  {
    icon: Code2,
    title: "Arquitetura & Padrões",
    description: "Microservices, Clean Architecture, SOLID, TDD",
  },
  {
    icon: Layout,
    title: "Frontend Development",
    description: "React, TypeScript, Next.js, Tailwind CSS",
  },
  {
    icon: Smartphone,
    title: "DevOps & CI/CD",
    description: "Git, GitHub Actions, Jenkins, Kubernetes",
  },
  {
    icon: Palette,
    title: "Ferramentas",
    description: "VS Code, Postman, Swagger, Linux",
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 bg-card/30">
      <div className="container max-w-6xl mx-auto">
        <div className="space-y-12 animate-fade-in">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Minhas <span className="text-primary">Habilidades</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.title}
                  className="group p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">{skill.title}</h3>
                      <p className="text-muted-foreground text-sm">{skill.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
