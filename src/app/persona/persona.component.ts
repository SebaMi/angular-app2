import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  
  textoPersona = 'Aca va el codigo ___ de mi componente!!';
  
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.nombre.subscribe(
      (nombrePersona) => {
        this.textoPersona = this.textoPersona + ' --> ' + nombrePersona;
      }
    );  
  }

}
