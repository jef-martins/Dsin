import { Injectable } from "@angular/core";
import { UntilDestroy } from "@ngneat/until-destroy";
import { AdminApi } from "./api/agendamento.api";
import { AdminState } from "./state/agendamento.state";

@UntilDestroy()
@Injectable()
export class AdminFacade {

    public agendamentoCollection$ = this.state.agendamentoCollection$;

    constructor(
        private api: AdminApi,
        private state: AdminState
    ) { }

    async selectWeek(date:string) {
        try {
            const res = await this.api.selectWeek(date)
            
            return res.length;
        } catch (err) {
            alert("Erro ao listar: " + err);
            return 0;
        }
    }

}