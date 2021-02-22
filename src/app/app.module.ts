import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './page/login/login.component';
import { AltaUsuarioComponent } from './page/alta-usuario/alta-usuario.component';
import { ModificaUsuarioComponent } from './page/modifica-usuario/modifica-usuario.component';
import { ListaUsuariosComponent } from './page/lista-usuarios/lista-usuarios.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RegistrarUsuarioComponent } from './page/registrar-usuario/registrar-usuario.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxSpinnerModule } from "ngx-spinner";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AltaUsuarioComponent,
    ModificaUsuarioComponent,
    ListaUsuariosComponent,
    RegistrarUsuarioComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    NgxDatatableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
