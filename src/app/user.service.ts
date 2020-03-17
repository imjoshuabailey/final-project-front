import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) { }

  baseUrl: string = "http://localhost:3000/api/";
  appUserUrl: string = "appUsers/"

  registerUser(userCredentials) {
    this._http.post(`${this.baseUrl}${this.appUserUrl}`, userCredentials)
  }
}
