import { Component, OnInit } from '@angular/core';
import { UserService } from "../user.service"
import { MovieService } from '../movie.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public _userService: UserService, public _movieService: MovieService) { }

  ngOnInit(): void {
    this.showGenre();
  }
  form = {
    search: null,
  };
  userName = this._userService.firstName
  browseClicked = false;

  browseButton() {
    if (this.browseClicked == false) {
      return this.browseClicked = true;
    } else {
      return this.browseClicked = false;
    }

  }

  showGenre() {
    this._movieService.getGenre()
  }

  selectGenre(genreId) {
    this._movieService.displaySelectedGenre(genreId);
  }

  viewPopMovies() {
    this._movieService.getPopular()
  }

  movieSearch() {
    this._movieService.searchMovies(this.form.search)
  }

}
