import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  
  myProjects: Project[] = [
    {
      slug: 'sensor-vazao-inteligente',
      title: 'Sensor de Vazão Inteligente',
      shortDescription: 'Solução IoT com IA para monitoramento de água (1º Lugar Hackathon).',
      cardImageUrl: 'https://placehold.co/400x300/e5e7eb/a1a1aa?text=IoT+Device', // Substitua pela foto real
      date: '2025',
      roles: ['Hardware', 'Backend', 'AI Integration'],
      technologies: ['ESP32', 'Java', 'Quarkus', 'Flutter', 'Gemini AI'],
      heroDescription: 'Projeto vencedor do Hackathon UNITINS (Água, Sustentabilidade e Inovação). Uma solução completa que integra hardware (sensor YF-S201), software e inteligência artificial para evitar desperdício de água.',
      sections: [
        {
          type: 'text-image',
          title: 'Hardware & IoT',
          content: 'O projeto consistiu em um sensor físico de vazão de água (YF-S201) conectado a uma placa IoT ESP32, responsável por coletar dados em tempo real e transmiti-los ao backend via WebSocket.',
          imageUrl: 'link-da-foto-do-arduino.jpg'
        }
      ]
    },
    {
      slug: 'infraestrutura-devops',
      title: 'Infraestrutura & DevOps',
      shortDescription: 'Cenário de produção automatizado com CI/CD.',
      cardImageUrl: 'https://placehold.co/400x300/e5e7eb/a1a1aa?text=DevOps',
      date: '2025',
      roles: ['DevOps', 'Cloud', 'Automation'],
      technologies: ['Docker', 'Ansible', 'GitHub', 'Linode'],
      heroDescription: 'Implementação de um cenário de produção de software utilizando ferramentas de controle de desenvolvimento, manutenção e deploy automatizado.',
      sections: [
        {
          type: 'text',
          title: 'A Arquitetura',
          content: 'Foram utilizadas ferramentas de CI/CD como Ansible e Docker para disponibilizar as aplicações em containers, utilizando máquinas virtuais hospedadas na Linode.'
        }
      ]
    },
    {
      slug: 'fullstack-webservice',
      title: 'Webservice Full-Stack',
      shortDescription: 'Desenvolvimento de API RESTful segura e cliente Angular.',
      cardImageUrl: 'https://placehold.co/400x300/e5e7eb/a1a1aa?text=API+Rest',
      date: '2024',
      roles: ['Backend', 'Frontend', 'Testing'],
      technologies: ['Java', 'Quarkus', 'Angular', 'JUnit'],
      heroDescription: 'Desenvolvimento do backend de um webservice utilizando o framework Quarkus, garantindo comunicação eficiente, segurança e performance através de testes unitários.',
      sections: []
    },
    {
      slug: 'sensor-de-re',
      title: 'Sensor de Ré (Eletrônica)',
      shortDescription: 'Sensor de distância ultrassônico com alarme.',
      cardImageUrl: 'https://placehold.co/400x300/e5e7eb/a1a1aa?text=Arduino',
      date: '2023',
      roles: ['Hardware', 'Eletrônica'],
      technologies: ['Arduino', 'Tinkercad', 'Sensores Ultrassônicos'],
      heroDescription: 'Criação de um sensor de distância com alarme de proximidade para a ré de um carro, desenvolvido tanto virtualmente (Tinkercad) quanto fisicamente com Arduino.',
      sections: []
    }
  ];
}