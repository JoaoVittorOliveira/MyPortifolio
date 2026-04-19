import { Routes } from '@angular/router';

// Importar componentes de features conforme forem criados
// import { AboutComponent } from './features/about/about';
// import { SkillsComponent } from './features/skills/skills';
// import { ContactComponent } from './features/contact/contact';

/**
 * ESTRUTURA DE ROTAS - Preparado para expansão
 *
 * Padrão de adição de novas seções:
 * 1. Criar pasta em src/app/features/[nova-secao]/
 * 2. Criar componente: [nova-secao].component.ts (standalone)
 * 3. Criar model em: src/app/core/models/[nova-secao].model.ts
 * 4. Criar service em: src/app/core/services/[nova-secao].service.ts
 * 5. Importar componente neste arquivo
 * 6. Adicionar rota abaixo (se usar routing)
 *
 * Atualmente a aplicação funciona como SPA uma página única.
 * Para adicionar roteamento, descomente as importações acima e configure as rotas.
 */

export const routes: Routes = [
  // Exemplo de como adicionar futuras rotas:
  // {
  //   path: 'about',
  //   component: AboutComponent,
  // },
  // {
  //   path: 'skills',
  //   component: SkillsComponent,
  // },
  // {
  //   path: 'contact',
  //   component: ContactComponent,
  // },
];

