import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Usuario } from 'src/app/model/usuario';
import { Respuesta} from 'src/app/model/respuesta';
import { HttpHeaders } from '@angular/common/http';
import { SaludoResponse } from './model/saludoResponse';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private nombreUsuario = new BehaviorSubject('');
  nombre = this.nombreUsuario.asObservable();

  cambiarNombre(message: string) {
    this.nombreUsuario.next(message)
  }

  constructor(private http: HttpClient ) { 
    
  }

  public login(respuesta : Respuesta) : Object { //usuario : Usuario,
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    //console.log(usuario);
    console.log(respuesta);
 /*   try {
      this.http.post('http://localhost:8080/login', usuario, httpOptions).subscribe(
        res => {
          console.log(res);
        }
      );
    }catch (err){
      console.log(err);
    }*/
    
    try {
      this.http.post('http://localhost:8080/saludo/', respuesta, httpOptions).subscribe(
        res => {
          console.log(res);
          return (res.toString);
        }
      );
    }catch (err){
      console.log(err);
      return (err);
    }
    
  }

  public getNacionalidades() :Observable<any> {
    return this.http.get('http://localhost:8080/nacionalidades');
  }

  public postSaludo(){

  }



}
