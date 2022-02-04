import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperacionalComponent } from './container/operacional/operacional.component';
import { GerencialComponent } from './container/gerencial/gerencial.component';
import { RouterModule } from '@angular/router';
import { routes } from './admin.routing';



@NgModule({
  declarations: [
    OperacionalComponent,
    GerencialComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
