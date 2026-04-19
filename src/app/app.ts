import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hero } from './features/hero/hero';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, Hero],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {}