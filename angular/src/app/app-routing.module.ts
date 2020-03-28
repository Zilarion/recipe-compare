import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingViewComponent } from './routes/shopping-view/shopping-view.component';


const routes: Routes = [
  { path: 'shopping-list', component: ShoppingViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
