import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mural-recados',
  imports: [CommonModule, FormsModule],
  templateUrl: './mural-recados.html',
  styleUrl: './mural-recados.css'
})
export class MuralRecados {
  recados: string[] = ['Amanhã choverá MUITO!', 'Hoje é nossa prova de Desenvolvimento Web', 'Rock & Roll!', 'Angular é muito é massa!!!'];
  recadoSelecionado: string = '';
  novoRecado: string = '';
  lido: boolean = false;
  curtidas: number = 0;

  selecionar(recado: string) {
    this.recadoSelecionado = recado;
    this.lido = false;
    this.curtidas = 0;
  }

  publicar() {
    if (this.novoRecado.trim()) {
      this.recados.push(this.novoRecado.trim());
      this.novoRecado = '';
    }
  }

  alternarLido() {
    this.lido = !this.lido;
  }

  curtir() {
    this.curtidas++;
  }
}
