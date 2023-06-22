import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-clube',
  templateUrl: './editar-clube.component.html',
  styleUrls: ['./editar-clube.component.css']
})
export class EditarClubeComponent implements OnInit {

  @Input() clube: any;
  clubeId: number | undefined;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.clubeId = Number(params.get('id'));
      const clubeFromState = history.state.clube;
      if (clubeFromState) {
        this.clube = clubeFromState;
      } else {
        const clubesString = localStorage.getItem('clubes');
        if (clubesString) {
          const clubes = JSON.parse(clubesString);
          const clubeEncontrado = clubes.find((clube: any) => clube.id === this.clubeId);
          if (clubeEncontrado) {
            this.clube = clubeEncontrado;
          }
        }
      }
    });
  }

  editarClube() {
    const clubesString = localStorage.getItem('clubes');
    if (clubesString) {
      const clubes = JSON.parse(clubesString);
      const indice = clubes.findIndex((clube: any) => clube.id === this.clubeId);
      if (indice !== -1) {
        clubes[indice] = this.clube;
        localStorage.setItem('clubes', JSON.stringify(clubes));
        this.router.navigate(['/home']);
      }
    }
  }

  cancelar(): void {
    this.router.navigate(['/home']);
  }

}
