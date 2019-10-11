import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:'',
    loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule)
  },
  {
    path:'',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  {
    path:'',
    loadChildren: () => import('./sevice/sevice.module').then(m => m.SeviceModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
