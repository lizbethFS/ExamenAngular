import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import {UsuariosService} from '../../service/usuarios.service';
import { timeout } from 'rxjs/internal/operators/timeout';


@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {
  rows = [
    { id:'', nombre: 'kkk', apellidoPat: 'llll', apellidoMat: 'llll' ,email:'pppp',telefono:'lñl', compania:'qwqeq', nacimiento:''}
  ];
 
  eliminado = false;

  constructor(private rutas: Router,private service: UsuariosService,) { }

  ngOnInit(): void {
    this.getAllUser();
  }

  //METODO PARA OBTENER TODOS LOS USUARIOS REGISTRADOS
  getAllUser(){
    console.log("CONSUME SERVICIO..............");
    this.service.allUser()
    .pipe(timeout(20000))
    .subscribe((response) => {
      //this.validaResponse(response.status, response);
      JSON.stringify(response);
      this.rows=[];
      if(response.body.length > 0){
        for (let index = 0; index < response.body.length; index++) {
          this.rows.push(response.body[index].data);
          this.rows[index].id=response.body[index].id;
        }
      }
     // this.rows.push(response.body[0].data);
      //this.rows.push(response.body[1].data);
      //{"nombre":"Maria del Carmen","apellidoPat":"Jasso","apellidoMat":"Flores","email":"oMariaa@minsait.com","telefono":"4921092890","compania":"Indra Company","nacimiento":"14/01/1985"}
       //this.rows = [
        //{ nombre: 'kkkLOLOOOOOOOOOOOOOOOOO', apellidoPat: 'llll', apellidoMat: 'llll' ,email:'pppp',telefono:'lñl', compania:'qwqeq', nacimiento:''}
      //];

      console.log("CONSUME SERVICIO.llll............."+JSON.stringify(this.rows));
      console.log("CONSUME SERVICIO.llll............."+response.body.length);
      
    },
      (response) => {
        //this.validaResponse(response.status, response);
        JSON.stringify(response);
        console.log("CONSUME SERVICIO.............."+JSON.stringify(response.body.data));
      });
  }
  //METODO PARA EDITAR LOS REGISTROS DE USUARIOS
  goEditUser(){
   // this.rutas.navigate(['/registro']);
  }
  //METODO PARA SALIR DEL SISTEMA DE REGISTRO
  exitSystem(){
   // this.rutas.navigate(['/registro']);
  }
  edit(id:string){
    this.rutas.navigate(["/modifica", id]);
  }
  delete(id:string){
      console.log("CONSUME SERVICIO.............."+id);
     this.service.daleteUser(id)
      .pipe(timeout(20000))
      .subscribe((response) => {
          this.eliminado= true;
          this.getAllUser();
        console.log("LO ELIMINOOOO");
        
      },
        (response) => {
          //this.validaResponse(response.status, response);
          JSON.stringify(response);
          this.eliminado= true;
          console.log("no ELIMINAAAA");
        });
    }
    altaUsuario(){
      this.rutas.navigate(['/alta']);
    }
    salir(){
      this.rutas.navigate(['/login']);
    }

    
  
}
