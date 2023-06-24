import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JogadorService } from '../jogador.service';
import { Jogador } from '../model/jogador';

@Component({
  selector: 'app-listar-jogadores',
  templateUrl: './listar-jogadores.component.html',
  styleUrls: ['./listar-jogadores.component.css']
})
export class ListarJogadoresComponent implements OnInit {

  jogadorSelecionado: any;

  jogadores: any[] = []

  constructor(private router: Router, private jogadorService: JogadorService) { }

  ngOnInit(): void {
    this.carregarJogadores();
  }

  carregarJogadores(){
    this.jogadorService.todosJogadores().then(response => {
      if (response!= undefined) {
        this.jogadores = response as Jogador[];
      }
  });
  }

  selecionarJogador(jogador: any) {
    this.jogadorSelecionado = jogador;
    this.router.navigate(['/editar-jogador/' + this.jogadorSelecionado.id], { state: { jogador: jogador } });
  }

  excluirJogador(jogador: any){
    this.jogadorSelecionado = jogador;
    if (this.jogadorSelecionado) {
      this.jogadorService.deletar(this.jogadorSelecionado.id).then(response => {
        if (response != undefined) {
          this.jogadorSelecionado = null;
          this.router.navigate(['/home']);
        }
    });
    }
  }

}
