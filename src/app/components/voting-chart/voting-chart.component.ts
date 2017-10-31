import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare var Chart: any;

@Component({
  selector: 'app-voting-chart',
  templateUrl: './voting-chart.component.html',
  styleUrls: ['./voting-chart.component.css']
})
export class VotingChartComponent implements OnInit {

  @ViewChild('donut') donut: ElementRef;

  graph:any

  constructor() { }

  ngOnInit() {
    
    this.graph = this.donut.nativeElement.getContext('2d');
    
        this.graph.canvas.width = 100;
        this.graph.canvas.height = 100;
    
        var myChart = new Chart(this.graph, {
          type: 'pie',
          backgroundColor:[
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(54, 162, 235, 0.2)'
          ],
          data: {
            datasets: [{
                data: [10,77],
                backgroundColor: ["#0074D9", "#FF4136"]
            }]
          }
        });

  }

}
