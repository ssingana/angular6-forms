import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usermodel } from './usermodel';

@Injectable({
  providedIn: 'root'
})
export class FormserviceService {

  _url = 'http://localhost:3000/user';

  constructor(private _http : HttpClient) { }

  sendUser(user : Usermodel){
    return this._http.post<any>(this._url,user);
  }
}
