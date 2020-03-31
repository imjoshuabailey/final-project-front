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
  
  imageUrl = "https://image.tmdb.org/t/p/w500"
  

  popMovies() {
    this._movieService.getPopular()
  }
}
