export interface ProjectSection {
  type: 'text-only' | 'image-full' | 'text-left-image-right' | 'text-right-image-left' | 'gallery'; // Define o layout da seção na página de detalhes
  title?: string;
  content?: string;
  imageUrl?: string;
  galleryUrls?: string[]; // Varias imagens para uma galeria, se necessário
}

export interface Project {
  slug: string;                 // Usado para a URL da rota
  title: string;                // Ex: "Sensor de Vazão Inteligente"
  shortDescription: string;     // Para o card menor (ex: "Hackathon UNITINS - 1º Lugar")
  cardImageUrl: string;         // Imagem de destaque do card
  heroImageUrl: string;         // Imagem grande para o topo da página de detalhes (pode ser a mesma do card ou diferente)
  date: string;                 // Ex: "2025"
  roles: string[];              // Equivalente ao "Services" (Ex: ['Hardware', 'AI', 'Backend'])
  technologies: string[];       // Tecnologias usadas
  heroDescription: string;      // A descrição longa que fica no topo da página de detalhes
  sections: ProjectSection[];   // As seções modulares para o corpo da página
}