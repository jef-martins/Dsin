import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GerencialComponent } from './container/gerencial/gerencial.component';
import { RouterModule } from '@angular/router';
import { routes } from './admin.routing';
import { HeaderComponent } from './component/header/header.component';
import { AdminFacade } from './admin.facade';



@NgModule({
  declarations: [
    GerencialComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers:[
    AdminFacade
  ]
})
export class AdminModule { }
