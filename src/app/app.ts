import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from './core/services/portfolio.service';
import { HeroComponent } from './features/hero/hero';
// Importe seus futuros componentes aqui

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeroComponent], // Adicione HeroComponent, ProjectsComponent, etc, aqui
  template: `
    <main style="background-color: #0f172a; min-height: 100vh;">
      <app-hero></app-hero>
      
      <section id="projects" style="height: 500px; padding: 2rem; color: white;">
        <h2>Meus Projetos (Em breve...)</h2>
      </section>
    </main>
  `
})
export class App {
}