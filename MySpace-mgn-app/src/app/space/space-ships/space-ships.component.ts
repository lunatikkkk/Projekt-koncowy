import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-space-ships',
  templateUrl: './space-ships.component.html',
  styleUrls: ['./space-ships.component.css']
})
export class SpaceShipsComponent implements OnInit {
  
  spaceShip={
    modelName:'Boeing',
    imageUrl: '../../assets/spaceship.png',
    health: 70,
    activeShield: true,
    activeWeapon: false
  }

  constructor() { }

  ngOnInit(): void {
  }

}
