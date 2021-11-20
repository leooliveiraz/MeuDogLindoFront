import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }
  url = `${environment.API_URL}web-push`;

  inscrever(objeto: any) {
    const endpoint = objeto.endpoint;
    const header = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return  this.http.post(`${endpoint}`, objeto, { headers: header });
  }
}
