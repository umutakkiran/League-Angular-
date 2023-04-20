import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { BasketballModule } from './basketball/basketball.module';
import { VoleyballModule } from './voleyball/voleyball.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeModule,
    BasketballModule,
    VoleyballModule
  ],
  exports: [
    HomeModule,
    BasketballModule,
    VoleyballModule
  ]
})
export class ComponentsModule { }
