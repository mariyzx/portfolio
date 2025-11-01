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
                Sou desenvolvedora Full-stack com foco em Node.js (Express) no
                back-end e React / React Native no front-end. Iniciei minha
                jornada na Trybe, onde aprendi as bases sólidas do
                desenvolvimento web, e hoje curso Ciência da Computação,
                aprofundando meus conhecimentos em arquitetura de software e
                inteligência artificial.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Tenho experiência na criação e manutenção de aplicações web e
                mobile, participando ativamente de processos ágeis (Scrum) e
                contribuindo para soluções que unem performance, escalabilidade
                e boas práticas de código. Acredito que tecnologia é sobre
                resolver problemas reais, e busco sempre escrever código limpo,
                eficiente e com propósito.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10">
                <div className="text-4xl font-bold text-primary mb-2">3+</div>
                <div className="text-muted-foreground">Anos de Experiência</div>
              </div>
              <div className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10">
                <div className="text-4xl font-bold text-primary mb-2">10+</div>
                <div className="text-muted-foreground">Projetos Completos</div>
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
