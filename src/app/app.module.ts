import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

import { HomeComponent } from './home/home.component';
import { CadastroClubeComponent } from './cadastro-clube/cadastro-clube.component';
import { CadastroJogadorComponent } from './cadastro-jogador/cadastro-jogador.component';
import { ListarJogadoresComponent } from './listar-jogadores/listar-jogadores.component';
import { ListarClubesComponent } from './listar-clubes/listar-clubes.component';
import { EditarJogadorComponent } from './editar-jogador/editar-jogador.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingPageComponent,
    HomeComponent,
    CadastroClubeComponent,
    CadastroJogadorComponent,
    ListarJogadoresComponent,
    ListarClubesComponent,
    EditarJogadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
