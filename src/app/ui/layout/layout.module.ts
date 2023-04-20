import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule
  ]
})
export class LayoutModule { }
