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
  
  isLoggedIn = false;
  firstName: string;

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

  loginUser(userCredentials) {
    return this._http.post(`${this.backendUrl}${this.loginUrl}`, userCredentials).subscribe((res: any) => {
      console.log("res:", res)
      sessionStorage.setItem('token', res.token);
      sessionStorage.setItem('userId', res.userId);
      this.firstName = res.userData.firstName;
      this.isLoggedIn = true;
      this.goToProfile();
    }, err => {
        alert("incorrect email or passwrod")
    })
  };

  newFavorite(selectedFavorite) {
    let userId = sessionStorage.getItem('userId')
    console.log("selectedFavorite", selectedFavorite)
    console.log("userId", userId)
    return this._http.post(`${this.backendUrl}${this.appUserUrl}${userId}/favorites`, selectedFavorite).subscribe((res: any) => {
      this.goToProfile();
    })
  }
  // "http://localhost:3000/api/appUsers/5e7990ff43ef17539e2ae000/favorites"

  listFavorites() {
    let userId = sessionStorage.getItem('userId')
    return this._http.get(`${this.backendUrl}${this.appUserUrl}${userId}/favorites`).subscribe((res: any) => {
      this.favoritedMovies = res
    })
  }

  deleteFavorite(movieId) {
    let userId = sessionStorage.getItem('userId') 
    return this._http.delete(`${this.backendUrl}${this.appUserUrl}${userId}/favorites/${movieId}`).subscribe((res: any) => {
      this.listFavorites()
      console.log("delete res", res)
      console.log("new favorites", this.favoritedMovies)
    })
  }

  // navigates to 
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
      this.router.navigate(['main'])
    }
  }
}
