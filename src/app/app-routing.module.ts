import { CadastroClubeComponent } from './cadastro-clube/cadastro-clube.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CadastroJogadorComponent } from './cadastro-jogador/cadastro-jogador.component';
import { ListarJogadoresComponent } from './listar-jogadores/listar-jogadores.component';
import { ListarClubesComponent } from './listar-clubes/listar-clubes.component';
import { EditarJogadorComponent } from './editar-jogador/editar-jogador.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'cadastrar-clube', component: CadastroClubeComponent},
  {path: 'cadastrar-jogador', component: CadastroJogadorComponent},
  {path: 'listar-clubes', component: ListarClubesComponent},
  {path: 'listar-jogadores', component: ListarJogadoresComponent},
  {path: 'editar-jogador/:nome', component: EditarJogadorComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
