import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperacionalComponent } from './container/operacional/operacional.component';
import { GerencialComponent } from './container/gerencial/gerencial.component';
import { RouterModule } from '@angular/router';
import { routes } from './admin.routing';
import { HeaderComponent } from './component/header/header.component';



@NgModule({
  declarations: [
    OperacionalComponent,
    GerencialComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
