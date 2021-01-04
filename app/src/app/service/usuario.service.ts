import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../model/Usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  postValidarSenha(usuario:Usuario):Observable<boolean>
  {
    return this.http.post<boolean>('https://app-validacao-senha.herokuapp.com/api/usuario/validaSenha',usuario)
  }

}
