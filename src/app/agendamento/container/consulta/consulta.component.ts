import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { AgendamentoFacade } from '../../agendamento.facade';
import { Agendamento, Phone } from '../../model/agendamento.model';
import { format, add } from 'date-fns'

@UntilDestroy()
@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  agendamentos!: Agendamento[];

  constructor(public facade: AgendamentoFacade, private route: Router) { }

  ngOnInit(): void {
    this.facade.agendamentoCollection$.pipe(untilDestroyed(this)).subscribe(res => {

      const dateFormated = this.formatDate(res);

      this.agendamentos = dateFormated;
    });
  }

  formatDate(itens: Agendamento[]) {
    return itens.map(item => {
      return {
        ...item,
        date: format(add(new Date(item.date),{days: 1}), 'dd/MM/yyyy')
      }
    });
  }

  async setSearch(event: Phone) {
    await this.facade.select(event);
  }

  delete(id: number, phone: string) {
    this.facade.delete(id, { phone });
  }

  update(id: number) {
    this.facade.isEdit = { edit: true, id: id };
    this.route.navigate(['agendamento']);
  }

}
