import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient, private router: Router) { }

  baseUrl: string = "http://localhost:3000/api/";
  appUserUrl: string = "appUsers/"
  loginUrl: string = "appUsers/login"
  isLoggedIn = false;
  firstName: String;

  registerUser(userCredentials) {
    return this._http.post(`${this.baseUrl}${this.appUserUrl}`, userCredentials).subscribe((res: any) => {
      sessionStorage.setItem('token', res.token);
      sessionStorage.setItem('userId', res.userId);
      this.firstName = res.firstName;
      this.isLoggedIn = true;
      this.goToDash();
    })
  };

  loginUser(userCredentials) {
    return this._http.post(`${this.baseUrl}${this.loginUrl}`, userCredentials).subscribe((res: any) => {
      sessionStorage.setItem('token', res.token);
      sessionStorage.setItem('userId', res.userId);
      this.firstName = res.firstName;
      this.isLoggedIn = true;
      this.goToDash();
    }, err => {
        //code to run if login credentials fail
    })
  };

  goToDash() {
    this.router.navigate(['/home'])
  }
}
