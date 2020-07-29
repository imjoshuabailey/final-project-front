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

  selectGenre(genreId, genreName) {
    this._movieService.displaySelectedGenre(genreId, genreName);
  }

  viewPopMovies() {
    this._movieService.getPopular()
    this._userService.goToDash()
  }

  movieSearch() {
    if(this.form.search != null){
        this._movieService.searchMovies(this.form.search)
        this.form.search = null
    }else{
      alert("please enter a movie title to search")
    }
  }

  logout() {
    let tkn = sessionStorage.getItem('token')
    console.log("token is", tkn)
    this._userService.logoutUser(tkn);
    }

}
