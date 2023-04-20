import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { AdminLayoutModule } from './admin-layout/admin-layout.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminLayoutModule
  ],
  exports: [
    AdminLayoutModule
  ]
})
export class AdminModule { }
