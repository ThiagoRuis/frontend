import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class MoviesAPIService {

  constructor( private http: HttpClient ) { }

  listUpcoming() {
    const url = environment.api_url + 'upcoming/';
    return this.http.get(url);
  }

  listMovieDetail(movieId) {
    const url = environment.api_url + 'movies/' + movieId;
    return this.http.get(url);
  }

  searchMovie(movieName) {
    const url = environment.api_url + 'search/' + movieName;
    return this.http.get(url);
  }
}
