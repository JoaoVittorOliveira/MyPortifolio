import { Project } from '../models/project.model';

export const MY_PROJECTS: Project[] = [
    {
      slug: 'sensor-vazao-inteligente',
      title: 'Sensor de Vazão',
      shortDescription: 'Solução IoT com IA para monitoramento de água (1º Lugar Hackathon).',
      cardImageUrl: 'https://placehold.co/400x300/e5e7eb/a1a1aa?text=IoT+Device',
      heroImageUrl: 'https://placehold.co/1200x600/e5e7eb/a1a1aa?text=Foto+Gigante+do+Projeto',
      date: '2025 - 2026',
      roles: ['Product Design', 'Hardware', 'Backend'],
      technologies: ['ESP32', 'Quarkus', 'Java', 'Gemini AI'],
      heroDescription: 'O projeto vencedor do Hackathon UNITINS transforma o monitoramento do consumo de água. Em vez de relatórios mensais passivos, o sensor YF-S201 conectado ao ESP32 acompanha o fluxo em tempo real. O resultado é um ritmo gentil de conscientização diária que ajuda famílias e empresas a economizar, aliando sustentabilidade à inteligência artificial.',
      sections: [
        {
          type: 'text-right-image-left',
          title: 'Hardware',
          content: 'Nós desenvolvemos um dispositivo compacto utilizando um ESP32 e um sensor de fluxo YF-S201. A arquitetura de hardware foi pensada para ser de baixo custo e fácil instalação. O dispositivo não apenas coleta os pulsos de água, mas os converte em litros por minuto e transmite via WebSocket para o nosso servidor central de forma contínua.',
          imageUrl: 'https://placehold.co/600x600/f7f7f8/a1a1aa?text=Detalhe+Hardware'
        },
        {
          type: 'image-full',
          imageUrl: 'https://placehold.co/1200x500/f7f7f8/a1a1aa?text=Dashboard+UI'
        },
        {
          type: 'text-only',
          title: 'Inteligência Artificial',
          content: 'Usando a API do Google Gemini, nossa equipe conseguiu criar um motor de análise que observa os padrões de consumo do usuário. Se a IA detecta que o consumo está anormalmente alto durante a madrugada, ela gera um alerta automático sugerindo um possível vazamento. Essa linguagem visual unificada e os alertas preditivos dão tranquilidade total ao cliente final.'
        },
        {
          type: 'gallery',
          galleryUrls: [
            'https://placehold.co/400x400/e5e7eb/a1a1aa?text=App+Screen+1',
            'https://placehold.co/400x400/e5e7eb/a1a1aa?text=App+Screen+2',
            'https://placehold.co/400x400/e5e7eb/a1a1aa?text=App+Screen+3'
          ]
        }
      ]
    },
  ];