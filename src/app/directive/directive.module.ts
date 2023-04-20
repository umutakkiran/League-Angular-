import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateDirective } from './create.directive';
import { UpdateDirective } from './update.directive';
import { DeleteDirective } from './delete.directive';



@NgModule({
  declarations: [
    CreateDirective,
    UpdateDirective,
    DeleteDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CreateDirective,
    UpdateDirective,
    DeleteDirective
  ]
})
export class DirectiveModule { }
