import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-jogador',
  templateUrl: './editar-jogador.component.html',
  styleUrls: ['./editar-jogador.component.css']
})
export class EditarJogadorComponent implements OnInit {

  @Input() jogador: any;
  jogadorId: number | undefined;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.jogadorId = Number(params.get('id'));
      const jogadorFromState = history.state.jogador;
      if (jogadorFromState) {
        this.jogador = jogadorFromState;
      } else {
        const jogadoresString = localStorage.getItem('jogadores');
        if (jogadoresString) {
          const jogadores = JSON.parse(jogadoresString);
          const jogadorEncontrado = jogadores.find((jogador: any) => jogador.id === this.jogadorId);
          if (jogadorEncontrado) {
            this.jogador = jogadorEncontrado;
          }
        }
      }
    });
  }

  editarJogador() {
    const jogadoresString = localStorage.getItem('jogadores');
    if (jogadoresString) {
      const jogadores = JSON.parse(jogadoresString);
      const indice = jogadores.findIndex((jogador: any) => jogador.id === this.jogadorId);
      if (indice !== -1) {
        jogadores[indice] = this.jogador;
        localStorage.setItem('jogadores', JSON.stringify(jogadores));
        this.router.navigate(['/home']);
      }
    }
  }

  cancelar(): void {
    this.router.navigate(['/home']);
  }

}