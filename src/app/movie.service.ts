import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { KeysService } from './keys.service'

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(public _http: HttpClient, private _keysService: KeysService) { }

  baseUrl: string = "https://api.themoviedb.org"
  selectedMovies: any;
  genres: any;
  selectedGenre: any;
  

  // getMovies() {
  //   return this._http.get(`${this.baseUrl}${this._keysService.api_key}`);
  // }
  getPopular(){
    return this._http.get(`${this.baseUrl}/3/movie/popular?api_key=${this._keysService.api_key}&language=en-US&page=1`).subscribe((res: any) => {
      this.selectedMovies = res.results;
      this.selectedGenre = "Popular Movies"
      console.log('popular movies', this.selectedMovies)
    }, err => {
      //handle errors
    })
  } 
  getGenre(){
    return this._http.get(`${this.baseUrl}/3/genre/movie/list?api_key=${this._keysService.api_key}&language=en-US`).subscribe((res: any) => {
      this.genres = res.genres;
      console.log('genres', this.genres)
    })
  }

  displaySelectedGenre(genreId, genreName) {
    return this._http.get(`${this.baseUrl}/3/discover/movie?api_key=${this._keysService.api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreId}`).subscribe((res: any) => {
      this.selectedMovies = res.results;
      this.selectedGenre = genreName
      console.log('selected movies', this.selectedMovies)
    })
  }

  searchMovies(query) {
    return this._http.get(`${this.baseUrl}/3/search/movie?api_key=${this._keysService.api_key}&language=en-US&query=${query}&page=1&include_adult=false`).subscribe((res: any) => {
      
      this.selectedMovies = res.results;
      this.selectedGenre = "Searched results for: " + query;
      console.log("query", this.selectedMovies)
      

    })
  }

}