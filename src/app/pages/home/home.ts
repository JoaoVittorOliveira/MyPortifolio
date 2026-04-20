import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hero } from '../../features/hero/hero';
import { ProjectsComponent } from '../../features/projects/projects';
import { About } from '../../features/about/about';
import { Capabilities } from '../../features/capabilities/capabilities';
import { Approach } from '../../features/approach/approach';
import { Testimonials } from '../../features/testimonials/testimonials';
import { Contact } from '../../features/contact/contact';

@Component({
  selector: 'app-home',
  imports: [CommonModule, Hero, ProjectsComponent, About, Capabilities, Approach, Testimonials, Contact],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
