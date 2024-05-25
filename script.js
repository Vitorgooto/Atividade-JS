// script.js

document.addEventListener("DOMContentLoaded", () => {
    // Função para criar e configurar um elemento
    function createElement(tag, attributes = {}, content = '') {
      const element = document.createElement(tag);
      for (let key in attributes) {
        element.setAttribute(key, attributes[key]);
      }
      if (typeof content === 'string') {
        element.innerHTML = content;
      } else if (content instanceof Node) {
        element.appendChild(content);
      }
      return element;
    }
  
    // Header
    const header = document.querySelector('header');
    const headerTitle = createElement('h1', {}, 'Squirtle');
    header.appendChild(headerTitle);
  
    // Navigation
    const nav = document.querySelector('nav');
    const navList = createElement('ul');
    const navItems = [
      { href: '#info-squirtle', text: 'Informações sobre Squirtle' },
      { href: '#caracteristicas', text: 'Características' },
      { href: '#curiosidades', text: 'Curiosidades' },
      { href: '#artigo-squirtle', text: 'Artigo sobre Squirtle' },
      { href: '#recursos', text: 'Recursos Adicionais' },
      { href: '#evolucao', text: 'Evolução' }
    ];
    navItems.forEach(item => {
      const li = createElement('li');
      const a = createElement('a', { href: item.href }, item.text);
      li.appendChild(a);
      navList.appendChild(li);
    });
    nav.appendChild(navList);
  
    // Main content
    const main = document.querySelector('main');
  
    // Sections data
    const sectionsData = [
      {
        id: 'info-squirtle',
        title: 'Informações sobre Squirtle',
        content: `
          <div>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png" alt="Squirtle 1" />
            <img src="https://archives.bulbagarden.net/media/upload/thumb/7/79/Squirtle_SSBU.png/200px-Squirtle_SSBU.png" alt="Squirtle 2" />
          </div>
          <p>Squirtle é um Pokémon do tipo Água. É o Pokémon inicial da região de Kanto e evolui para Wartortle.</p>
        `
      },
      {
        id: 'caracteristicas',
        title: 'Características',
        content: `
          <p>Squirtle é conhecido por sua concha nas costas, que oferece proteção adicional. Ele possui ataques de água poderosos, como Water Gun e Hydro Pump.</p>
        `
      },
      {
        id: 'curiosidades',
        title: 'Curiosidades',
        content: `
          <ul>
            <li>Squirtle é um dos Pokémon mais populares e adoráveis.</li>
            <li>Seu nome deriva das palavras "squirrel" (esquilo) e "turtle" (tartaruga).</li>
            <li>Squirtle é frequentemente escolhido por treinadores para começar sua jornada Pokémon.</li>
          </ul>
        `
      },
      {
        id: 'artigo-squirtle',
        title: 'Squirtle: O Amigo Aquático',
        content: `
          <p>Squirtle, com sua aparência simpática e sua habilidade em controlar a água, conquistou o coração de treinadores Pokémon ao redor do mundo. Sendo o inicial de água na região de Kanto, Squirtle é uma escolha popular para aqueles que buscam equilíbrio e versatilidade em suas equipes.</p>
          <p>Sua concha nas costas não apenas oferece proteção, mas também é um símbolo de resistência. Ao evoluir para Wartortle e, posteriormente, para Blastoise, Squirtle se transforma em uma força formidável, dominando ataques aquáticos que podem surpreender adversários em batalhas.</p>
          <p>Além de suas habilidades de batalha, Squirtle é conhecido por seu carisma. Treinadores muitas vezes descrevem a relação com seu Squirtle como uma amizade profunda, tornando-o não apenas um companheiro de lutas, mas um amigo leal ao longo de suas jornadas.</p>
        `
      },
      {
        id: 'recursos',
        title: 'Recursos Adicionais',
        content: `
          <ul>
            <li><a href="https://www.pokemon.com/br/pokedex/squirtle" target="_blank">Pokédex - Squirtle</a></li>
            <li><a href="https://bulbapedia.bulbagarden.net/wiki/Squirtle_(Pokémon)" target="_blank">Bulbapedia - Squirtle</a></li>
          </ul>
        `
      },
      {
        id: 'evolucao',
        title: 'Evoluções',
        content: `
          <ul>
            <li>
              <figure>
                <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png" alt="Squirtle" />
                <figcaption>1. Squirtle</figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/008.png" alt="Wartortle" />
                <figcaption>2. Wartortle</figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/009.png" alt="Blastoise" />
                <figcaption>3. Blastoise</figcaption>
              </figure>
            </li>
          </ul>
        `
      }
    ];
  
    // Criar e adicionar as seções ao main
    sectionsData.forEach(sectionData => {
      const section = createElement('section', { id: sectionData.id });
      const h2 = createElement('h2', {}, sectionData.title);
      section.appendChild(h2);
      section.innerHTML += sectionData.content;
      main.appendChild(section);
    });
  
    // Footer
    const footer = document.querySelector('footer');
    const footerContent = `
      <p>&copy; 2024 Página do Pokémon Squirtle. Todos os direitos reservados.</p>
      <p><a href="#header">Voltar para o topo</a></p>
      <p><a href="mailto:contato@squirtlepage.com">Contato via e-mail</a></p>
      <p><a href="tel:+5555555555">Telefone: (55) 5555-5555</a></p>
    `;
    footer.innerHTML = footerContent;
  });
  