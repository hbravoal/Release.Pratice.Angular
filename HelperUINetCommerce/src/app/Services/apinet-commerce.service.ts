import { Programs } from 'src/app/Models/NetCommerce/programs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { User } from '../Models/NetCommerce/user';
@Injectable({
  providedIn: 'root'
})
export class APINetCommerceService {
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'

    })
  };
  constructor(private http: HttpClient) { }

  GetUsers() {
    console.log(environment.NetCommerceBase + environment.NetCommerceUsers);
    return this.http.get<User>(environment.NetCommerceBase + environment.NetCommerceUsers);
  }

  GetPrograms() {
    console.log(environment.NetCommerceBase + environment.NetCommercePrograms);
    return this.http.post<Programs>(environment.NetCommerceBase + environment.NetCommercePrograms, '', this.httpOptions);
  }
}
