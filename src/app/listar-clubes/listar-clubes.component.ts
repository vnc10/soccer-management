import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-clubes',
  templateUrl: './listar-clubes.component.html',
  styleUrls: ['./listar-clubes.component.css']
})
export class ListarClubesComponent implements OnInit {

  clubes: any[] = [];

  ngOnInit() {
    this.carregarClubes();
  }

  carregarClubes() {
    const clubesString = localStorage.getItem('clubes');
    if (clubesString) {
      this.clubes = JSON.parse(clubesString);
    } 
  }


}
