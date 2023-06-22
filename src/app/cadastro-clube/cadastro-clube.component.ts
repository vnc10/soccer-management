import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Clube } from '../model/clube';

interface Cadastro {
  nome: string;
  dataFuncao: string;
  nomeEstadio: string;
  categoriasBase: string;
  ativo: string;
}

@Component({
  selector: 'app-cadastro-clube',
  templateUrl: './cadastro-clube.component.html',
  styleUrls: ['./cadastro-clube.component.css']
})
export class CadastroClubeComponent {
  nome!: string;
  dataFundacao!: string;
  nomeEstadio!: string;
  possuiCategoriasDeBase!: string;
  ativo!: string;

  constructor(private router: ActivatedRoute, private route: Router) {
  }

  cadastrar(): void {
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

    this.route.navigate(['/home']);

  }

  cancelar(): void {
    this.route.navigate(['/home']);
  }
}
