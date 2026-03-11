import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Home } from "./pages/home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, Home],
  templateUrl: 'app.html',
  styles: [`
    :host {
      display: block;
    }
    html {
      scroll-behavior: smooth;
    }
  `]
})
export class App {}
