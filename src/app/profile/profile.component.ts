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
  }
  imageUrl = "https://image.tmdb.org/t/p/w500"

}
