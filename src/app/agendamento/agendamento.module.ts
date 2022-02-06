import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AgendamentoFacade } from './agendamento.facade';
import { routes } from './agendamento.routing';
import { HeaderComponent } from './component/header/header.component';
import { TelaConsultaComponent } from './component/tela-consulta/tela-consulta.component';
import { AgendamentoComponent } from './container/agendamento/agendamento.component';
import { ConsultaComponent } from './container/consulta/consulta.component';



@NgModule({
  declarations: [
    AgendamentoComponent,
    ConsultaComponent,
    HeaderComponent,
    TelaConsultaComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports:[
  ],
  providers:[
    AgendamentoFacade
  ]
})
export class AgendamentoModule { }
