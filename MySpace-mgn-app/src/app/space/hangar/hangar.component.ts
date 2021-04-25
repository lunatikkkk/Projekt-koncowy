import { Component, OnInit } from '@angular/core';
import { BomberShip } from '../bomber-ship';
import { FighterShip } from '../fighter-ship';
import { SpaceShips } from '../space-ships';

@Component({
  selector: 'app-hangar',
  templateUrl: './hangar.component.html',
  styleUrls: ['./hangar.component.css']
})
export class HangarComponent implements OnInit {
spaceShips: SpaceShips[]=[];
  constructor() { }

  ngOnInit(): void {
    this.spaceShips.push(new FighterShip());
    this.spaceShips.push(new BomberShip());
  }

}
