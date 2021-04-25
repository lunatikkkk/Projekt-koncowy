import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpaceRoutingModule } from './space-routing.module';
import { HangarComponent } from './hangar/hangar.component';
import { SpaceShipsComponent } from './space-ships/space-ships.component';
import { SpaceShips2Component } from './space-ships2/space-ships2.component';


@NgModule({
  declarations: [
    HangarComponent,
    SpaceShipsComponent,
    SpaceShips2Component
  ],
  exports: [
    HangarComponent
  ],
  imports: [
    CommonModule,
    SpaceRoutingModule
  ]
})
export class SpaceModule { }
