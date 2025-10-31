import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom right, hsl(var(--primary) / 0.3), hsl(var(--primary) / 0.2), hsl(var(--background)))',
        }}
      />
      
      <div className="container relative z-10 px-4 animate-fade-in">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Olá, sou{" "}
              <span 
                className="inline-block"
                style={{
                  background: 'linear-gradient(to right, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--secondary)))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Mariana Werneck
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Desenvolvedora Back-end especializada em criar APIs robustas e escaláveis
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              size="lg" 
              className="hover:opacity-90 transition-opacity font-semibold"
              style={{
                background: 'linear-gradient(to right, hsl(var(--primary)), hsl(var(--secondary)))',
                color: 'hsl(var(--primary-foreground))',
              }}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver Projetos
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="hover:opacity-80 transition-opacity"
              style={{
                borderColor: 'hsl(var(--primary) / 0.5)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'hsl(var(--primary) / 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Entrar em Contato
            </Button>
          </div>
          
          <div className="flex gap-4 justify-center pt-8">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full border transition-all hover:scale-110"
              style={{
                borderColor: 'hsl(var(--primary) / 0.3)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'hsl(var(--primary) / 0.2)';
                e.currentTarget.style.borderColor = 'hsl(var(--primary) / 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.borderColor = 'hsl(var(--primary) / 0.3)';
              }}
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full border transition-all hover:scale-110"
              style={{
                borderColor: 'hsl(var(--primary) / 0.3)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'hsl(var(--primary) / 0.2)';
                e.currentTarget.style.borderColor = 'hsl(var(--primary) / 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.borderColor = 'hsl(var(--primary) / 0.3)';
              }}
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:dev@example.com"
              className="p-3 rounded-full border transition-all hover:scale-110"
              style={{
                borderColor: 'hsl(var(--primary) / 0.3)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'hsl(var(--primary) / 0.2)';
                e.currentTarget.style.borderColor = 'hsl(var(--primary) / 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.borderColor = 'hsl(var(--primary) / 0.3)';
              }}
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
