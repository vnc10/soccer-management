import { Component } from '@angular/core';

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
  cadastro: Cadastro = {
    nome: '',
    dataFuncao: '',
    nomeEstadio: '',
    categoriasBase: '',
    ativo: ''
  };

  onSubmit() {
    console.log('Formulário enviado:', this.cadastro);
  }

  onCancel() {
    console.log('Formulário cancelado');
  }
}
