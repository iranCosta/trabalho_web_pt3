import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cadastro2 } from '../models/Cadastro2';
import { Delete } from '../models/Delete';

@Injectable({
  providedIn: 'root'
})
export class Cadastro2Service {

  constructor(private pHttp: HttpClient) { }

  findAll(): Observable<Cadastro2[]> {
    return this.pHttp.get<Cadastro2[]>(`https://bu.furb.br/mcardoso/progWeb/apiRestAval.php/cadastro/`);
  }

  findAllbyId(pid: number): Observable<Cadastro2> {
    return this.pHttp.get<Cadastro2>(`https://bu.furb.br/mcardoso/progWeb/apiRestAval.php/cadastro/${pid}`);
  }

  insertcadastro(pCadastro: Cadastro2): Observable<Cadastro2> {
    return this.pHttp.post<Cadastro2>('https://bu.furb.br/mcardoso/progWeb/apiRestAval.php/cadastro/', pCadastro);
  }

  deleteCadastro(pid: number): Observable<Delete> {
    return this.pHttp.delete<Delete>(`https://bu.furb.br/mcardoso/progWeb/apiRestAval.php/cadastro/${pid}`);
  }
}
