import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  nombre : String;

  constructor(private _data : DataService) {

  }

  ngOnInit() {
    this._data.nombre.subscribe(
      (valor) => {
        this.nombre = valor;
      }
    );
  }

}
