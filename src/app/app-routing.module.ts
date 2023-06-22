import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './view/home/home.component';
import { FuncionarioComponent } from './view/funcionario/funcionario.component';
import { Cadastro2Component } from './view/cadastro2/cadastro2.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },

  {
    path: 'funcionario',
    component: FuncionarioComponent
  },
  {
    path: 'cadastro2',
    component: Cadastro2Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
