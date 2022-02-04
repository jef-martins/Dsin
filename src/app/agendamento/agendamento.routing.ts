import { Routes } from '@angular/router'
import { AgendamentoComponent } from './container/agendamento/agendamento.component'
import { ConsultaComponent } from './container/consulta/consulta.component'

export const routes: Routes = [
    { path: '', component: AgendamentoComponent },
    { path: 'consulta', component: ConsultaComponent },
]