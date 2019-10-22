import { Injectable } from '@angular/core';
import { planet } from './planet';
import { PLANET} from './mock-planet';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

 planet = PLANET;

  constructor() { }
}
