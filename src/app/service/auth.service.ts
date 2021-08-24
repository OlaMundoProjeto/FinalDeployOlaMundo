import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  [x: string]: any;

  constructor(private http: HttpClient) { }


  entrar (usuarioLogin: UserLogin): Observable<UserLogin> {
    return this.http.post<UserLogin>("https://olamundobackend.herokuapp.com/usuarios/logar" , usuarioLogin)
  }

  cadastrar (usuario: User): Observable<User> {
    return this.http.post<User>("https://olamundobackend.herokuapp.com/usuarios/cadastrar", usuario)

  }
  getByIdUsuario(id: number): Observable<User>{
    return this.http.get<User>(`https://olamundobackend.herokuapp.com/usuarios/${id}`)
  }

// logado
  logado(){
    let ok: boolean = false

    if (environment.token != '') {
      ok = true
    }
      return ok

    }

    // atualizar
    atualizar (usuario: User): Observable<User>{
      return this.http.put<User>('https://olamundobackend.herokuapp.com/usuarios/alterar', usuario)
    }


  }

    // criando variavel OK determinando que é booleana e falsa.
    // retornando ok = retornando falso. significa que o método está retornando um boolean.
    // começa com o OK falso e caso seja diferente de vazio = verdadeiro.


