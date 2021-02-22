import { Component, OnInit } from '@angular/core';
import { Params, Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modifica-usuario',
  templateUrl: './modifica-usuario.component.html',
  styleUrls: ['./modifica-usuario.component.css']
})
export class ModificaUsuarioComponent implements OnInit {

  myParam='';
  constructor(private rutas: ActivatedRoute) { }

  ngOnInit(): void {
    this.rutas.params.subscribe((params: Params) => this.myParam = params['id']);
    console.log("EDITAR ID:"+this.myParam);
  }

}
