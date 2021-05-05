import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { NewComponent } from './new/new.component';
import { CaseComponent } from './case/case.component';


@NgModule({
  declarations: [
    NewComponent,
    CaseComponent
  ],
  imports: [
    CommonModule,
    GameRoutingModule
  ]
})
export class GameModule { }
