import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VoleyballComponent } from './voleyball.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    VoleyballComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"", component: VoleyballComponent}
    ])
  ],
  exports: [
    VoleyballComponent
  ]
})
export class VoleyballModule { }
