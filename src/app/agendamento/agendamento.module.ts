import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendamentoComponent } from './container/agendamento/agendamento.component';
import { RouterModule } from '@angular/router';
import { routes } from './agendamento.routing';
import { HeaderComponent } from './component/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AgendamentoFacade } from './agendamento.facade';
import { ConsultaComponent } from './container/consulta/consulta.component';
import { HttpClientModule } from '@angular/common/http';
import { TelaConsultaComponent } from './component/tela-consulta/tela-consulta.component';



@NgModule({
  declarations: [
    AgendamentoComponent,
    HeaderComponent,
    ConsultaComponent,
    TelaConsultaComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers:[
    AgendamentoFacade
  ]
})
export class AgendamentoModule { }
