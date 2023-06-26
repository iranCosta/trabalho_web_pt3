import { Component } from '@angular/core';
import { Cadastro2Service } from 'src/app/controller/cadastro2.service';
import { Cadastro2 } from 'src/app/models/Cadastro2';

@Component({
  selector: 'app-cadastro2',
  templateUrl: './cadastro2.component.html',
  styleUrls: ['./cadastro2.component.css']
})
export class Cadastro2Component {

  constructor(private pService: Cadastro2Service) { }

  vetCadastro2: Cadastro2[] = [];
  vCadastro: Cadastro2 = {
    id: 0,
    nome: '',
    departamento: '',
    endereco: '',
    email: ''
  };
  vId: number = 0;

  vCadastroNovo: Cadastro2 = {
    nome: '',
    departamento: '',
    endereco: '',
    email: ''
  }

  vCadastroUpdate: Cadastro2 = {
    nome: '',
    departamento: '',
    endereco: '',
    email: ''
  }

  ngOnInit(): void {
    this.pService.findAll().subscribe(
      (pVetCadastros2) => {
        this.vetCadastro2 = pVetCadastros2;
      }
    );
  }

  encontrarCadastro2(): void {
    this.pService.findAllbyId(this.vId).subscribe(
      (pCadastro) => {
        this.vCadastro = pCadastro;
      }
    )
  }

  inserirCadastro(): void {
    this.pService.insertcadastro(this.vCadastroNovo).subscribe(
      (pCadastro) => {
        this.vCadastro = pCadastro;
      }
    )
  }

  alteraCadastro(): void {
    this.pService.updateCadastro(this.vCadastroUpdate).subscribe(
      (pCadastro) => {
        this.vCadastro = pCadastro;
      }
    )
  }

  apagaCadastro(): void {
    this.pService.deleteCadastro(this.vId).subscribe(
      (pCadastro) => {
        alert();
        //retornar informação usando o pCadastro
        //console.log(pCadastro);
      }
    )
  }
}
