import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PrimeNgModule } from '@app/primeng.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    PrimeNgModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
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
