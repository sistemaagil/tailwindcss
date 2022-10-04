import { Component, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-product-share',
  templateUrl: './product-share.component.html',
  styleUrls: ['./product-share.component.css']
})
export class ProductShareComponent implements OnInit {
  public doughnutChartLabels: string[] = [ 'Falcon', 'Sparrow'];
  public doughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] = [
      { data: [ 50,88 ], label: 'Series A' },
    ];

  public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    radius: 45,
    rotation: 270,
    circumference:180,
    responsive: false
  };

  constructor() { }

  ngOnInit(): void {
  }

}
