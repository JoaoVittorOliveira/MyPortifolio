import { Project } from '../models/project.model';

export const MY_PROJECTS: Project[] = [
  // 1. O Projeto do Hackathon (Já estava pronto)
  {
    slug: 'aqualy',
    title: 'Aqualy',
    shortDescription: 'App de Gestão Hídrica (1º Lugar Hackathon UNITINS 2025)',
    cardImageUrl: '/images/projects/aqualy/card.jpeg',
    heroImageUrl: '/images/projects/aqualy/hero.jpeg',
    date: '2025',
    roles: ['Líder de Projeto', 'Hardware Architecture', 'Backend Developer'],
    technologies: ['ESP32', 'Java', 'Quarkus', 'WebSocket', 'Flutter', 'Gemini AI'],
    heroDescription: 'Vencedor do Hackathon UNITINS 2025 com o tema "Água, Sustentabilidade e Inovação", o Aqualy é uma solução completa de monitoramento hídrico. O projeto integra hardware proprietário para coleta de dados em tempo real e inteligência artificial para detecção preditiva de vazamentos, promovendo um consumo consciente e sustentável.',
    sections: [
      {
        type: 'text-right-image-left',
        title: 'Integração Hardware e IoT',
        content: 'O núcleo do projeto utiliza um sensor de vazão YF-S201 conectado a uma placa ESP32. O sistema coleta dados de fluxo de água em tempo real e os transmite via protocolo WebSocket para um backend robusto, garantindo baixa latência no monitoramento.',
        imageUrl: 'images/projects/aqualy/arquitetura.png'
      },
      {
        type: 'text-only',
        title: 'Arquitetura de Software e IA',
        content: 'O ecossistema conta com um backend desenvolvido em Java com Quarkus e um frontend mobile em Flutter. O grande diferencial é a integração com agentes de IA (Google Gemini), que analisam padrões de consumo para fornecer insights personalizados e alertas de desperdício aos usuários.'
      },
      {
        type: 'gallery',
        galleryUrls: [
          '/images/projects/aqualy/consumo.jpeg',
          '/images/projects/aqualy/home.jpeg',
          '/images/projects/aqualy/grafico.jpeg'
        ]
      }
    ]
  },
  
  // 2. O Projeto EcoAventura (Game Educacional)
  {
    slug: 'ecoaventura',
    title: 'EcoAventura',
    shortDescription: 'Jogo de plataforma 2D educativo para promover a sustentabilidade',
    cardImageUrl: 'images/projects/ecoaventura/card.png',
    heroImageUrl: 'images/projects/ecoaventura/homepage.png',
    date: '2024 - 2025',
    roles: ['Game Developer', 'Game Design', 'UI/UX'],
    technologies: ['Unity', 'C#', 'Gamificação', 'Educação Ambiental'],
    heroDescription: 'O EcoAventura é um jogo de plataforma 2D concebido para transformar o ensino da sustentabilidade em uma experiência lúdica e interativa para alunos do ensino fundamental. Através da gamificação, o projeto busca aumentar o engajamento e a retenção de conteúdos sobre coleta seletiva e práticas ecológicas.',
    sections: [
      {
        type: 'text-left-image-right',
        title: 'Aprendizado Lúdico e Interativo',
        content: 'O núcleo do EcoAventura integra mecânicas de plataforma com um sistema de quiz dinâmico. O jogador controla um avatar que deve coletar diferentes tipos de resíduos (recicláveis, orgânicos e eletrônicos), enfrentando desafios que reforçam o aprendizado pedagógico de maneira autônoma e divertida.',
        imageUrl: 'images/projects/ecoaventura/ingame.png'
      },
      {
        type: 'text-right-image-left',
        title: 'Desenvolvimento e Engenharia de Jogos',
        content: 'Desenvolvido na engine Unity, o projeto envolveu desde o design de sprites e mecânicas de física até a integração de um banco de dados para o gerenciamento de perguntas e rankings. O foco foi criar um equilíbrio preciso entre o entretenimento e o rigor pedagógico, garantindo uma interface intuitiva para o público-alvo.',
        imageUrl: 'images/projects/ecoaventura/gameover.png'
      },
      
      {
        type: 'text-only',
        title: 'Impacto e Validação na Comunidade',
        content: 'Além do desenvolvimento técnico, o projeto foi validado através de testes de usabilidade com estudantes e apresentado no evento Tech Inclusão. O feedback positivo dos usuários confirmou o potencial da tecnologia como ferramenta de transformação educacional e social, promovendo a autonomia no processo de aprendizagem.'
      },
      {
        type: 'gallery',
        galleryUrls: [
          '/images/projects/ecoaventura/ranking.png',
          '/images/projects/ecoaventura/sobre.png',
        ]
      },
    ]
  },

  // 3. O Projeto de DevOps e Cloud
  {
    slug: 'ansible-docker',
    title: 'Automação com Ansible e Docker',
    shortDescription: 'Automação de infraestrutura (IaC) para provisionamento e gestão de containers em escala.',
    cardImageUrl: 'images/projects/ansible-docker/card2.jpg',
    heroImageUrl: 'images/projects/ansible-docker/card2.jpg',
    date: '2025',
    roles: ['DevOps', 'Infrastructure as Code', 'Automação'],
    technologies: ['Ansible', 'Docker', 'Linux', 'Nginx'],
    heroDescription: 'Este projeto demonstra o poder da Automação de Infraestrutura ao gerenciar o ciclo de vida completo de containers em servidores remotos. Utilizando o Ansible, transformei processos complexos de configuração e deploy em playbooks simples, reutilizáveis e totalmente automatizados.',
    sections: [
      {
        type: 'text-right-image-left',
        title: 'Ambiente "Agentless" e Escalável',
        content: 'Aproveitando a arquitetura sem agentes do Ansible, configurei um fluxo que prepara servidores Ubuntu do zero via SSH. O projeto abrange desde a instalação automatizada do Docker Engine até a configuração de repositórios oficiais, garantindo que o servidor alvo esteja sempre em conformidade com o estado desejado (Idempotência).',
        imageUrl: 'images/projects/ansible-docker/arquiteturarobusta.png'
      },
      {
        type: 'text-left-image-right',
        title: 'Escalabilidade na Prática',
        content: 'O núcleo da solução é a orquestração de 8 containers Nginx simultâneos. Cada instância é provisionada com portas dedicadas (8081-8088) e páginas HTML personalizadas de forma dinâmica. Isso prova como a automação permite escalar serviços web de forma padronizada e sem qualquer intervenção manual no servidor alvo.',
        imageUrl: 'images/projects/ansible-docker/escalation2.webp'
      },
      {
        type: 'text-only',
        title: 'Observabilidade e Gestão de Ciclo de Vida',
        content: 'Além do deploy, implementei uma suíte de gerenciamento que permite monitorar estatísticas de CPU/Memória, consultar logs em tempo real e controlar o estado de cada container (pausar, parar ou remover) diretamente da máquina controladora. Isso oferece um controle granular sobre o ambiente de produção, reduzindo drasticamente o tempo de manutenção operacional.'
      }
    ]
  },

  // 4. O Projeto de Hardware (Sensor de Ré)
  {
    slug: 'sensor-de-re-arduino',
    title: 'Sensor Ultrassônico',
    shortDescription: 'Projeto de eletrônica: sensor de distância com alarme automotivo.',
    cardImageUrl: 'https://placehold.co/400x300/e5e7eb/a1a1aa?text=Arduino+Board',
    heroImageUrl: 'https://placehold.co/1200x600/e5e7eb/a1a1aa?text=Hardware+Setup',
    date: '2023',
    roles: ['Hardware', 'Eletrônica', 'Lógica'],
    technologies: ['Arduino', 'Sensores Ultrassônicos', 'Tinkercad', 'C++'],
    heroDescription: 'Um dos meus primeiros grandes contatos com o mundo do hardware e IoT. Atuando em equipe, concebemos e implementamos um sensor de distância com alarme de proximidade, simulando o comportamento de um sensor de ré automotivo com alta precisão.',
    sections: [
      {
        type: 'text-left-image-right',
        title: 'Do Virtual ao Físico',
        content: 'O projeto começou no ambiente virtual utilizando o Tinkercad para validar a lógica dos circuitos e os cálculos de distância. Após o sucesso nas simulações, migramos para o hardware físico, soldando componentes e programando a placa Arduino para interpretar os dados dos sensores ultrassônicos.',
        imageUrl: 'https://placehold.co/600x600/f7f7f8/a1a1aa?text=Circuito+Tinkercad'
      },
      {
        type: 'gallery',
        galleryUrls: [
          'https://placehold.co/400x400/e5e7eb/a1a1aa?text=Arduino+Físico',
          'https://placehold.co/400x400/e5e7eb/a1a1aa?text=Código+Fonte',
          'https://placehold.co/400x400/e5e7eb/a1a1aa?text=Teste+Prático'
        ]
      }
    ]
  }
];