import { Injectable } from "@angular/core";
import { UntilDestroy } from "@ngneat/until-destroy";
import { AgendamentoApi } from "./api/agendamento.api";
import { EDIT } from "./model/agendamento.constates";
import { Agendamento, Edit, Phone } from "./model/agendamento.model";
import { AgendamentoState } from "./state/agendamento.state";

@UntilDestroy()
@Injectable()
export class AgendamentoFacade {

    public agendamentoCollection$ = this.state.agendamentoCollection$;
    public hideTable = true;
    public isEdit: Edit = EDIT;

    constructor(
        public state: AgendamentoState,
        private api: AgendamentoApi
    ) { }

    async save(agendamento: Agendamento) {
        try {
            let res: any;
            agendamento = await this.beforeAdd(agendamento)

            res = await this.api.save(agendamento);
            alert("agenda Salva com sucesso");
            return res;

        } catch (err: any) {
            alert("aqui " + err.error)
        }
    }

    async beforeAdd(agendamento: Agendamento) {
        
        const [beforeRes] = await this.api.beforeAdd(agendamento);

        let boo = false;
        if (beforeRes)
            boo = confirm("já contem um agendamento para esta semana. Deseja mudar para o mesmo dia?");

        if (boo)
            agendamento = {
                ...agendamento,
                date: beforeRes.split('T')[0]
            };
        return agendamento;
    }

    async update(id: number, agendamento: Agendamento) {
        try {
            const res = await this.api.update(id, agendamento);
            alert("agenda Atualizada com sucesso");
            return res;
        } catch (err) {
            alert("Não foi possivel atualizar agendar")
        }
    }

    async select(phone: Phone) {
        try {
            this.state.agendamento = await this.api.select(phone)
            this.hideTable = false;
            return true;
        } catch (err) {
            alert("Erro ao listar: " + err);
        }
        return false;
    }

    async delete(id: number, phone: Phone) {
        try {
            await this.api.delete(id);
            this.select(phone);
        } catch (err) {
            alert("erro ao tentar excluir");
        }
    }

}