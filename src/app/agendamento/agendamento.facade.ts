import { Injectable } from "@angular/core";
import { AgendamentoApi } from "./api/agendamento.api";
import { Agendamento, Phone } from "./model/agendamento.model";
import { AgendamentoState } from "./state/agendamento.state";

@Injectable()
export class AgendamentoFacade {

    public agendamentoDocument$ = this.state.agendamentoDocument$;
    public hideTable = true;

    constructor(
        public state: AgendamentoState,
        private api: AgendamentoApi
    ) { }

    save(agendamento: Agendamento) {
        this.api.save(agendamento);
    }

    select(phone: Phone) {
        this.hideTable = false;
        this.api.select(phone)
    }

}