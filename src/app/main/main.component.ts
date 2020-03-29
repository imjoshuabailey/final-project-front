import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(public _movieService: MovieService) { }

  ngOnInit(): void {
    this.popMovies();
  }
  
  imageUrl = "https://image.tmdb.org/t/p/w500"
  popularMovies: any;

  popMovies() {
    this._movieService.getPopular().subscribe((res: any) => {
      this.popularMovies = res.results;
      console.log(this.popularMovies)
    }, err => {
      //handle errors
    })
  }
}
