import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'trivia',
    pathMatch: 'full',
  },
  {
    path: 'trivia',
    loadChildren: '../trivia/trivia.module#TriviaModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {

}
