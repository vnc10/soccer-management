export class Jogador {
    public id?: number ;

    constructor(public nome: string, public posicao?: string, public altura?: number, public dataNascimento?: string, public clube?: string) {
        this.id = Math.round(Math.random() * 10000);
        this.nome =  nome;
        this.posicao = posicao;
        this.altura = altura;
        this.dataNascimento = dataNascimento;
        this.clube = clube;
      }
}