import { Component, OnInit } from '@angular/core';
import { add, format } from 'date-fns';
import { AdminFacade } from '../../admin.facade';

@Component({
  selector: 'app-gerencial',
  templateUrl: './gerencial.component.html',
  styleUrls: ['./gerencial.component.css']
})
export class GerencialComponent implements OnInit {

  qtdAgendamentos: number = 0;
  qtdAgendamentosPast: number = 0;
  qtdAgendamentosPercent: number = 0;
  avgAgendamentosPercent: number = 0;
  avgAgendamentos: number = 0;

  constructor(public facade: AdminFacade) { }

  ngOnInit(): void {
    this.initCalcs();
  }

  async initCalcs() {
    this.qtdAgendamentos = await this.facade.selectWeek(format(new Date(), 'yyyy-MM-dd'));
    this.qtdAgendamentosPast = await this.facade.selectWeek(format(add(new Date(), { days: -7 }), 'yyyy-MM-dd'));
    this.qtdAgendamentosPercent = +(this.qtdAgendamentos * 100 / this.qtdAgendamentosPast * 0.5).toFixed(2);
    this.avgAgendamentos = (this.qtdAgendamentosPast + this.qtdAgendamentos) / 2;
    this.avgAgendamentosPercent = +(this.avgAgendamentos * 100 / this.qtdAgendamentos * 0.5).toFixed(2);
  }

}
