export class Clube {
    public id?: number;

    constructor(public nome: string, public dataFundacao?: string, public nomeEstadio?: string, public possuiCategoriasDeBase?: string, public ativo?: string) {
        this.id = Math.round(Math.random() * 10000);
        this.nome =  nome;
        this.dataFundacao = dataFundacao;
        this.nomeEstadio = nomeEstadio;
        this.possuiCategoriasDeBase = possuiCategoriasDeBase;
        this.ativo = ativo;
      }
}