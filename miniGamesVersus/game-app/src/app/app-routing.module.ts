import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClickGameComponent } from './click-game/click-game.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'click-game', component: ClickGameComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
