import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';

declare var Chart:any;

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  @ViewChild('canvas') chartCanvas: ElementRef;

  graph:any;

  movieId: any;

  movieData: any;

  





  constructor(private _el: ElementRef, private _route: ActivatedRoute, private _dataService: DataService) {
    this.movieId = this._route.snapshot.paramMap.get('id');
    console.log(this.movieId)



  }

  ngOnInit() {

    console.log(this.chartCanvas.nativeElement)

    this.graph = this.chartCanvas.nativeElement.getContext('2d');

    this.graph.canvas.width = 100;
    this.graph.canvas.height = 100;

    

    

    this._dataService.getMovieDetails(this.movieId)
      .subscribe(
      (response) => {
        if (response.status == 200) {
          this.movieData = response.json();
          console.log(this.movieData)
          setTimeout(() => {
            this.createChart();
          },2000)
        } else {
          alert(JSON.stringify(response))
        }
      }
      )
  }

  getContainerBg() {
    let bgStr = {};
    bgStr = {
      'width': '100%',
      'min-height': '200px',
      'background-image': `url(https://image.tmdb.org/t/p/w300_and_h450_bestv2/${this.movieData.backdrop_path}),linear-gradient(to right, rgba(30, 75, 115, 1), rgba(255, 255, 255, 0))`,
      'background-repeat': 'no-repeat ,no-repeat',
      'background-position': 'top center,right',
      'background-size': '150%, 100%'
    }
    // console.log(bgStr)
    return bgStr;
  }

  getPoster(poster) {
    let posterStr = `https://image.tmdb.org/t/p/w300_and_h450_bestv2/${poster}`
    return posterStr;
  }

  createChart(){

    let voteData = this.movieData.vote_average;
    let totalVoteLeft = 10 - this.movieData.vote_average;

    Chart.defaults.global.legend.display = false;
    

    var myChart = new Chart(this.graph, {
      type: 'pie',
      backgroundColor:[
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(54, 162, 235, 0.2)'
      ],
      data: {
        datasets: [{
            data: [totalVoteLeft,voteData],
            backgroundColor: ["#81d4fa", "#009688"]
        }],
        labels: [
            "dislikes",
            "likes"
        ]
      }
    });
  }

}
