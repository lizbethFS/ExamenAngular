import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private url = "https://dummyintegracion.herokuapp.com"; 

  constructor(private httpClient:HttpClient) { }


  //SERVICIO PARA CREAR CUENTA
  creaCuenta=(algo:any):Observable<any>=>{
    console.log("Entro a consumir el servicio...");
    console.log("Entro a consumir el servicio..."+JSON.stringify(algo));
    const options={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods':'GET, POST, DELETE, PUT',
        'Access-Control-Allow-Headers':'X-Requests-With,content-type'
      }),
      observe: 'response' as 'response'
    };
    console.log("Recibe en el service");
    console.log(algo);
    return this.httpClient.post(`${this.url}/createAccount`,JSON.stringify(algo),options).pipe(map(res=>res));
  }
  //SERVICIO PARA VALIDAR LA CUENTA
  validaCuenta=(algo: any):Observable<any>=>{
    console.log("ENTRO aqui....");
    console.log(algo);
    const options={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods':'GET, POST, DELETE, PUT',
        'Access-Control-Allow-Headers':'X-Requests-With,content-type'
      }),
      observe: 'response' as 'response'
    };
    return this.httpClient.post(`${this.url}/validaAccount`,JSON.stringify(algo),options)
    .pipe(map(res=>res));
  }
   //SERVICIO PARA VALIDAR LA CUENTA
   allUser=():Observable<any>=>{
    const options={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods':'GET, POST, DELETE, PUT',
        'Access-Control-Allow-Headers':'X-Requests-With,content-type'
      }),
      observe: 'response' as 'response'
    };
    return this.httpClient.get(`${this.url}/readAllData?user=lizbethFs`,options)
    .pipe(map(res=>res));
  }

  //SERVICIO PARA ELIMINAR REGISTRO
  daleteUser=(id:string):Observable<any>=>{
    const options={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods':'GET, POST, DELETE, PUT',
        'Access-Control-Allow-Headers':'X-Requests-With,content-type'
      }),
      observe: 'response' as 'response'
    };
    return this.httpClient.delete(`${this.url}/deleteData?id=`+id,options)
    .pipe(map(res=>res));
  }
    //SERVICIO PARA VALIDAR LA CUENTA
    addUser=(algo: any):Observable<any>=>{
      console.log("ENTRO aqui....");
      console.log(algo);
      const options={
        headers:new HttpHeaders({
          'Content-Type':'application/json',
          'Access-Control-Allow-Origin':'*',
          'Access-Control-Allow-Methods':'GET, POST, DELETE, PUT',
          'Access-Control-Allow-Headers':'X-Requests-With,content-type'
        }),
        observe: 'response' as 'response'
      };
      return this.httpClient.post(`${this.url}/createData`,JSON.stringify(algo),options)
      .pipe(map(res=>res));
    }

}
