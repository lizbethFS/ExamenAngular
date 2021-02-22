import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import{LoginComponent} from './page/login/login.component';
import{AltaUsuarioComponent} from './page/alta-usuario/alta-usuario.component';
import{ModificaUsuarioComponent} from './page/modifica-usuario/modifica-usuario.component';
import{ListaUsuariosComponent} from './page/lista-usuarios/lista-usuarios.component';
import{RegistrarUsuarioComponent} from './page/registrar-usuario/registrar-usuario.component';


const routes: Routes = [
  {path: '',redirectTo:'/login',pathMatch:'full'},
  {path: 'login',component:LoginComponent},
  {path: 'alta',component:AltaUsuarioComponent},
  {path: 'modifica/:id',component:ModificaUsuarioComponent},
  {path: 'usuarios',component:ListaUsuariosComponent},
  {path: 'registro',component:RegistrarUsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
