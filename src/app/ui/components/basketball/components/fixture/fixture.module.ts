import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FixtureComponent } from './fixture.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    FixtureComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"", component: FixtureComponent }
    ])
  ],
  exports: [
    FixtureComponent
  ]
})
export class FixtureModule { }
