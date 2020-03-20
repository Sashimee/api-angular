import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeerBoardComponent } from './components/beer-board/beer-board.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'beer-board',
    pathMatch: 'full'
  },
  {
    path: 'beer-board',
    component: BeerBoardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
