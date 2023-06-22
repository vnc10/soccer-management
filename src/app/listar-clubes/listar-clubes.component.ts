import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-clubes',
  templateUrl: './listar-clubes.component.html',
  styleUrls: ['./listar-clubes.component.css']
})
export class ListarClubesComponent implements OnInit {

  clubeSelecionado: any;

  clubes: any[] = [];

  constructor(private router: Router) { }

  ngOnInit() {
    this.carregarClubes();
  }

  carregarClubes() {
    const clubesString = localStorage.getItem('clubes');
    if (clubesString) {
      this.clubes = JSON.parse(clubesString);
    } 
  }

  selecionarClube(clube: any) {
    this.clubeSelecionado = clube;
    this.router.navigate(['/editar-clube/' + this.clubeSelecionado.id], { state: { clube: clube } });
  }

  excluirClube(clube: any){
    this.clubeSelecionado = clube;
    if (this.clubeSelecionado) {
      const indice = this.clubes.findIndex(clube => clube.id === this.clubeSelecionado.id);
      console.log(indice)
      if (indice !== -1) {
        this.clubes.splice(indice, 1);
        localStorage.setItem('clubes', JSON.stringify(this.clubes));
        this.clubeSelecionado = null;
        this.router.navigate(['/home']);
      }
    }
  }

}
