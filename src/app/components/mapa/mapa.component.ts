import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import * as maplibregl from 'maplibre-gl';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss'],
  standalone: false
})
export class MapaComponent implements OnInit {

  @ViewChild('map') mapElement!: ElementRef;

  @Input() coords: string = '';

  constructor() { }

  ngOnInit() {
    console.log(this.coords)

  }

  ngAfterViewInit() {

    const latLng = this.coords.split(',').map(c => Number(c.trim()));

    const lat = latLng[0];
    const lng = latLng[1];

    if (isNaN(lat) || isNaN(lng)) return;

    const map = new maplibregl.Map({
      container: this.mapElement.nativeElement,
      center: [lng, lat],
      zoom: 13,
      style: {
        version: 8,
        sources: {
          osm: {
            type: 'raster',
            tiles: [
              'https://a.tile.openstreetmap.org/{z}/{x}/{y}.png',
              'https://b.tile.openstreetmap.org/{z}/{x}/{y}.png',
              'https://c.tile.openstreetmap.org/{z}/{x}/{y}.png'
            ],
            tileSize: 256
          }
        },
        layers: [
          { id: 'osm', type: 'raster', source: 'osm' }
        ]
      }
    });

    new maplibregl.Marker()
      .setLngLat([lng, lat])
      .addTo(map);

    setTimeout(() => {
      map.resize();
    }, 200);
  }

  ionViewDidEnter() {


  }



}
