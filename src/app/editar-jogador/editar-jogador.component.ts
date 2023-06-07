import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-jogador',
  templateUrl: './editar-jogador.component.html',
  styleUrls: ['./editar-jogador.component.css']
})
export class EditarJogadorComponent implements OnInit {

  @Input() jogador: any;
  jogadorNome: string | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => { this.jogadorNome = params.get('nome') ?? undefined});
    this.jogador = history.state.jogador;
  }
}
