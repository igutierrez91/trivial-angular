import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonService } from './services/common.service';
import { CountdownComponent } from './components/countdown/countdown.component';
import { AngularMaterialCustomModule } from
'../angular-material-custom-module/angular-material-custom-module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialCustomModule,
    FormsModule,
  ],
  declarations: [
    CountdownComponent,
  ],
  providers: [
    CommonService,
  ],
  exports: [
    CountdownComponent,
    FormsModule,
  ],
})
export class SharedModule { }
