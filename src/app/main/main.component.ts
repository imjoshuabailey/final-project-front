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
    this.popMovies();
  }

  favorite = {
    movieTitle: null,
    imageUrl: null,
    thirdPartyMovieId: null,
    userId: null,
  }
  

  popMovies() {
    this._movieService.getPopular()
  }

  favoriteButton(title, url, id) {
    this.favorite.movieTitle = title;
    this.favorite.imageUrl = url;
    this.favorite.thirdPartyMovieId = id;
    this.favorite.userId = sessionStorage.getItem('userId')
    console.log("your favorite", this.favorite)
    this._userService.newFavorite(this.favorite)
  }
}
