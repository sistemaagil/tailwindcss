import { Component, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-falcon-dashboard-market-share',
  templateUrl: './falcon-dashboard-market-share.component.html',
  styleUrls: ['./falcon-dashboard-market-share.component.css']
})
export class FalconDashboardMarketShareComponent implements OnInit {
  title = 'ng2-charts-demo';
  public doughnutChartLabels: string[] = [ 'Apple', 'Samsung', 'Huawei' ];
  public doughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] = [
      { data: [ 58, 21, 22 ], label: 'Series A', backgroundColor: [
        'rgb(2 132 199)',
        'rgb(34 211 238)',
        'rgb(156 163 175)'
      ], },
    ]

  public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: false
  };

  constructor() { }

  ngOnInit(): void {
  }

}
