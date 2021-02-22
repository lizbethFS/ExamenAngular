import { Component, OnInit,ViewChild } from '@angular/core';
import { timeout } from 'rxjs/operators';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {UsuariosService} from '../../service/usuarios.service';
import { NgxSpinnerService } from "ngx-spinner";
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})

export class RegistrarUsuarioComponent implements OnInit {

  form = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z]+$"), Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  })
  get f() {
    return this.form.controls;
  }

  altaCorrecta = false;
  problemAlta = false;
  constructor(private rutas: Router,
    private service: UsuariosService,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
  }
  newAcconte(){
    console.log(this.f.value);
    const datos = this.form.value;
    console.log(datos);
   this.spinner.show();
    this.service.creaCuenta(datos)
      .pipe(timeout(20000))
      .subscribe((response) => {
        this.validaResponse(response.status, response);
      },
        (response) => {
          this.validaResponse(response.status, response);
        });
  }
  validaResponse(code: any, response: any) {
    this.spinner.hide();
    switch (code) {
      case 200:
        this.altaCorrecta = true;
        this.problemAlta = false;
        console.log("LOGEADOOOOOOOOOOOOOOOOOOO");
        break;
      default:
        this.altaCorrecta = false;
        this.problemAlta = true;
        console.log("NOOOOOOOOOOOOOOOOOOOOOOOO");
        this.form.reset();
        break;
    }
  }
  ingresarInicio(){
    this.rutas.navigate(['/login']);
  }
}
