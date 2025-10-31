export const About = () => {
    return (
      <section id="about" className="py-24 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="space-y-12 animate-fade-in">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                Sobre <span className="text-primary">Mim</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Sou uma desenvolvedora focada em back-end, apaixonada por criar sistemas 
                  robustos, APIs escaláveis e arquiteturas eficientes. Minha especialidade 
                  está em transformar requisitos complexos em soluções técnicas elegantes 
                  e bem estruturadas.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Com sólida experiência também em front-end, entendo o ciclo completo do 
                  desenvolvimento, o que me permite criar integrações perfeitas entre cliente 
                  e servidor. Estou sempre explorando novas tecnologias e buscando as melhores 
                  práticas em arquitetura de software.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10">
                  <div className="text-4xl font-bold text-primary mb-2">5+</div>
                  <div className="text-muted-foreground">Anos de Experiência</div>
                </div>
                <div className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10">
                  <div className="text-4xl font-bold text-primary mb-2">50+</div>
                  <div className="text-muted-foreground">Projetos Completos</div>
                </div>
                <div className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10">
                  <div className="text-4xl font-bold text-primary mb-2">30+</div>
                  <div className="text-muted-foreground">Clientes Satisfeitos</div>
                </div>
                <div className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10">
                  <div className="text-4xl font-bold text-primary mb-2">15+</div>
                  <div className="text-muted-foreground">Tecnologias</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  