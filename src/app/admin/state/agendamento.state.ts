import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Agendamento } from "src/app/agendamento/model/agendamento.model";

@Injectable({
    providedIn: 'root'
  })
  export class AdminState {
  
    public agendamentoCollection$ = new BehaviorSubject<Agendamento[]>([]);
  
    constructor() { }
  
    get agendamento$(): BehaviorSubject<Agendamento[]> {
      return this.agendamentoCollection$;
    }
  
    set agendamento(value: Agendamento[]) {
      this.agendamentoCollection$.next(value);
    }
  
    get agendamento(): Agendamento[] {
      return this.agendamentoCollection$.getValue();
    }
  
  }