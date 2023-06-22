import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './view/header/header.component';
import { FooterComponent } from './view/footer/footer.component';
import { MainComponent } from './view/main/main.component';
import { HomeComponent } from './view/home/home.component';
import { FuncionarioComponent } from './view/funcionario/funcionario.component';
import { Cadastro2Component } from './view/cadastro2/cadastro2.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    HomeComponent,
    FuncionarioComponent,
    Cadastro2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
