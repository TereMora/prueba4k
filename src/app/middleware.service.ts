import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { endpoints } from './configuration.service';

@Injectable({
  providedIn: 'root'
})
export class MiddlewareService {
  private httpOptions: any;
  private nativeHeader: any;
  private apiURL: string;
  private _httpClientModule: HttpClient;
  constructor(
    private httpClient: HttpClient,
    httpClientModule: HttpClient
  ) { 
    this.apiURL = 'https://apiapp.xpresshosting.com/api/';
    this._httpClientModule = httpClientModule;
    this.httpOptions = {
      headers: new HttpHeaders({
          'Content-Type': 'application/json'
      })
    };

    this.nativeHeader = {
        'Content-Type': 'application/json'
    };
  }

  public post(
    key: string,
    request?: any,
    isPublic?: boolean,
    hideModal?: boolean,
    hideSpinner?: boolean,
    viaInternet?: boolean,
    headers?: any): Observable<any> {
    let url: string;
    url = this.apiURL + endpoints[key];

    console.log('url :', url);
        const cookie = localStorage.getItem('cookie');
        if (cookie) {
        }
        console.log('"url:"', url);
        return from(this.httpClient.post(url, request, this.httpOptions)
            .toPromise().then((res: any) => {
                    return res;
            })
        );
  }

  public get(
    key: string,
    isPublic?: boolean,
    hideModal?: boolean,
    hideSpinner?: boolean,
    viaInternet?: boolean): Observable<any> {
    let url: string;
    url = this.apiURL + endpoints[key];

        const cookie = localStorage.getItem('cookie');
        return from(this.httpClient.get(url, this.httpOptions).toPromise().then((res: any) => {
                    return res;
            })
        );
  }
  
}
