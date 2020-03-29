import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(public _http: HttpClient) { }

  baseUrl: string = "https://api.themoviedb.org/3"

  api_key: string = "7ab7399c3e1ca41ef2dacf2f056e27f9";

  getMovies() {
    return this._http.get(`${this.baseUrl}${this.api_key}`);
  }
  getPopular(){
    return this._http.get(`${this.baseUrl}/movie/popular?api_key=${this.api_key}&language=en-US&page=1`)
  } 
}
