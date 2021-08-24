import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UserLogin } from '../model/UserLogin';
import { AlertaService } from '../service/alerta.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  usuarioLogin: UserLogin = new UserLogin()

  constructor(
    private auth: AuthService,
    private router: Router,
    private alerta: AlertaService,
  ) { }

  ngOnInit() {
    window.scroll(0, 0)
    
  }
     
  entrar() {
    this.auth.entrar(this.usuarioLogin).subscribe((resp: UserLogin) => {
      this.usuarioLogin = resp

      environment.token = this.usuarioLogin.token
      environment.nome = this.usuarioLogin.nome
      environment.foto = this.usuarioLogin.foto
      environment.usuario = this.usuarioLogin.usuario
      environment.id = this.usuarioLogin.id
      environment.local = this.usuarioLogin.local


      console.log(environment.token)
      console.log(environment.nome)
      console.log(environment.foto)
      console.log(environment.id)


      this.router.navigate(['/layout-feed'])
    }, erro => {
      if (erro.status == 500) {
        alert("Usuário ou senha incorretos!")
      }
    })
  }
  
}
