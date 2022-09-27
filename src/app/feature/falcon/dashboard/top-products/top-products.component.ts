import { Component, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';


@Component({
  selector: 'app-top-products',
  templateUrl: './top-products.component.html',
  styleUrls: ['./top-products.component.css']
})
export class TopProductsComponent implements OnInit {
  title = 'ng2-charts-demo';

  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [ 'Boots4', '', 'Slick', '', 'Sparrow', '', 'Freya' ],
    datasets: [
      { data: [ 43, 83, 86, 72, 80, 50,80 ], label: '2019 ' ,backgroundColor: 'rgba(59 130 246)'},
      { data: [ 85, 73, 62, 53, 50, 70, 90 ], label: '2018 ' , backgroundColor: 'rgba(203 213 225)'},


    ]
  };


  constructor() { }

  ngOnInit(): void {
  }

}
