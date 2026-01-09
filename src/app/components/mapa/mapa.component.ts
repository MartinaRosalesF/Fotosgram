import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss'],
  standalone: false
})
export class MapaComponent implements OnInit {

  @Input() coords: string = '';

  constructor() { }

  ngOnInit() {
    console.log(this.coords)
  }

}
