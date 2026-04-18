import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from './core/services/portfolio.service';
// Importe seus futuros componentes aqui

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule], // Adicione HeroComponent, ProjectsComponent, etc, aqui
  template: `
    <main>
      <section id="hero"> <h1>João Víttor - Dev FullStack</h1> </section>
      
      <section id="projects">
        <h2>Projetos em Destaque</h2>
        <div *ngFor="let p of projects">
          <h3>{{ p.title }}</h3>
          <p>{{ p.description }}</p>
        </div>
      </section>

      <section id="experience">
        <h2>Experiência Profissional</h2>
        <div *ngFor="let e of experiences">
          <p><strong>{{ e.role }}</strong> na {{ e.company }}</p>
        </div>
      </section>
    </main>
  `,
  styles: [`
    main { max-width: 1000px; margin: 0 auto; padding: 2rem; font-family: sans-serif; }
    section { margin-bottom: 4rem; }
  `]
})
export class App {
  private portfolioService = inject(PortfolioService);
  projects = this.portfolioService.getProjects();
  experiences = this.portfolioService.getExperiences();
}