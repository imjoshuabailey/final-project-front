import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient, private router: Router) { }

  favoritedMovies: any = false;
  backendUrl: string = "http://localhost:3000/api/";
  appUserUrl: string = "appUsers/"
  loginUrl: string = "appUsers/login"
  logoutUrl: string = "appUsers/logout"
  isLoggedIn = false;
  firstName: string;

  // creates new user in database
  registerUser(userCredentials) {
    return this._http.post(`${this.backendUrl}${this.appUserUrl}`, userCredentials).subscribe((res: any) => {
      sessionStorage.setItem('token', res.token);
      sessionStorage.setItem('userId', res.userId);
      this.firstName = res.firstName;
      this.isLoggedIn = true;
      this.goToDash();
    }, err => {
      alert("Please enter valid inforamtion")
    })
  };

  // logs user in and creates token
  loginUser(userCredentials) {
    return this._http.post(`${this.backendUrl}${this.loginUrl}`, userCredentials).subscribe((res: any) => {
      console.log("res:", res)
      sessionStorage.setItem('token', res.token);
      sessionStorage.setItem('userId', res.userId);
      console.log(sessionStorage.getItem("token"));
      this.firstName = res.userData.firstName;
      this.isLoggedIn = true;
      this.goToProfile();
    }, err => {
        alert("incorrect email or passwrod")
    })
  };

  //logs user out
  logoutUser(token) {
    return this._http.post(`${this.backendUrl}${this.logoutUrl}`, `Authorization: ${sessionStorage.getItem('token')}`).subscribe((res: any) => {
      this.isLoggedIn = false;
      this.goToDash();
    })
  }

  // creates new favorite in database
  newFavorite(selectedFavorite) {
    let userId = sessionStorage.getItem('userId')
    console.log("selectedFavorite", selectedFavorite)
    console.log("userId", userId)
    return this._http.post(`${this.backendUrl}${this.appUserUrl}${userId}/favorites`, selectedFavorite).subscribe((res: any) => {
      this.goToProfile();
    })
  }
 

  // returns the logged in user's favorites
  listFavorites() {
    let userId = sessionStorage.getItem('userId')
    return this._http.get(`${this.backendUrl}${this.appUserUrl}${userId}/favorites`).subscribe((res: any) => {
      this.favoritedMovies = res
    })
  }

  // deletes selected database
  deleteFavorite(movieId) {
    let userId = sessionStorage.getItem('userId') 
    return this._http.delete(`${this.backendUrl}${this.appUserUrl}${userId}/favorites/${movieId}`).subscribe((res: any) => {
      this.listFavorites()
      console.log("delete res", res)
      console.log("new favorites", this.favoritedMovies)
    })
  }

  // navigates to main page
  goToDash() {
    this.router.navigate(['main'])
  }

  // navigates to profile page
  goToProfile() {
    this.router.navigate(['profile'])
  }

  // if user is not logged in send to main page
  checkLoggedIn() {
    if(this.isLoggedIn == false) {
      this.goToDash()
    }
  }
}
