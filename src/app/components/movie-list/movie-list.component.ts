import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

declare var Microtext:any;

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  pageNumber:number = 1;

  movieYear:number = 2017;

  yearsArray = ["2010","2011","2012","2013","2014","2015","2016","2017"];

  moviesMetaData:any;
  moviesArray:Array<any> = [];

  constructor(private _dataService:DataService,private _router:Router) { }

  ngOnInit() {
  }

  searchMovieByYearAndPage({year,page}){
    console.log(year)
    this.movieYear = year;
    this.pageNumber = page;
    this._dataService.getMoviesList(this.pageNumber,this.movieYear)
    .subscribe(
      (response:any) => {
        console.log(response);
        if(response.status == 200){
          this.getResponseData(response.json());
        }
      }
    )
  };///

  getResponseData(data){
    this.moviesMetaData = data;    
    this.moviesArray = data.results;
    console.log(this.moviesMetaData)
  }

  getBackdropImg(img){
    return "http://image.tmdb.org/t/p/w185/"+img;
  }

  truncateText(text,length){
    return Microtext.truncate(text, length)
  }

  nextPage(){
    this.pageNumber++;
    this.searchMovieByYearAndPage({year:this.movieYear,page:this.pageNumber});
  }

  gotoMovieDetails(movie){
    console.log(movie)
    this._router.navigate(['/movie',movie.id])
  }

}
