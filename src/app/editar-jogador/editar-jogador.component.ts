import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JogadorService } from '../jogador.service';
import { Jogador } from '../model/jogador';

@Component({
  selector: 'app-editar-jogador',
  templateUrl: './editar-jogador.component.html',
  styleUrls: ['./editar-jogador.component.css']
})
export class EditarJogadorComponent implements OnInit {

  @Input() jogador: any;
  jogadorId: number | undefined;

  constructor(private route: ActivatedRoute, private router: Router, private jogadorService: JogadorService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.jogadorId = Number(params.get('id'));
      const jogadorFromState = history.state.jogador;
      if (jogadorFromState) {
        this.jogador = jogadorFromState;
      }
    });
  }

  editarJogador() {
    this.jogadorService.editar(this.jogador);
    this.router.navigate(['/home']);
  }

  cancelar(): void {
    this.router.navigate(['/home']);
  }

}