import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Clube } from '../model/clube';

@Component({
  selector: 'app-editar-clube',
  templateUrl: './editar-clube.component.html',
  styleUrls: ['./editar-clube.component.css']
})
export class EditarClubeComponent implements OnInit {

  @Input() clube: any;
  clubeNome: string | undefined;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => { this.clubeNome = params.get('nome') ?? undefined});
    this.clube = history.state.clube;
  }

  nome!: string;
  dataFundacao!: string;
  nomeEstadio!: string;
  possuiCategoriasDeBase!: string;
  ativo!: string;

  editar(): void {
    const clube: Clube = new Clube(
      this.nome,
      this.dataFundacao,
      this.nomeEstadio,
      this.possuiCategoriasDeBase,
      this.ativo
    );
    let clubes: Clube[] = JSON.parse(localStorage.getItem('clubes')!) || [];
    clubes.push(clube);
    localStorage.setItem('clubes', JSON.stringify(clubes));

    this.router.navigate(['/home']);

  }

  cancelar(): void {
    this.router.navigate(['/home']);
  }

}
