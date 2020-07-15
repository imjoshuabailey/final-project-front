import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { UserService } from '../user.service'


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(public _movieService: MovieService, public _userService: UserService) { }

  ngOnInit(): void {
    if(this._movieService.firstLoad === false) {
      this.popMovies();
    }
  }

  currentId = null

  favorite = {
    movieTitle: null,
    imageUrl: null,
    thirdPartyMovieId: null,
    movieData: null,
    userId: null,
  }
  

  popMovies() {
    this._movieService.getPopular()
  }

  favoriteButton(movie) {
    this.favorite.movieTitle = movie.title;
    this.favorite.imageUrl = movie.poster_path;
    this.favorite.thirdPartyMovieId = movie.id;
    this.favorite.movieData = movie;
    this.currentId = sessionStorage.getItem('userId')
    console.log("your favorite", movie)
    this._userService.newFavorite(this.favorite, this.currentId)
  }
}
