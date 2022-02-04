import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AgendamentoFacade } from '../../agendamento.facade';
import { AGENDAMENTO } from '../../model/agendamento.constates';

@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.css']
})
export class AgendamentoComponent implements OnInit {

  agendamento!: FormGroup;

  constructor(private facade: AgendamentoFacade, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.agendamento = this.fb.group(AGENDAMENTO);
    this.facade.hideTable = true
  }

  save(){
    this.facade.save(this.agendamento.value);
  }

}
