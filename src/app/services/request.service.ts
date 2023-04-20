import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  constructor(private httpClient: HttpClient, @Inject("baseUrl") private baseUrl: string) { }

  private url(requestParams: Partial<requestParams>){
    return `${requestParams.baseUrl ? requestParams.baseUrl : this.baseUrl}/${requestParams.controller ? requestParams.controller : ""}${requestParams.action ? `/${requestParams.action}` : ""}`
  }

  get<T>(requestParams: Partial<requestParams>, id?: string): Observable<T> {
    let url: string;
    if(requestParams.FullEndpoint)
    url = requestParams.FullEndpoint;
    else
    url = `${this.url(requestParams)}${id ? `/${id}` : ""}`;
    
   return this.httpClient.get<T>(url,{headers: requestParams.header});
  }

  post<T>(requestParams: Partial<requestParams>, body: Partial<T>): Observable<T>{
    let url: string;
    if(requestParams.FullEndpoint)
    url = requestParams.FullEndpoint;
    else
    url = `${this.url(requestParams)}`;
    return this.httpClient.post<T>(url,body, {headers: requestParams.header});
  }

  put<T>(requestParams:requestParams, body: Partial<T>): Observable<T>{
    let url: string;
    if(requestParams.FullEndpoint)
    url = requestParams.FullEndpoint;
    else
    url = `${this.url(requestParams)}`;
    return this.httpClient.put<T>(url,body, {headers: requestParams.header});
  }

  delete<T>(requestParams:requestParams, id: string): Observable<T>{
    let url: string;
    if(requestParams.FullEndpoint)
    url = requestParams.FullEndpoint;
    else
    url = `${this.url(requestParams)}`+"/"+`${id}`;
    console.log(url);

    return this.httpClient.delete<T>(url, {headers: requestParams.header})
  }
}
export class requestParams{
  controller?: string;
  action?: string;

  header?: HttpHeaders;
  baseUrl?: string;
  FullEndpoint?: string;


}
