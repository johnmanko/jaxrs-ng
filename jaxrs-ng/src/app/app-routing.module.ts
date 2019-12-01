import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloComponent } from '@app/hello/hello.component';

const routes: Routes = [
  {
    path: 'say-hello',
    component: HelloComponent
  },
  {
    path: 'compute',
    loadChildren: () => import('@compute/compute.module').then(m => m.ComputeModule)
  },
  {
    path: '',
    redirectTo: '/say-hello',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
