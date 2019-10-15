import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApprouterRoutingModule } from './approuter-routing.module';
import {RouterModule, Routes} from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ApprouterRoutingModule,
  ],
  exports: [RouterModule]
})
export class ApprouterModule { }
