import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PrimeNgModule } from '@app/primeng.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    PrimeNgModule,
    FormsModule,
    RouterModule.forChild([
        {
            path: '',
            loadChildren: () => import('@compute/compute-routing.module').then(m => m.ComputeRoutingModule)
        }
    ])
  ],
  declarations: [],
  providers: [],
  exports: []
})
export class ComputeModule { }
