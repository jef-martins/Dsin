import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { AGENDAMENTO } from "../model/agendamento.constates";
import { Agendamento } from "../model/agendamento.model";

@Injectable({
    providedIn: 'root'
  })
  export class AgendamentoState {
  
    public agendamentoDocument$ = new BehaviorSubject<Agendamento>(AGENDAMENTO);
  
    constructor() { }
  
    get agendamento$(): BehaviorSubject<Agendamento> {
      return this.agendamentoDocument$;
    }
  
    set agendamento(value: Agendamento) {
      this.agendamentoDocument$.next(value);
    }
  
    get agendamento(): Agendamento {
      return this.agendamentoDocument$.getValue();
    }
  
  }