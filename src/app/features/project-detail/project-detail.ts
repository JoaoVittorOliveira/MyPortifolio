import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Project } from '../../models/project.model';
import { MY_PROJECTS } from '../../data/projects.data';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './project-detail.html',
  styleUrls: ['./project-detail.css']
})
export class ProjectDetailComponent implements OnInit {
  project?: Project;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Captura o slug da URL (ex: /project/sensor-vazao)
    const slug = this.route.snapshot.paramMap.get('slug');
    // Busca o projeto no nosso array de dados
    this.project = MY_PROJECTS.find(p => p.slug === slug);
  }
}