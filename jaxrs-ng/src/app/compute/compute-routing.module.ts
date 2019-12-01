import { ComputeComponent } from './compute.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PrimeNgModule } from '@app/primeng.module';
import { FormsModule } from '@angular/forms';

export const ROUTES = [
    {
        path: '',
        component: ComputeComponent
    }
];

@NgModule({
    imports: [
      PrimeNgModule,
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
