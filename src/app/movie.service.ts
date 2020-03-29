import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { KeysService } from './keys.service'

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(public _http: HttpClient, private _keysService: KeysService) { }

  baseUrl: string = "https://api.themoviedb.org/3"

  

  getMovies() {
    return this._http.get(`${this.baseUrl}${this._keysService.api_key}`);
  }
  getPopular(){
    return this._http.get(`${this.baseUrl}/movie/popular?api_key=${this._keysService.api_key}&language=en-US&page=1`)
  } 
}
