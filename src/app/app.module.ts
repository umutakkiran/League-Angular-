import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { UiModule } from './ui/ui.module';
import { AdminModule } from './admin/admin.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 900,
      positionClass: 'toast-bottom-right',
    }),
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    UiModule,
    AdminModule
  ],
  providers: [
    {provide: "baseUrl", useValue:"https://localhost:7153/api", multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
