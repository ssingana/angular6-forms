import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Usermodel } from './usermodel';

import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormserviceService {

  _url = 'http://localhost:3000/user';
  _errorUrl = 'http://localhost:3000/error';

  constructor(private _http : HttpClient) { }

  sendUser(user : Usermodel){
    return this._http.post<any>(this._url,user)
    .pipe(catchError(this.errorHandler));
  } 
  
  sendUserWithError(user : Usermodel){
    return this._http.post<any>(this._errorUrl,user)
    .pipe(catchError(this.errorHandler));
  }


  errorHandler(error : HttpErrorResponse){
    return throwError(error);
  }
}
