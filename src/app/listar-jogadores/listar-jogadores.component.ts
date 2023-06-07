import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-jogadores',
  templateUrl: './listar-jogadores.component.html',
  styleUrls: ['./listar-jogadores.component.css']
})
export class ListarJogadoresComponent implements OnInit {

  jogadorSelecionado: any;

  jogadores: any[] = [
    {
      nome: 'Jogador 1',
      posicao: 'Atacante',
      altura: '1.80m',
      dataNascimento: '01/01/1990',
      clube: 'Clube A'
    },
    {
      nome: 'Jogador 2',
      posicao: 'Meio-campista',
      altura: '1.75m',
      dataNascimento: '02/02/1995',
      clube: 'Clube B'
    },
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  selecionarJogador(jogador: any) {
    this.jogadorSelecionado = jogador;
    this.router.navigate(['/editar-jogador/' + this.jogadorSelecionado.nome], { state: { jogador: jogador } });
  }
}
