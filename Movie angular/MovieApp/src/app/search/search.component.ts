import { CardService } from './../card.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
  import { SearchService } from '../search.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  movieList;
  movies = [];
  addList;
  year: string;
  constructor(private searchService: SearchService, private cardService: CardService) {}  

  ngOnInit() {
  }getMovie(title: string) {
  this.searchService.getMovies(title)
  .then(re => this.movies = re.Search);
  }
  // setDetails(year: string) {
  //   this.year = year; }
  addMovie(movie){
    //  return this.cardService.addToWishList(movie);
    this.cardService.addToWishList(movie).subscribe(movieD => this.movieList.push(movie.movieId));
  }

  // }
  // addMovie(title,year) {
  //   this.cardService.addMovie(title,year).subscribe(movieD => this.movieList.push(movieD));
  // }
}
