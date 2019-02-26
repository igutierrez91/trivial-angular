import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSliderModule } from '@angular/material/slider';
import { MatListModule } from '@angular/material/list';

@NgModule({
  imports: [MatSidenavModule, MatCardModule, MatButtonModule, MatStepperModule,
    MatSelectModule, MatFormFieldModule, MatSliderModule, MatListModule],
  exports: [MatSidenavModule, MatCardModule, MatButtonModule, MatStepperModule,
    MatSelectModule, MatFormFieldModule, MatSliderModule, MatListModule],
})
export class AngularMaterialCustomModule {}
