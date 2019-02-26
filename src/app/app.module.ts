import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AngularMaterialCustomModule } from
'./angular-material-custom-module/angular-material-custom-module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    AngularMaterialCustomModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
