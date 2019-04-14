import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  url = 'https://fhictdigital-backend-staging.herokuapp.com/';

  enco : any = new HttpHeaders()
  .set('Content-Type', 'application/x-www-form-urlencoded');

  
  constructor(private http: HttpClient) { }

  public get(url): Observable<string> {
    return this.http.get<string>(this.url + url,  {
      headers: this.enco,withCredentials:true
    });
  }

  public post(url, data): Observable<string> {
    return this.http.post<string>(this.url + url, data,  {
      headers: this.enco,withCredentials:true
    });
  }
}
