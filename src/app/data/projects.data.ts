import { Project } from '../models/project.model';

export const MY_PROJECTS: Project[] = [
  // 1. O Projeto do Hackathon (Já estava pronto)
  {
    slug: 'aqualy',
    title: 'Aqualy',
    shortDescription: 'Sistema IoT com IA para gestão hídrica (1º Lugar Hackathon UNITINS 2025).',
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
        imageUrl: 'https://placehold.co/600x600/f7f7f8/a1a1aa?text=ESP32+Setup'
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
  {
    slug: 'sensor-vazao-inteligente',
    title: 'Sensor de Vazão',
    shortDescription: 'Solução IoT com IA para monitoramento de água (1º Lugar Hackathon).',
    cardImageUrl: 'https://placehold.co/400x300/e5e7eb/a1a1aa?text=IoT+Device',
    heroImageUrl: 'https://placehold.co/1200x600/e5e7eb/a1a1aa?text=Foto+Gigante+do+Projeto',
    date: '2025',
    roles: ['Product Design', 'Hardware', 'Backend'],
    technologies: ['ESP32', 'Quarkus', 'Java', 'Gemini AI', 'Flutter'],
    heroDescription: 'O projeto vencedor do Hackathon UNITINS (1º Lugar) transforma o monitoramento do consumo de água. Em vez de relatórios mensais passivos, o sensor YF-S201 conectado ao ESP32 acompanha o fluxo em tempo real. O resultado é um ritmo gentil de conscientização diária que ajuda famílias e empresas a economizar, aliando sustentabilidade à inteligência artificial.',
    sections: [
      {
        type: 'text-right-image-left',
        title: 'Hardware e IoT',
        content: 'Desenvolvemos um dispositivo compacto utilizando um ESP32 e um sensor de fluxo YF-S201. O dispositivo não apenas coleta os pulsos de água, mas os converte em litros por minuto e transmite via WebSocket para o nosso servidor central de forma contínua.',
        imageUrl: 'https://placehold.co/600x600/f7f7f8/a1a1aa?text=Detalhe+Hardware'
      },
      {
        type: 'image-full',
        imageUrl: 'https://placehold.co/1200x500/f7f7f8/a1a1aa?text=Dashboard+App'
      },
      {
        type: 'text-only',
        title: 'Inteligência Artificial (Gemini)',
        content: 'No frontend desenvolvido em Flutter, integramos um agente de IA. Usando a API do Google Gemini, a IA fornece sugestões e lembretes inteligentes conforme o ambiente e os dados de vazão coletados, atuando na prevenção de desperdícios.'
      }
    ]
  },

  // 2. O Projeto Full-Stack (Angular + Quarkus)
  {
    slug: 'webservice-fullstack-academico',
    title: 'Webservice Full-Stack',
    shortDescription: 'Desenvolvimento de API RESTful segura com Quarkus e cliente Angular.',
    cardImageUrl: 'https://placehold.co/400x300/e5e7eb/a1a1aa?text=API+Rest',
    heroImageUrl: 'https://placehold.co/1200x600/e5e7eb/a1a1aa?text=Webservice+Dashboard',
    date: '2024',
    roles: ['Backend', 'Frontend', 'Testing'],
    technologies: ['Java', 'Quarkus', 'Angular', 'REST', 'JUnit'],
    heroDescription: 'Um projeto acadêmico completo que exigiu uma visão ponta a ponta do desenvolvimento de software. O objetivo foi criar uma API robusta, segura e de alta performance no backend, e posteriormente dar vida a esses dados construindo uma interface gráfica intuitiva no frontend.',
    sections: [
      {
        type: 'text-left-image-right',
        title: 'Backend com Quarkus (Java)',
        content: 'Fui responsável por implementar as funcionalidades RESTful do webservice utilizando o framework Quarkus. Para garantir a confiabilidade do sistema e a qualidade das entregas, apliquei práticas rigorosas de desenvolvimento e criei uma suíte de testes unitários com JUnit.',
        imageUrl: 'https://placehold.co/600x600/f7f7f8/a1a1aa?text=Code+Snippet+Quarkus'
      },
      {
        type: 'text-only',
        title: 'O Frontend em Angular',
        content: 'Em uma segunda fase do projeto, fui designado para consumir a API que havia criado. Desenvolvi o cliente web utilizando Angular (v6), focando em garantir que todas as funcionalidades do backend fossem acessíveis através de uma interface gráfica amigável e altamente responsiva.'
      },
      {
        type: 'gallery',
        galleryUrls: [
          'https://placehold.co/400x400/e5e7eb/a1a1aa?text=Tela+Login',
          'https://placehold.co/400x400/e5e7eb/a1a1aa?text=Dashboard+Angular',
          'https://placehold.co/400x400/e5e7eb/a1a1aa?text=Swagger+UI'
        ]
      }
    ]
  },

  // 3. O Projeto de DevOps e Cloud
  {
    slug: 'infraestrutura-devops-cicd',
    title: 'Cenário DevOps & CI/CD',
    shortDescription: 'Implementação de ambiente de produção automatizado com Docker e Ansible.',
    cardImageUrl: 'https://placehold.co/400x300/e5e7eb/a1a1aa?text=DevOps+Cloud',
    heroImageUrl: 'https://placehold.co/1200x600/e5e7eb/a1a1aa?text=Arquitetura+de+Rede',
    date: '2025',
    roles: ['DevOps', 'Cloud', 'Automation'],
    technologies: ['Docker', 'Ansible', 'GitHub', 'Linode', 'TypeScript'],
    heroDescription: 'Neste projeto prático na universidade, saí do papel de desenvolvedor de código e assumi a responsabilidade pela infraestrutura. O desafio era desenhar e implementar um cenário de produção real, garantindo que o software fluísse do repositório até o servidor final de forma automatizada e segura.',
    sections: [
      {
        type: 'text-right-image-left',
        title: 'Automação e Containers',
        content: 'Configurei servidores em nuvem utilizando máquinas virtuais hospedadas na Linode. Para garantir que os ambientes de desenvolvimento e produção fossem idênticos, encapsulei as aplicações Java e TypeScript em containers Docker.',
        imageUrl: 'https://placehold.co/600x600/f7f7f8/a1a1aa?text=Terminal+Docker'
      },
      {
        type: 'text-only',
        title: 'Esteira de CI/CD',
        content: 'O coração do projeto foi a automação. Utilizando o GitHub para versionamento e o Ansible como ferramenta de gerência de configuração, criei pipelines que controlavam o desenvolvimento, a manutenção e o deploy contínuo, reduzindo a zero a necessidade de intervenção manual no servidor.'
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