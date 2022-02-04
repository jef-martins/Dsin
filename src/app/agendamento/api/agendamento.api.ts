import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Agendamento, Phone } from "../model/agendamento.model";

@Injectable({
    providedIn: 'root'
})
export class AgendamentoApi {

    private url = environment.url+"client/";
    
    constructor(private httpClient: HttpClient) { }

    save(request: Agendamento): Observable<any> {
        return this.httpClient.post(this.url, request);
    }

    select(request: Phone): Observable<any> {
        return this.httpClient.get(this.url +"/"+ request);
    }
}