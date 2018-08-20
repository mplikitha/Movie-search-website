import { Injectable, Input } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { MovieDetails } from './movie';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { getLocaleFirstDayOfWeek } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CardService {
 private url = 'http://localhost:8080/api/v1/';
// private  url = 'http://www.omdbapi.com/?s=+"this.movieNa"+&apikey=12dba97a';
  // private  url = '/assets/data/detail.json';

  movies =new MovieDetails("","","","");
 constructor(private http: HttpClient) { }

 getWhishList(): Observable<MovieDetails[]> {
return this.http.get<MovieDetails[]>(this.url+'/movies');
}
deleteWishList(movieId) {
    console.log(this.url+ '/movie/' + movieId);
       return this.http.delete(this.url + '/movie/' + movieId).pipe(
         map((response1: Response) => {
           return response1.json();
         })
       );
     }
     addToWishList(movie){
    //    console.log(this.movies.movieId);
        this.movies.movieId=movie.id;
       this.movies.movieTitle=movie.Title;
        this.movies.movieRating=movie.vote_avg;
        this.movies.releaseYear=movie.Year;
        return this.http.post<MovieDetails>(this.url + '/movie', this.movies);

    }
   
}