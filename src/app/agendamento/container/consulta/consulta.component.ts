import { Component, OnInit } from '@angular/core';
import { AgendamentoFacade } from '../../agendamento.facade';
import { Phone } from '../../model/agendamento.model';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  constructor(public facade: AgendamentoFacade) { }

  ngOnInit(): void {
  }

  setSearch(event: Phone){
    this.facade.select(event)
  }

}
