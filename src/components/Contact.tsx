import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 bg-card/30">
      <div className="container max-w-4xl mx-auto">
        <div className="space-y-12 animate-fade-in">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Entre em <span className="text-primary">Contato</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Tem um projeto em mente? Vamos conversar sobre como posso ajudar
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all text-center space-y-3">
              <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="font-semibold mb-1">Email</div>
                <a href="mailto:dev@example.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  dev@example.com
                </a>
              </div>
            </div>
            
            <div className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all text-center space-y-3">
              <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="font-semibold mb-1">Telefone</div>
                <a href="tel:+5511999999999" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  +55 (11) 99999-9999
                </a>
              </div>
            </div>
            
            <div className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all text-center space-y-3">
              <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="font-semibold mb-1">Localização</div>
                <div className="text-sm text-muted-foreground">
                  São Paulo, Brasil
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center pt-8">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-primary-foreground font-semibold"
              asChild
            >
              <a href="mailto:dev@example.com">
                Enviar Mensagem
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
