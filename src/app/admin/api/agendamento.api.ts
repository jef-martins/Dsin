import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { format } from 'date-fns';
import { lastValueFrom } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class AdminApi {

    private url = environment.url;
    
    constructor(private httpClient: HttpClient) { }

    selectWeek(date: string): Promise<any> {
        return lastValueFrom(this.httpClient.get(this.url+"week/"+date));
    }

}