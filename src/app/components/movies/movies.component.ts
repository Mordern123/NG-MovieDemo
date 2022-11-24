import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/_services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies: any = [];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getMovies('encanto');
  }

  getMovies(searchMovie: string) {
    this.movieService.getMovies(searchMovie).subscribe(res => {
      console.log(res);
      this.movies = res.Search;
    })
  }
}
