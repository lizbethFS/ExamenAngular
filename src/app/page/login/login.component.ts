import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { timeout } from 'rxjs/operators';
import {UsuariosService} from '../../service/usuarios.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  get f() {
    return this.form.controls;
  }

  noUser = false;
  camReqEmail = false;
  camContra = false;


  constructor(private rutas: Router,
    private service: UsuariosService,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
  }

  validaCuenta() {
    console.log(this.f.value);
    this.spinner.show();
    const datos = this.form.value;
    console.log(datos);
    this.service.validaCuenta(datos)
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
        this.hideSpinner();
        this.usuariovalido();
        this.usuariovalido();
        console.log("LOGEADOOOOOOOOOOOOOOOOOOO");
        break;
      default:
        this.hideSpinner();
        this.noUser = true;
        console.log("NOOOOOOOOOOOOOOOOOOOOOOOO");
        this.form.reset();
        break;
    }
  }
hideSpinner(){
  setTimeout(() => {
    /** spinner ends after 5 seconds */
    this.spinner.hide();
  }, 5000);
}
usuariovalido(){
  this.noUser = false;
  this.rutas.navigate(['/usuarios']);
}
  crearCuenta() {
    this.rutas.navigate(['/registro']);
  }
  validaCampoObligatorios(){

  }

}
