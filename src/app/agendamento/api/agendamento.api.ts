import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { lastValueFrom } from "rxjs";
import { environment } from "src/environments/environment";
import { Agendamento, Phone } from "../model/agendamento.model";

@Injectable({
    providedIn: 'root'
})
export class AgendamentoApi {

    private url = environment.url;
    
    constructor(private httpClient: HttpClient) { }

    beforeAdd(request: Agendamento): Promise<any> {
        return lastValueFrom(this.httpClient.post(this.url+"week", request));
    }

    save(request: Agendamento): Promise<any> {
        return lastValueFrom(this.httpClient.post(this.url, request));
    }

    update(id:number, request: Agendamento): Promise<any> {
        return lastValueFrom(this.httpClient.put(this.url + id, request));
    }

    select(request: Phone): Promise<any> {
        return lastValueFrom(this.httpClient.get(this.url + request.phone));
    }
    
    delete(id: number): Promise<any> {
        return lastValueFrom(this.httpClient.delete(this.url + id));
    }
}