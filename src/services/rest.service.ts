import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  url = 'http://localhost:8080';
  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  })

  constructor(private http: HttpClient) { }

  public get(url): Observable<string> {
    return this.http.get<string>(this.url + url, {headers: this.headers});
  }

  public post(url, data): Observable<string> {
    return this.http.post<string>(this.url + url, data, {headers: this.headers});
  }

  public put(url: string, data: any): Observable<string> {
    return this.http.put<string>(this.url + url, data, {headers: this.headers});
  }
}
