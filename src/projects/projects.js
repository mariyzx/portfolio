const trybetunes = require('./img/trybetunes.PNG');
const trybewallet = require('./img/trybewallet3.png');
const recipes = require('./img/recipes-app.png');

module.exports = [
  {
    name: 'Trybetunes',
    img: trybetunes,
    links: {
      preview: 'https://trybe-trybetunes.vercel.app/',
      github: 'https://github.com/mariyzx/trybe-trybetunes',
    },
    description: 'Aplicação de busca de músicas e álbuns, é possível favoritar uma faixa específica do álbum, editar perfil e verificar as faixas favoritadas.',
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