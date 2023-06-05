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
    // Aqui você pode adicionar a lógica para enviar os dados do formulário para o servidor ou fazer outras ações necessárias
  }

  onCancel() {
    console.log('Formulário cancelado');
    // Aqui você pode adicionar a lógica para cancelar o formulário ou redirecionar para outra página, se necessário
  }
}
