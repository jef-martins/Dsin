import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AgendamentoFacade } from '../../agendamento.facade';
import { AGENDAMENTO } from '../../model/agendamento.constates';
import { Agendamento } from '../../model/agendamento.model';

@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.css']
})
export class AgendamentoComponent implements OnInit {

  agendamento!: FormGroup;

  constructor(
    public facade: AgendamentoFacade,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.setHideTable();
  }

  initForm() {
    let item: Agendamento | undefined;

    if (this.facade.isEdit.edit)
      item = this.facade.agendamentoCollection$.value.find(i => i.idAgenda == this.facade.isEdit.id);

    this.agendamento = this.fb.group({
      idAgenda:[item?.idAgenda || AGENDAMENTO.idAgenda],
      name:[item?.name || AGENDAMENTO.name, Validators.required],
      phone:[item?.phone || AGENDAMENTO.phone, Validators.required],
      service:[item?.service || AGENDAMENTO.service, Validators.required],
      date:[item?.date || AGENDAMENTO.date, Validators.required],
      time:[item?.time || AGENDAMENTO.time, Validators.required],
      createdAt:[item?.createdAt || AGENDAMENTO.createdAt],
      updatedAt:[item?.updatedAt || AGENDAMENTO.updatedAt],
    });
  }

  setHideTable() {
    this.facade.hideTable = true;
  }

  async save() {
    const res = await this.facade.save(this.agendamento.value);
    if (!!res)
      this.agendamento.setValue(AGENDAMENTO);
  }

  async update() {
    const res = await this.facade.update(this.facade.isEdit.id, this.agendamento.value)
    if (!!res)
      this.agendamento.setValue({ ...AGENDAMENTO, createdAt: '', updatedAt: '' });
  }

}
