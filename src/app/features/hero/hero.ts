import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="hero-container">
      <div class="hero-content">
        <p class="greeting">Olá, meu nome é</p>
        <h1 class="name">{{ name }}</h1>
        <h2 class="title">{{ headline }}</h2>
        <p class="description">{{ summary }}</p>
        
        <div class="cta-buttons">
          <button class="btn-primary" (click)="scrollToProjects()">Ver Projetos</button>
          <a [href]="cvLink" target="_blank" class="btn-secondary">Baixar CV</a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero-container {
      min-height: 80vh;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding: 0 2rem;
      background-color: #0f172a; /* Fundo escuro moderno */
      color: #f8fafc;
    }
    .hero-content {
      max-width: 800px;
    }
    .greeting {
      color: #38bdf8; /* Azul destaque */
      font-weight: bold;
      margin-bottom: 0.5rem;
    }
    .name {
      font-size: 4rem;
      font-weight: 800;
      margin: 0 0 0.5rem 0;
      color: #f1f5f9;
    }
    .title {
      font-size: 2.5rem;
      font-weight: 700;
      color: #94a3b8; /* Cinza claro */
      margin: 0 0 1.5rem 0;
    }
    .description {
      font-size: 1.25rem;
      line-height: 1.6;
      color: #cbd5e1;
      margin-bottom: 2.5rem;
      max-width: 600px;
    }
    .cta-buttons {
      display: flex;
      gap: 1rem;
    }
    .btn-primary, .btn-secondary {
      padding: 0.75rem 1.5rem;
      border-radius: 8px;
      font-size: 1rem;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s ease;
      text-decoration: none;
      display: inline-block;
    }
    .btn-primary {
      background-color: #38bdf8;
      color: #0f172a;
      border: none;
    }
    .btn-primary:hover {
      background-color: #7dd3fc;
    }
    .btn-secondary {
      background-color: transparent;
      color: #38bdf8;
      border: 2px solid #38bdf8;
    }
    .btn-secondary:hover {
      background-color: rgba(56, 189, 248, 0.1);
    }

    /* Responsividade básica para celulares */
    @media (max-width: 768px) {
      .name { font-size: 2.5rem; }
      .title { font-size: 1.75rem; }
      .cta-buttons { flex-direction: column; }
    }
  `]
})
export class HeroComponent {
  // Esses valores podem vir do serviço depois, mas deixamos padrões aqui
  @Input() name = 'João Víttor';
  @Input() headline = 'Desenvolvedor Full-Stack & Solucionador de Problemas.';
  @Input() summary = 'Especialista em construir sistemas robustos unindo Backend, IoT e Inteligência Artificial. Vencedor do Hackathon UNITINS 2025.';
  @Input() cvLink = 'assets/curriculo-joao-vittor.pdf'; // Caminho para o seu PDF depois

  scrollToProjects() {
    // Função simples para rolar até a seção de projetos no futuro
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  }
}