import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketballComponent } from './basketball.component';
import { RouterModule } from '@angular/router';
import { HomeModule } from './components/home/home.module';
import { FixtureModule } from './components/fixture/fixture.module';
import { TeamModule } from './components/team/team.module';





@NgModule({
  declarations: [
    BasketballComponent,
  ],
  imports: [
    CommonModule,
    HomeModule,
    FixtureModule,
    TeamModule,
    RouterModule.forChild([
      {path:"", component: BasketballComponent }
    ])
  ],
  exports: [
    BasketballComponent,
    HomeModule,
    FixtureModule,
    TeamModule

  ]
})
export class BasketballModule { }
