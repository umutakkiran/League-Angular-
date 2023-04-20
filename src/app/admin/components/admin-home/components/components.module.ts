import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamSectionComponent } from './team-section/team-section.component';
import { DirectiveModule } from 'src/app/directive/directive.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TeamSectionComponent
  ],
  imports: [
    CommonModule,
    DirectiveModule,
    FormsModule
    
  ],
  exports: [
    TeamSectionComponent
  ]
})
export class ComponentsModule { }
