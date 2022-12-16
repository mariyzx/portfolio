const trybetunes = require('../assets/thumbs/trybetunes.PNG');
const trybewallet = require('../assets/thumbs/trybewallet3.png');
const recipes = require('../assets/thumbs/recipes-app.png');
const tfc = require('../assets/thumbs/tfc.PNG');

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
      preview: 'http://projeto-receitas.vercel.app/',
      github: 'https://github.com/mariyzx/projeto-receitas',
    },
    description: 'Projeto final de Front-End! Aplicação que retorna receitas de comidas e bebidas, com filtros, tela de receitas favoritadas e receitas concluídas.',
    tech: ['ReactJS', 'CSS', 'Context API', 'Styled Components']
  },
  {
    name: 'TFC',
    img: tfc,
    links: {
      preview: 'https://tfc-mariyzx.vercel.app/leaderboard',
      github: 'https://github.com/mariyzx/tfc',
    },
    description: 'API para um site informativo de partidas e classificações de futebol, com listagem de times, partidas e autenticação do usuário. API documentada com o Swagger.',
    tech: ['Node.js', 'MySQL', 'Docker', 'Typescript', 'Sequelize']
  }
]