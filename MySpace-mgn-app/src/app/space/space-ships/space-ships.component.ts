import { Component, Input, OnInit } from '@angular/core';
import { SpaceShips} from '../space-ships'

@Component({
  selector: 'app-space-ships',
  templateUrl: './space-ships.component.html',
  styleUrls: ['./space-ships.component.css']
})
export class SpaceShipsComponent implements OnInit {
  
@Input() spaceShip: SpaceShips
  constructor() { }

  ngOnInit(): void {
  }

}
