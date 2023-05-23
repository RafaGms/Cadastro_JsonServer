import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EstudanteComponent } from '../components/estudante/estudante.component';
import { Estudante } from '../components/estudante/estudante';

@Injectable({
  providedIn: 'root'
})
export class EstudanteService {

  constructor(private http: HttpClient) { }

  url ="http://localhost:3000/estudante";

  getEstudante():Observable <Estudante[]>{

    return this.http.get<Estudante[]>(this.url) //metodo GET do HTTP para requisição
  }

  save(estudante:Estudante):Observable <Estudante>{
    return this.http.post<Estudante>(this.url, estudante  ); //metodo post do HTTP para salvar
  }

}
