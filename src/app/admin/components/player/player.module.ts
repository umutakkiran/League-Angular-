import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player.component';
import { DirectiveModule } from 'src/app/directive/directive.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PlayerComponent
  ],
  imports: [
    CommonModule,
    DirectiveModule,
    FormsModule,
    RouterModule.forChild([
      {path:"", component: PlayerComponent}
    ])
  ],
  exports: [
    PlayerComponent
  ]
})
export class PlayerModule { }
