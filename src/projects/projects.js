const songify = require('../assets/thumbs/songify.png');
const trybeer = require('../assets/thumbs/trybeer.jpg');
const recipes = require('../assets/thumbs/recipes-app.png');
const tfc = require('../assets/thumbs/tfc.PNG');
const car_shop = require('../assets/thumbs/car_shop.png');

module.exports = [
  {
    name: 'Songify',
    img: songify,
    links: {
      github: 'https://github.com/mariyzx/songify',
    },
    description: 'Aplicação full-stack de busca de músicas e álbuns, é possível favoritar uma faixa específica do álbum, editar perfil e verificar as faixas favoritadas.',
    tech: ['ReactJS', 'CSS']
  },
  {
    name: 'Recipes App',
    img: recipes,
    links: {
      github: 'https://github.com/mariyzx/Recipes-App',
    },
    description: 'Projeto final de front-end! Aplicação que retorna receitas de comidas e bebidas, com filtros, tela de receitas favoritadas e receitas concluídas.',
    tech: ['ReactJS', 'CSS', 'Context API', 'Styled Components']
  },
  {
    name: 'Trybeer',
    img: trybeer,
    links: {
      github: 'https://github.com/mariyzx/trybeer',
    },
    description: 'Projeto final de back-end! Aplicação full-stack de delivery de cerveja, onde é possível logar tanto como usuário ou vendedor.',
    tech: ['ReactJS', 'MySQL', 'Node.js', 'API', 'RTL']
  },
  {
    name: 'TFC',
    img: tfc,
    links: {
      preview: 'https://tfc-mariyzx.vercel.app/leaderboard',
      github: 'https://github.com/mariyzx/tfc',
    },
    description: 'API para um site informativo de partidas e classificações de futebol, com listagem de times, partidas e autenticação do usuário.',
    tech: ['Node.js', 'MySQL', 'Docker', 'Typescript', 'Sequelize']
  },
  {
    name: 'Car Shop',
    img: car_shop,
    links: {
      github: 'https://github.com/mariyzx/car-shop'
    },
    description: 'API para gerenciar uma concessionária de veículos, utilizando o banco de dados MongoDB através do framework Mongoose.',
    tech: ['Typescript', 'MongoDB', 'Mongoose', 'API']
  }
]