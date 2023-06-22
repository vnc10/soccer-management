import { Component, OnInit, ViewChild } from '@angular/core';
import { Jogador } from '../model/jogador';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-jogador',
  templateUrl: './cadastro-jogador.component.html',
  styleUrls: ['./cadastro-jogador.component.css']
})
export class CadastroJogadorComponent {

  nome!: string;
  posicao!: string;
  altura!: number;
  dataNascimento!: string;
  clube!: string;

  constructor(private router: ActivatedRoute, private route: Router) {
  }

  cadastrar(): void {
    const jogador: Jogador = new Jogador(
      this.nome,
      this.posicao,
      this.altura,
      this.dataNascimento,
      this.clube
    );
    let jogadores: Jogador[] = JSON.parse(localStorage.getItem('jogadores')!) || [];
    jogadores.push(jogador);
    localStorage.setItem('jogadores', JSON.stringify(jogadores));

    this.route.navigate(['/home']);

  }

  cancelar(): void {
    this.route.navigate(['/home']);
  }

}
