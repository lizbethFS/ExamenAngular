import { Component, OnInit,ViewChild } from '@angular/core';
import { timeout } from 'rxjs/operators';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {UsuariosService} from '../../service/usuarios.service';
import { NgxSpinnerService } from "ngx-spinner";
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-alta-usuario',
  templateUrl: './alta-usuario.component.html',
  styleUrls: ['./alta-usuario.component.css']
})

export class AltaUsuarioComponent implements OnInit {

  constructor(private rutas: Router,
    private service: UsuariosService,
    private spinner: NgxSpinnerService) { }

  form = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z]+$"), Validators.minLength(3)]),
    apellidoPat: new FormControl('', [Validators.required]),
    apellidoMat: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    telefono: new FormControl('', [Validators.required]),
    compania: new FormControl('', [Validators.required]),
    nacimiento: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  })
  forms = new FormGroup({
    user: new FormControl('lizbethFs', [Validators.required, Validators.pattern("^[a-zA-Z]+$"), Validators.minLength(3)]),
    categoria: new FormControl('login', [Validators.required]),
    data: new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z]+$"), Validators.minLength(3)]),
    apellidoPat: new FormControl('', [Validators.required]),
    apellidoMat: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    telefono: new FormControl('', [Validators.required]),
    compania: new FormControl('', [Validators.required]),
    nacimiento: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    })
  })
 // obDatos = new Cliente();
  get f() {
    return this.form.controls;
  }

  altaCorrecta = false;
  problemAlta = false;

  ngOnInit(): void {
  }
  newUser(){
    //const datos = this.form.value;
    this.forms.value.data = this.form.value;
    const datos = this.forms.value;

    console.log(datos);
   this.spinner.show();
   this.service.addUser(datos)
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
  regresar(){
    this.rutas.navigate(['/usuarios']);
  }

}
