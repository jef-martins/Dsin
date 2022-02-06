import { Routes } from "@angular/router";
import { GerencialComponent } from "./container/gerencial/gerencial.component";
import { OperacionalComponent } from "./container/operacional/operacional.component";

export const routes: Routes = [
    { path: 'gerencial', component: GerencialComponent },
    { path: 'operacional', component: OperacionalComponent },
]