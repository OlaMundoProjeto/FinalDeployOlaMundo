import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient) { }

  token={
  headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllPostagens(): Observable<Postagem[]>{
    return this.http.get<Postagem[]>('https://olamundobackend.herokuapp.com/postagem')
  }
  getById(id: number): Observable<Postagem>{
    return this.http.get<Postagem>(`https://olamundobackend.herokuapp.com/postagem/${id}`)
  }

 getByAgenda(agenda: string): Observable<Postagem>{
   return this.http.get<Postagem>(`https://olamundobackend.herokuapp.com/postagem/agenda/${agenda}`)
  }

  getByContato(contato: string): Observable<Postagem>{
  return this.http.get<Postagem>(`https://olamundobackend.herokuapp.com/postagem/contato/${contato}`)
  }

  getByTexto(texto: string): Observable<Postagem>{
 return this.http.get<Postagem>(`https://olamundobackend.herokuapp.com/postagem/texto/${texto}`)
  }

  getByTituloPostagem(titulo: string): Observable<Postagem[]>{
  return this.http.get<Postagem[]>(`https://olamundobackend.herokuapp.com/postagem/titulo/${titulo}`)
 }

  postPostagem(postagem: Postagem): Observable<Postagem>{
    return this.http.post<Postagem>('https://olamundobackend.herokuapp.com/postagem', postagem)
  }
  putPostagem(postagem: Postagem): Observable<Postagem>{
    return this.http.put<Postagem>('https://olamundobackend.herokuapp.com/postagem', postagem)
  }

  getByIdPostagem(id: number): Observable<Postagem>{
    return this.http.get<Postagem>(`https://olamundobackend.herokuapp.com/postagem/${id}`)
  }
  deletePostagem(id: number){
    return this.http.delete(`https://olamundobackend.herokuapp.com/postagem/${id}`)
  }
putCurtir(id: number): Observable<Postagem>{
  return this.http.put<Postagem>(`https://olamundobackend.herokuapp.com/postagem/curtir/${id}`, this.token)

}
putDescurtir(id: number): Observable<Postagem>{
  return this.http.put<Postagem>(`https://olamundobackend.herokuapp.com/postagem/descurtir/${id}`, this.token)


}
}
