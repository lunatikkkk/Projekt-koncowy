import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpaceRoutingModule } from './space-routing.module';
import { HangarComponent } from './hangar/hangar.component';
import { SpaceShipsComponent } from './space-ships/space-ships.component';



@NgModule({
  declarations: [
    HangarComponent,
    SpaceShipsComponent
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
