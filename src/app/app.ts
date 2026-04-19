import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hero } from './features/hero/hero';
import { Projects } from './features/projects/projects';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, Hero, Projects],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {}