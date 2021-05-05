import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, },
  {
    path: 'shared',
    loadChildren: () => import('./shared/shared.module')
      .then(mod => mod.SharedModule)
  },
  {
    path: 'game',
    loadChildren: () => import('./game/game.module')
      .then(mod => mod.GameModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module')
      .then(mod => mod.UserModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
