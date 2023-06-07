import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-clubes',
  templateUrl: './listar-clubes.component.html',
  styleUrls: ['./listar-clubes.component.css']
})
export class ListarClubesComponent {
  clubes: any[] = [
    {
      nome: 'Clube A',
      fundacao: '01/01/1900',
      estadio: 'Estádio A',
      categoriasBase: 'Todas',
      ativo: true
    },
    {
      nome: 'Clube B',
      fundacao: '02/02/1910',
      estadio: 'Estádio B',
      categoriasBase: 'Não Possui',
      ativo: false
    },
  ];

}
