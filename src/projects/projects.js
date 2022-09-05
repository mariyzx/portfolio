const shoppingCart = require('./img/shoppingCart2.png');
const systemSolar = require('./img/systemsolar3.png');
const tryunfo = require('./img/tryunfo2.png');
const trybetunes = require('./img/trybetunes.PNG');
const trybewallet = require('./img/trybewallet3.png');
const recipes = require('./img/recipes-app.png');

module.exports = [
  {
    name: 'Shopping Cart',
    img: shoppingCart,
    links: {
      preview: 'https://mariyzx.github.io/trybe-shopping-cart/',
      github: 'https://github.com/mariyzx/trybe-shopping-cart',
    },
    description: 'Aplicação de loja virtual utilizando API do Mercado Livre, capaz de salvar os itens do carrinho do usuáiro.',
    tech: ['HTML', 'CSS', 'JavaScript', 'LocalStorage']
  },
  {
    name: 'Solar System',
    img: systemSolar,
    links: {
      preview: 'https://trybe-solar-system-beta.vercel.app/',
      github: 'https://github.com/mariyzx/trybe-solar-system',
    },
    description: 'Aplicação utilizada para listar todos os planetas do sistema solar e alguns missões espaciais.',
    tech: ['ReactJS', 'CSS']
  },
  {
    name: 'Tryunfo',
    img: tryunfo,
    links: {
      preview: 'https://trybe-tryunfo.vercel.app/',
      github: 'https://github.com/mariyzx/trybe-tryunfo',
    },
    description: 'Aplicação no estilo Super Trunfo, onde é possível criar novas cartas e listar cartas já existentes no baralho.',
    tech: ['ReactJS', 'CSS']
  },
  {
    name: 'Trybetunes',
    img: trybetunes,
    links: {
      preview: 'https://trybe-trybetunes.vercel.app/',
      github: 'https://github.com/mariyzx/trybe-trybetunes',
    },
    description: 'Aplicação para pesquisar e listar àlbuns e músicas de várias bandas e artistas.',
    tech: ['ReactJS', 'CSS']
  },
  {
    name: 'Trybewallet',
    img: trybewallet,
    links: {
      preview: 'https://trybe-trybewallet-nu.vercel.app/',
      github: 'https://github.com/mariyzx/trybe-trybewallet',
    },
    description: 'Aplicação que computa gastos em diferentes moedas e converte tudo para uma única moeda, utilizando uma API de Cotação de Moedas.',
    tech: ['Redux', 'ReactJS', 'CSS', 'API', 'RTL']
  },
  {
    name: 'Recipes App',
    img: recipes,
    links: {
      preview: 'https://recipes-app-mariyzx.vercel.app/',
      github: 'https://github.com/mariyzx/Recipes-App',
    },
    description: 'Projeto final de Front-End! Aplicação que retorna receitas de comidas e bebidas, com filtros, tela de receitas favoritadas e receitas concluídas.',
    tech: ['ReactJS', 'CSS', 'Context API', 'RTL', 'API']
  }
]