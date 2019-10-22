import { Component, OnInit } from '@angular/core';

import { PLANET } from '../mock-planet';

@Component({
  selector: 'app-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.css']
})
export class PlanetsListComponent implements OnInit {

  Planet = PLANET;

  constructor() { }

  ngOnInit() {
  }

}
