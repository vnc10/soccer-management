import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Jogador } from './model/jogador';

@Injectable({
    providedIn: 'root'
  })
  export class JogadorService {
  baseURL: string = 'http://localhost:3000/jogadores';
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
    constructor(private httpClient: HttpClient) { }
  
    todosJogadores(): Promise<Jogador[] | undefined> {
      return this.httpClient.get<Jogador[]>(this.baseURL, this.httpOptions).toPromise();
    }
  
    jogadorId(id: number) : Promise<Jogador | undefined> {
      return this.httpClient.get<Jogador>(`${this.baseURL}/${id}`, this.httpOptions).toPromise();
    }
  
    editar(jogador: Jogador) : Promise<Jogador | undefined> {
      return this.httpClient.put<Jogador>(`${this.baseURL}/${jogador.id}`, jogador, this.httpOptions).toPromise();
    }
  
    cadastrar(jogador: Jogador) : Promise<Jogador | undefined> {
      return this.httpClient.post<Jogador>(`${this.baseURL}`, jogador, this.httpOptions).toPromise();
    }
  
    deletar(id: number) : Promise<Jogador | undefined> {
      return this.httpClient.delete<Jogador>(`${this.baseURL}/${id}`, this.httpOptions).toPromise();
    }
  }