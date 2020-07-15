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
    movieData: null,
  }
  

  popMovies() {
    this._movieService.getPopular()
  }

  favoriteButton(movie) {
    this.favorite.movieData = movie;
    console.log("your favorite", movie)
    this._userService.newFavorite(this.favorite)
  }
}
