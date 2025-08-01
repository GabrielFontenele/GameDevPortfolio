import type { Post } from '../../types/Post'

// Função para corrigir caminhos de imagens para GitHub Pages
const getImagePath = (path: string) => {
  // Se estiver em desenvolvimento, usa o caminho normal
  if (import.meta.env.DEV) {
    return path
  }
  // Se estiver em produção, adiciona o base path
  return `/GameDevPortfolio${path}`
}

export const pauEPedraPost: Post = {
  id: 'pau-e-pedra',
  title: 'Pau e Pedra: Desenvolvimento Completo de Jogo Multiplayer em Unreal Engine 5',
  titleEn: 'Pau e Pedra: Complete Multiplayer Game Development in Unreal Engine 5',
  date: '2024-01-15',
  year: 2024,
  bannerType: 1,
  featured: true,
  image: getImagePath('/images/pauepedra/forward1.png'),
  video: undefined,
  excerpt: 'Desenvolvimento completo de um jogo multiplayer em Unreal Engine 5, demonstrando proficiência em sistemas complexos, otimização de performance e integração de tecnologias avançadas para criar uma experiência de jogo robusta e escalável.',
  excerptEn: 'Complete development of a multiplayer game in Unreal Engine 5, demonstrating proficiency in complex systems, performance optimization and integration of advanced technologies to create a robust and scalable gaming experience.',
  content: `
      <h2>Visão Geral do Projeto</h2>
      <p>O projeto "Pau e Pedra" surgiu como uma iniciativa pessoal para entender, na prática, o que seria necessário aprender e desenvolver para completar um jogo simples na Unreal Engine. A proposta era construir uma base sólida de conhecimento técnico e estrutural que pudesse ser reutilizada em projetos futuros. Durante o desenvolvimento, explorei desde sistemas de gameplay até otimizações específicas de performance, com foco principal em criar gameplay simples usando o Gameplay Ability System (GAS) da Unreal, com suporte a multiplayer.</p>

      <h2>Desenvolvimento de Sistemas</h2>
      <p>Durante o projeto, implementei uma variedade de sistemas fundamentais. Um dos pilares foi o uso do GAS, onde trabalhei com atributos dinâmicos, sistema de itens, animações editadas usando Level Sequence, e uma estrutura baseada em tags para controle de estado e interações. Esse sistema me permitiu criar uma base versátil para habilidades, equipáveis e lógica de combate, além de integrar com outros sistemas como o de input.</p>
      
      <h4>Mecânica de Rebote de Pedra</h4>
      <p>Uma das principais interações desenvolvidas no projeto foi a mecânica de rebote de pedra entre jogadores. Quando uma pedra é arremessada, outro jogador pode interceptá-la com o timing correto, usando física sincronizada via rede. Essa funcionalidade foi construída com foco total no funcionamento multiplayer, garantindo que a física da pedra — incluindo velocidade, direção e colisões — seja corretamente replicada entre servidor e clientes.</p>

      <video controls>
        <source src="${getImagePath('/video/pauepedra/hit.mp4')}" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <p>Essa mecânica serviu como um ótimo teste para replicação de física em tempo real, validação de inputs e controle de latência em interações responsivas entre jogadores.</p>

      <p>A interface foi toda construída com inspiração em projetos como o UI Material Lab, usando Signed Distance Fields (SDF) para compor botões, animações de fundo e bordas com clareza visual e boa performance. Os ícones da UI foram tratados como fontes com SVGs para garantir leveza. Também desenvolvi sistemas de configuração visual e sonora, permitindo salvar e carregar preferências de input, áudio e gráficos, garantindo persistência das escolhas do jogador entre sessões.</p>

      <div class="image-comparison">
        <img src="${getImagePath('/images/pauepedra/settings.png')}" alt="LODs Gerados no Blender" />
        <img src="${getImagePath('/images/pauepedra/customization.png')}" alt="Customização de Personagem" />
      </div>

      <h2>Multiplayer e Conectividade</h2>
      <p>Para suportar uma experiência multiplayer estável, implementei Seamless Travel, permitindo transições suaves entre mapas sem perder a conexão dos jogadores. Integrei também com a Steam para suporte completo a lobbies, persistência de personagens e até mesmo um sistema inicial de DLCs para venda de skins.</p>

      <p>Durante esse processo, me deparei com limitações técnicas envolvendo o World Partition, que dificultava o uso do Seamless Travel. Optei então por remover o sistema e refazer um dos mapas manualmente, garantindo maior controle sobre a experiência online.</p>

      <h2>Tratamento de Assets e Materiais</h2>
      <p>Como ainda não tenho domínio avançado na criação de assets próprios, utilizei conteúdos da Unreal Store (Fab) e da Quixel. No entanto, esses assets vinham com configurações bastante diferentes entre si, o que exigiu um esforço grande de padronização.</p>

      <p>Implementei um sistema de materiais baseado no padrão PBR ORM(e) (occlusion, roughness, metallic), utilizando o plugin Texture Graph da Unreal para converter texturas de pacotes que não estavam nesse formato. Centralizei o uso de materiais com um único material pai, com variações geradas por instâncias, facilitando ajustes e melhorando a performance.</p>

      <p>Além disso, passei bastante tempo ajustando meshes problemáticas, muitas sem LODs, com colisões mal configuradas ou até com planos duplicados e normais invertidas. Para resolver isso, exportei as malhas para o Blender, onde criei LODs manuais e corrigi geometrias que o sistema automático da Unreal não conseguia lidar adequadamente.</p>

      <h4>LODs Gerados no Blender e Tratamento de Vegetação</h4>
      <div class="image-comparison">
        <img src="${getImagePath('/images/pauepedra/blenderlod.png')}" alt="LODs Gerados no Blender" />
        <img src="${getImagePath('/images/pauepedra/foliageOverlapPlanes.png')}" alt="Tratamento de Vegetação" />
      </div>

      <h2>Otimização de Performance</h2>
      <p>Inicialmente o projeto usava tecnologias avançadas como Lumen, Nanite, Virtual Shadow Maps, Deferred Rendering e Shader Model 6 (SM6). No entanto, ao testar em uma GTX 1050 Ti (o hardware-alvo), percebi que o desempenho não estava satisfatório.</p>

      <p>Para atingir a meta de 60fps em 1080p, precisei desabilitar todas essas tecnologias e migrar para um pipeline mais leve, com Forward Rendering e Shader Model 5 (SM5). Isso exigiu ajustes significativos em materiais, iluminação e pós-processamento.</p>

      <p>Também tive que substituir o sistema de água nativo da Unreal, que era incompatível sem SM6. No lugar, modifiquei um material de água de um pacote externo, alterando o comportamento das ondas e o blend nas bordas para se adequar melhor ao projeto.</p>

      <p>Imagens comparativas entre Deferred e Forward Rendering foram incluídas no portfólio para ilustrar os impactos visuais dessas mudanças e justificar as escolhas técnicas.</p>

      <h4>Deferred vs Forward</h4>
      <div class="image-comparison">
        <img src="${getImagePath('/images/pauepedra/deferred1.png')}" alt="Deferred Rendering - Cena Externa" />
        <img src="${getImagePath('/images/pauepedra/forward1.png')}" alt="Forward Rendering - Cena Externa" />
      </div>

      <div class="image-comparison">
        <img src="${getImagePath('/images/pauepedra/deferred2.png')}" alt="Deferred Rendering - Cena Interna" />
        <img src="${getImagePath('/images/pauepedra/forward2.png')}" alt="Forward Rendering - Cena Interna" />
      </div>

      <div class="image-comparison">
        <img src="${getImagePath('/images/pauepedra/deferred3.png')}" alt="Deferred Rendering - Detalhes" />
        <img src="${getImagePath('/images/pauepedra/forward3.png')}" alt="Forward Rendering - Detalhes" />
      </div>

      <div class="image-comparison">
        <img src="${getImagePath('/images/pauepedra/waterBefore.png')}" alt="Sistema de Água - Antes" />
        <img src="${getImagePath('/images/pauepedra/waterAfter.png')}" alt="Sistema de Água - Depois" />
      </div>

      <h2>Conteúdo Procedural e Ferramentas</h2>
      <p>Utilizei o sistema PCG (Procedural Content Generation) da Unreal para criar variações de cenário, especialmente em estruturas mais complexas. Para casos mais simples, como geração de terrenos ou chão, desenvolvi um sistema procedural próprio em Blueprint.</p>

      <h2>Áudio e Efeitos Visuais</h2>
      <p>Implementei um sistema de áudio que funciona corretamente em multiplayer, usando Physical Materials para determinar qual som deve ser tocado com base na superfície. Também usei pacotes de áudio prontos para efeitos e ambientação, mas ajustei os volumes e mixagens com Sound Classes para melhor controle.</p>

      <p>Adicionei efeitos de pós-processamento para representar danos, destacar itens e reforçar a atmosfera dos mapas.</p>

      <h2>Loading Screen e Compilação de Shaders</h2>
      <p>Adaptei o sistema de Loading Screen do projeto Lyra da Unreal Engine. Removi dependências desnecessárias e deixei o sistema enxuto, com foco em esperar a compilação e o carregamento de shaders, evitando telas congeladas e melhorando a experiência do usuário no primeiro carregamento de mapas ou transição de fases.</p>

      <h2>Conclusão e Aprendizados</h2>
      <p>O desenvolvimento de "Pau e Pedra" foi essencial para meu crescimento como desenvolvedor. Aprendi a planejar a arquitetura do projeto desde o início, lidar com limitações de hardware, e encontrar soluções práticas para problemas técnicos diversos.</p>

      <p>Mais importante ainda, esse projeto me permitiu construir uma fundação reutilizável: sistemas de input, UI, configuração, otimização e multiplayer que poderei aplicar e expandir em jogos futuros.</p>

      <p>Com ele, demonstro proficiência em Unreal Engine 5, domínio de pipelines otimizados, conhecimento técnico de sistemas multiplayer e a capacidade de adaptar soluções comerciais para cenários reais. Meu próximo passo será utilizar essa base para desenvolver novos modos de jogo e integrar tecnologias mais avançadas, agora com uma estrutura mais sólida.</p>
    `,
  contentEn: `
      <h2>Project Overview</h2>
      <p>The "Pau e Pedra" project emerged as a personal initiative to understand, in practice, what would be necessary to learn and develop to complete a simple game in Unreal Engine. The proposal was to build a solid foundation of technical and structural knowledge that could be reused in future projects. Throughout development, I explored from gameplay systems to specific performance optimizations, with the main focus on creating simple gameplay using Unreal's Gameplay Ability System (GAS), with multiplayer support.</p>

      <h2>System Development</h2>
      <p>During the project, I implemented a variety of fundamental systems. One of the pillars was the use of GAS, where I worked with dynamic attributes, item system, animations edited using Level Sequence, and a tag-based structure for state control and interactions. This system allowed me to create a versatile foundation for abilities, equipables and combat logic, in addition to integrating with other systems such as input.</p>
      
      <h4>Stone Rebound Mechanics</h4>
      <p>One of the main interactions developed in the project was the stone rebound mechanics between players. When a stone is thrown, another player can intercept it with the correct timing, using synchronized physics via network. This functionality was built with complete focus on multiplayer operation, ensuring that the stone's physics — including velocity, direction and collisions — are correctly replicated between server and clients.</p>

      <video controls>
        <source src="${getImagePath('/video/pauepedra/hit.mp4')}" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <p>This mechanic served as an excellent test for real-time physics replication, input validation and latency control in responsive interactions between players.</p>

      <p>The interface was entirely built with inspiration from projects like UI Material Lab, using Signed Distance Fields (SDF) to compose buttons, background animations and borders with visual clarity and good performance. UI icons were treated as fonts with SVGs to ensure lightness. I also developed visual and audio configuration systems, allowing to save and load input, audio and graphics preferences, ensuring persistence of player choices between sessions.</p>

      <div class="image-comparison">
        <img src="${getImagePath('/images/pauepedra/settings.png')}" alt="Settings Interface" />
        <img src="${getImagePath('/images/pauepedra/customization.png')}" alt="Character Customization" />
      </div>

      <h2>Multiplayer and Connectivity</h2>
      <p>To support a stable multiplayer experience, I implemented Seamless Travel, allowing smooth transitions between maps without losing player connections. I also integrated with Steam for complete lobby support, character persistence and even an initial DLC system for skin sales.</p>

      <p>During this process, I encountered technical limitations involving World Partition, which made using Seamless Travel difficult. I then chose to remove the system and manually redo one of the maps, ensuring greater control over the online experience.</p>

      <h2>Asset and Material Treatment</h2>
      <p>As I don't yet have advanced mastery in creating my own assets, I used content from the Unreal Store (Fab) and Quixel. However, these assets came with quite different configurations from each other, which required a great effort of standardization.</p>

      <p>I implemented a material system based on the PBR ORM(e) (occlusion, roughness, metallic) pattern, using the Unreal Texture Graph plugin to convert textures from packages that weren't in this format. I centralized material usage with a single parent material, with variations generated by instances, facilitating adjustments and improving performance.</p>

      <p>Additionally, I spent a lot of time adjusting problematic meshes, many without LODs, with poorly configured collisions or even with duplicate planes and inverted normals. To solve this, I exported the meshes to Blender, where I created manual LODs and corrected geometries that Unreal's automatic system couldn't handle adequately.</p>

      <h4>LODs Generated in Blender and Vegetation Treatment</h4>
      <div class="image-comparison">
        <img src="${getImagePath('/images/pauepedra/blenderlod.png')}" alt="LODs Generated in Blender" />
        <img src="${getImagePath('/images/pauepedra/foliageOverlapPlanes.png')}" alt="Vegetation Treatment" />
      </div>

      <h2>Performance Optimization</h2>
      <p>Initially the project used advanced technologies such as Lumen, Nanite, Virtual Shadow Maps, Deferred Rendering and Shader Model 6 (SM6). However, when testing on a GTX 1050 Ti (the target hardware), I realized that performance wasn't satisfactory.</p>

      <p>To achieve the 60fps target at 1080p, I had to disable all these technologies and migrate to a lighter pipeline, with Forward Rendering and Shader Model 5 (SM5). This required significant adjustments to materials, lighting and post-processing.</p>

      <p>I also had to replace Unreal's native water system, which was incompatible without SM6. In its place, I modified a water material from an external package, changing the wave behavior and edge blending to better suit the project.</p>

      <p>Comparative images between Deferred and Forward Rendering were included in the portfolio to illustrate the visual impacts of these changes and justify the technical choices.</p>

      <h4>Deferred vs Forward</h4>
      <div class="image-comparison">
        <img src="${getImagePath('/images/pauepedra/deferred1.png')}" alt="Deferred Rendering - Outdoor Scene" />
        <img src="${getImagePath('/images/pauepedra/forward1.png')}" alt="Forward Rendering - Outdoor Scene" />
      </div>

      <div class="image-comparison">
        <img src="${getImagePath('/images/pauepedra/deferred2.png')}" alt="Deferred Rendering - Indoor Scene" />
        <img src="${getImagePath('/images/pauepedra/forward2.png')}" alt="Forward Rendering - Indoor Scene" />
      </div>

      <div class="image-comparison">
        <img src="${getImagePath('/images/pauepedra/deferred3.png')}" alt="Deferred Rendering - Details" />
        <img src="${getImagePath('/images/pauepedra/forward3.png')}" alt="Forward Rendering - Details" />
      </div>

      <div class="image-comparison">
        <img src="${getImagePath('/images/pauepedra/waterBefore.png')}" alt="Water System - Before" />
        <img src="${getImagePath('/images/pauepedra/waterAfter.png')}" alt="Water System - After" />
      </div>

      <h2>Procedural Content and Tools</h2>
      <p>I used Unreal's PCG (Procedural Content Generation) system to create scenario variations, especially in more complex structures. For simpler cases, such as terrain or floor generation, I developed my own procedural system in Blueprint.</p>

      <h2>Audio and Visual Effects</h2>
      <p>I implemented an audio system that works correctly in multiplayer, using Physical Materials to determine which sound should be played based on the surface. I also used ready-made audio packages for effects and ambience, but adjusted volumes and mixing with Sound Classes for better control.</p>

      <p>I added post-processing effects to represent damage, highlight items and reinforce the atmosphere of the maps.</p>

      <h2>Loading Screen and Shader Compilation</h2>
      <p>I adapted the Loading Screen system from Unreal Engine's Lyra project. I removed unnecessary dependencies and left the system lean, focusing on waiting for shader compilation and loading, avoiding frozen screens and improving the user experience on first map loading or phase transitions.</p>

      <h2>Conclusion and Learnings</h2>
      <p>The development of "Pau e Pedra" was essential for my growth as a developer. I learned to plan the project architecture from the beginning, deal with hardware limitations, and find practical solutions for various technical problems.</p>

      <p>More importantly, this project allowed me to build a reusable foundation: input, UI, configuration, optimization and multiplayer systems that I can apply and expand in future games.</p>

      <p>With it, I demonstrate proficiency in Unreal Engine 5, mastery of optimized pipelines, technical knowledge of multiplayer systems and the ability to adapt commercial solutions to real scenarios. My next step will be to use this foundation to develop new game modes and integrate more advanced technologies, now with a more solid structure.</p>
    `,
  tags: ["Unreal Engine 5", "Multiplayer", "GAS", "Otimização", "PBR", "PCG", "Steam", "Performance"],
  tagsEn: ["Unreal Engine 5", "Multiplayer", "GAS", "Optimization", "PBR", "PCG", "Steam", "Performance"]
} 