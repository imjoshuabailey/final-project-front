import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public _userService: UserService, public _movieService: MovieService) { }

  ngOnInit(): void {
    // displays favorites when viewing profile page
    this.viewFavorites()
  }

  currentUser = sessionStorage.getItem('userId')
  
  // calls function from user service to get list of current users favorites
  viewFavorites() {
    this._userService.listFavorites()
  }

  // calls function from user service to delete selected movie
  delete(movieId) {
    this._userService.deleteFavorite(movieId)
  }

}