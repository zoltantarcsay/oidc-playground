import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProxyRequest } from './model/proxy-request';
import { ProxyResponse } from './model/proxy-response';

@Injectable({
  providedIn: 'root'
})
export class ProxyService {
  url = '/api/v1/proxy';

  constructor(private http: HttpClient) { }

  request<Req, Res>(data: ProxyRequest<Req>): Promise<ProxyResponse<Res>> {
    return this.http.post<ProxyResponse<Res>>(this.url, data).toPromise();
  }

}
