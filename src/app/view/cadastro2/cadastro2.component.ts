import { Component } from '@angular/core';
import { Cadastro2Service } from 'src/app/controller/cadastro2.service';
import { Cadastro2 } from 'src/app/models/Cadastro2';
import { Delete } from 'src/app/models/Delete';
import { Inserir } from 'src/app/models/Inserir';

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
  };

  public status: string = '';

  public retornoInserir: Inserir = {
    status: '',
    mensagem: ''
  };

  public retornoDeletar: Delete = {
    status: '',
    mensagem: ''
  };

  mostrarDiv: boolean = false;

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
        console.log(pCadastro);
        this.retornoInserir = pCadastro;
      }
    )
  }

  apagaCadastro(): void {
    this.pService.deleteCadastro(this.vId).subscribe(
      (pCadastro) => {
        console.log(pCadastro);
        this.retornoDeletar = pCadastro;
      }
    )
  }
}

