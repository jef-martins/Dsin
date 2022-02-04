import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AGENDAMENTO } from '../../model/agendamento.constates';
import { Phone } from '../../model/agendamento.model';

@Component({
  selector: 'app-tela-consulta',
  templateUrl: './tela-consulta.component.html',
  styleUrls: ['./tela-consulta.component.css']
})
export class TelaConsultaComponent implements OnInit {

  search!: FormGroup;
  @Output() onSearch = new EventEmitter<Phone>();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.search = this.fb.group({phone: ''});
  }

  select(){
    this.onSearch.emit(this.search.value)
  }

}
