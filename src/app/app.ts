import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MuralRecados } from './mural-recados/mural-recados'; 

@Component({
  imports: [RouterOutlet, MuralRecados], 
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('AC1');
}