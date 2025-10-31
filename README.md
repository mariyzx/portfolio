# 💼 Portfólio Pessoal

Um portfólio moderno e responsivo desenvolvido com React, TypeScript, e Tailwind CSS, apresentando projetos, habilidades e informações de contato de forma elegante e interativa.

## ✨ Características

- 🎨 Design moderno e responsivo
- ⚡ Desenvolvido com Vite para performance otimizada
- 🎯 TypeScript para type-safety
- 💅 Estilização com Tailwind CSS
- 🧩 Componentes reutilizáveis com Radix UI
- 📱 Totalmente responsivo para todos os dispositivos
- 🎭 Animações suaves com tailwindcss-animate

## 🛠️ Tecnologias Utilizadas

- **React** 19.1.1 - Biblioteca JavaScript para construção de interfaces
- **TypeScript** 5.9.3 - Superset JavaScript com tipagem estática
- **Vite** 7.1.7 - Build tool e dev server
- **Tailwind CSS** 4.1.16 - Framework CSS utility-first
- **Radix UI** - Componentes UI acessíveis e não estilizados
- **React Router DOM** 7.9.5 - Roteamento para React
- **TanStack Query** 5.90.5 - Gerenciamento de estado assíncrono
- **Lucide React** - Ícones

## 📂 Estrutura do Projeto

```
portfolio/
├── src/
│   ├── components/        # Componentes reutilizáveis
│   │   ├── About.tsx      # Seção sobre
│   │   ├── Contact.tsx    # Seção de contato
│   │   ├── Footer.tsx     # Rodapé
│   │   ├── Hero.tsx       # Seção hero/banner
│   │   ├── Projects.tsx   # Seção de projetos
│   │   ├── Skills.tsx     # Seção de habilidades
│   │   └── ui/            # Componentes UI base
│   ├── pages/             # Páginas da aplicação
│   ├── hooks/             # Custom hooks
│   ├── lib/               # Utilitários
│   └── assets/            # Imagens e recursos
├── public/                # Arquivos públicos estáticos
└── package.json           # Dependências e scripts
```

## 🚀 Como Executar

### Pré-requisitos

- Node.js (versão 18 ou superior)
- Yarn ou npm

### Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd portfolio
```

2. Instale as dependências:
```bash
yarn install
# ou
npm install
```

3. Execute o servidor de desenvolvimento:
```bash
yarn dev
# ou
npm run dev
```

4. Abra o navegador em [http://localhost:5173](http://localhost:5173)

## 📦 Scripts Disponíveis

- `yarn dev` - Inicia o servidor de desenvolvimento
- `yarn build` - Gera a build de produção
- `yarn preview` - Visualiza a build de produção localmente
- `yarn lint` - Executa o linter ESLint

## 🏗️ Como Fazer Build

Para criar uma versão de produção otimizada:

```bash
yarn build
# ou
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`.

Para visualizar a build de produção:

```bash
yarn preview
# ou
npm run preview
```

## 🧪 Como Testar

Execute o linter para verificar a qualidade do código:

```bash
yarn lint
# ou
npm run lint
```

## 🎨 Personalização

Para personalizar o portfólio:

1. **Conteúdo**: Edite os componentes em `src/components/`
2. **Estilos**: Modifique as configurações do Tailwind em `tailwind.config.ts`
3. **Imagens**: Adicione suas imagens em `src/assets/`
4. **Cores e tema**: Ajuste as variáveis CSS em `src/index.css`

## 📝 Licença

Este projeto é de código aberto e está disponível sob a licença MIT.

## 👤 Autor

Desenvolvido com ❤️ por Mariana Werneck

---

⭐ Se este projeto foi útil para você, considere dar uma estrela no repositório!
