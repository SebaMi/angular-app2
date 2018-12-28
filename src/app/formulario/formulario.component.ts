import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Nacionalidad } from 'src/app/model/nacionalidad';
import { Usuario } from 'src/app/model/usuario';
import { Respuesta} from 'src/app/model/respuesta';
import { SaludoResponse} from 'src/app/model/saludoResponse';
 
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  public nombre: string = '';
  public apellido: string = '';
  public idNacionalidad: number = 1;
  public saludo: Object = '';

  public ssaludo: SaludoResponse = new SaludoResponse;

  public nacionalidades : Nacionalidad[] = [];

  constructor( private _data: DataService ) {
    
  }

  ngOnInit() {
    this._data.getNacionalidades().subscribe(
      (res: any) => {
        console.log(res);
        this.nacionalidades = res;
    });
  }

  public enviar() :void {
    console.log("Se recibio nombre: " + this.nombre + " apellido: " + this.apellido + this.idNacionalidad );
  /*  let user : Usuario = {
      'apellido' : this.apellido,
      'nombre' : this.nombre,
      'nacionalidad' : this.idNacionalidad
    }; */
    
    let respuesta : Respuesta = {
      'id' : this.idNacionalidad,
      'saludado' : this.nombre + ' ' + this.apellido
    };

    this.saludo = this._data.login(respuesta);
    console.log(this.saludo);
    //this._data.cambiarNombre(this._data.login(respuesta).saludo)/*(
    /*  (res: SaludoResponse) => {
        //console.log("respuesta: " +res);
        console.log(res.saludo);
        this._data.cambiarNombre(res.saludo);
    });*/
        

  }


}
