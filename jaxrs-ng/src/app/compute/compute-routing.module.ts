import { ComputeComponent } from './compute.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PrimeNgModule } from '@app/primeng.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

export const ROUTES = [
  {
    path: '',
    component: ComputeComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    PrimeNgModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    ComputeComponent
  ],
  entryComponents: [ComputeComponent],
  exports: [
  ]
})
export class ComputeRoutingModule { }
