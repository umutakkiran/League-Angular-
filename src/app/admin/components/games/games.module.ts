import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesComponent } from './games.component';
import { DirectiveModule } from 'src/app/directive/directive.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    GamesComponent
  ],
  imports: [
    CommonModule,
    DirectiveModule,
    FormsModule,
    RouterModule.forChild([
      {path:"", component: GamesComponent}
    ])
  ],
  exports: [
    GamesComponent
  ]
})
export class GamesModule { }
