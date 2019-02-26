import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigurationComponent } from './containers/configuration/configuration.component';
import { TriviaRoutingModule } from './trivia-routing.module';
import { AngularMaterialCustomModule } from
'../angular-material-custom-module/angular-material-custom-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../shared/shared.module';
import { GameComponent } from './containers/game/game.component';

@NgModule({
  imports: [
    CommonModule,
    TriviaRoutingModule,
    AngularMaterialCustomModule,
    FlexLayoutModule,
    SharedModule,
  ],
  declarations: [ConfigurationComponent, GameComponent],
})
export class TriviaModule { }
