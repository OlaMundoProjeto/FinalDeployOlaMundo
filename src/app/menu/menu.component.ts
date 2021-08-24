import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  nome = environment.nome
  foto = environment.foto
  id = environment.id

  tema: Tema = new Tema()
  listaTemas : Tema[]

  constructor(
    private router: Router,
    private temaService: TemaService
  ) { }

  ngOnInit() {
  }

  sair(){
    this.router.navigate(['/entrar'])
    environment.token = ''
    environment.nome = ''
    environment.foto = ''
    environment.id = 0
  }


}
