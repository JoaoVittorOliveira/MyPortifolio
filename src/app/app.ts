import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hero } from './features/hero/hero';
import { Projects } from './features/projects/projects';
import { About } from './features/about/about';
import { Capabilities } from './features/capabilities/capabilities';
import { Approach } from './features/approach/approach';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, Hero, Projects, About, Capabilities, Approach],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {}