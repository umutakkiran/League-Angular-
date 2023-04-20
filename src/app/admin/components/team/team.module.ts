import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamComponent } from './team.component';
import { RouterModule } from '@angular/router';
import { DirectiveModule } from 'src/app/directive/directive.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TeamComponent
  ],
  imports: [
    CommonModule,
    DirectiveModule,
    FormsModule,
    RouterModule.forChild([
      {path:"", component: TeamComponent}
    ])
  ],
  exports: [
    TeamComponent
  ]
})
export class TeamModule { }
