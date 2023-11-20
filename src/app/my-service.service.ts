import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor(
    private http: HttpClient
  ) { }


  getGotQuotes(): Observable <String> {
    return this.http.get<any>('https://api.gameofthronesquotes.xyz/v1/random/5');
  }
}
