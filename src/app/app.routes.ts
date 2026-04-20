// app/app.routes.ts

import { Routes } from '@angular/router';
import { ProjectDetailComponent } from './features/project-detail/project-detail';
import { Home } from './pages/home/home';

export const routes: Routes = [
  // 1. Rota raiz leva para a Home
  { path: '', component: Home, pathMatch: 'full' }, 
  
  // 2. Rota de detalhes do projeto
  { path: 'project/:slug', component: ProjectDetailComponent },
  
  // 3. Qualquer rota digitada errada redireciona para a Home
  { path: '**', redirectTo: '' } 
];