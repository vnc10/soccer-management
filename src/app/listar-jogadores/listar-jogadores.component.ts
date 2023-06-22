import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-jogadores',
  templateUrl: './listar-jogadores.component.html',
  styleUrls: ['./listar-jogadores.component.css']
})
export class ListarJogadoresComponent implements OnInit {

  jogadorSelecionado: any;

  jogadores: any[] = []

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.carregarJogadores();
  }

  carregarJogadores(){
    const jogadores = localStorage.getItem('jogadores');
    if (jogadores) {
      this.jogadores = JSON.parse(jogadores);
    } 
  }

  selecionarJogador(jogador: any) {
    this.jogadorSelecionado = jogador;
    this.router.navigate(['/editar-jogador/' + this.jogadorSelecionado.nome], { state: { jogador: jogador } });
  }
}
