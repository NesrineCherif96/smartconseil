import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent} from './card/card.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'card', component: CardComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
