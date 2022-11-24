import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl: string = 'http://www.omdbapi.com/?';
  private apiKey: string = '&apikey=d829ca1f';

  constructor(private http: HttpClient) { }

  getMovies(searchMovie: string): Observable<any>{
    return this.http.get(`${this.apiUrl}&s=${searchMovie}${this.apiKey}`);
  }

  getMovie(id: string) {
    return this.http.get(`${this.apiUrl}&i=${id}${this.apiKey}`);
  }
}
