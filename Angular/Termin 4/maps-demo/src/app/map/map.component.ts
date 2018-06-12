import { Component, OnInit, Input } from '@angular/core';

import OlMap from 'ol/map';
import OlXYZ from 'ol/source/xyz';
import OlTileLayer from 'ol/layer/tile';
import OlView from 'ol/view';
import OlProj from 'ol/proj';
import { MapInfo } from './map-info.model';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  styles: ['agm-map {height: 500px; width: 700px;}'] //postavljamo sirinu i visinu mape
})
export class MapComponent implements OnInit {

  mapInfo: MapInfo;

  ngOnInit() {
  }

  constructor(){
    this.mapInfo = new MapInfo(45.242268, 19.842954, 
    "assets/ftn.png",
    "Jugodrvo" , "" , "http://ftn.uns.ac.rs/691618389/fakultet-tehnickih-nauka");
  }

  placeMarker($event){
    console.log($event.coords.lat);
    console.log($event.coords.lng);
  }


}
