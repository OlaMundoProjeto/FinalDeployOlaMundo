import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { PostagemDeleteComponent } from './delete/postagem-delete/postagem-delete.component';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { UsuarioEditComponent } from './edit/usuario-edit/usuario-edit.component';
import { EntrarComponent } from './entrar/entrar.component';
import { ExplorarComponent } from './explorar/explorar.component';
import { LayoutFeedComponent } from './layout-feed/layout-feed.component';
import { PerfilComponent } from './perfil/perfil.component';
import { QuemsomosComponent } from './quemsomos/quemsomos.component';
import { TemaComponent } from './tema/tema.component';



const routes: Routes = [
  {path: '', redirectTo: 'entrar', pathMatch: 'full'}, // página inicial: caminho vazio = aba entrar! - pathMatch = compatibilidade total.
  {path: 'entrar', component: EntrarComponent}, // path da página entrar. Atentar-se a não colocar / antes do caminho.
  {path: 'cadastrar', component: CadastrarComponent}, // path da página cadastrar. Atentar-se a não colocar / antes do caminho.
  {path: 'explorar', component: ExplorarComponent}, // path da página explorar.
  {path: 'quemsomos', component: QuemsomosComponent},
  {path: 'perfil', component: PerfilComponent},
  {path: 'layout-feed', component: LayoutFeedComponent},
  {path: 'tema', component: TemaComponent},
  {path: 'tema-edit/:id' , component: TemaEditComponent},
  {path: 'tema-delete/:id' , component: TemaDeleteComponent},
  {path: 'postagem-edit/:id' , component: PostagemEditComponent},
{path: 'postagem-delete/:id' , component: PostagemDeleteComponent},
{path: 'usuario-edit/:id' , component: UsuarioEditComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
