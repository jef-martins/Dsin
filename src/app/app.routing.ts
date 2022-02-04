import { Routes } from '@angular/router'

export const routes: Routes = [
    { path: '', redirectTo: '/agendamento', pathMatch: 'full' },
    { path: "agendamento", loadChildren: () => import('./agendamento/agendamento.module').then(m => m.AgendamentoModule) },
    { path: "admin", loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }
]