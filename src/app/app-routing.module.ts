import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OriginalIndexComponent } from './original-index/original-index.component';

const routes: Routes = [
  { path: '', component: OriginalIndexComponent },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 