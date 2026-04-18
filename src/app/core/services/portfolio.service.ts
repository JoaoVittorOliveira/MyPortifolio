import { Injectable } from '@angular/core';
import { Project } from '../models/portfolio.model';
import { Experience } from '../models/experience.model';

@Injectable({ providedIn: 'root' })
export class PortfolioService {

  // alterar futuramente
  getProjects(): Project[] {
    return [
      {
        title: 'Sensor de Vazão Inteligente',
        description: '1º Lugar no Hackathon UNITINS 2025. Sistema IoT com IA para monitoramento hídrico.',
        technologies: ['Java/Quarkus', 'IoT/ESP32', 'Gemini AI', 'Flutter'],
        highlight: true
      },
      
    ];
  }

  getExperiences(): Experience[] {
    return [
      {
        company: 'TRE - Central de Urnas',
        role: 'Estagiário de Nível Superior',
        period: '2025 - Presente',
        description: 'Automação de processos e análise de dados com Power BI.'
      }
    ];
  }
}