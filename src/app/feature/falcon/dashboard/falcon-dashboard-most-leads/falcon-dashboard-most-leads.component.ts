import { Component, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-falcon-dashboard-most-leads',
  templateUrl: './falcon-dashboard-most-leads.component.html',
  styleUrls: ['./falcon-dashboard-most-leads.component.css']
})
export class FalconDashboardMostLeadsComponent implements OnInit {
  title = 'ng2-charts-demo';
  public doughnutChartLabels: string[] = [ 'Falcon', 'Sparrow', 'Phoenix' ];
  public doughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] = [
      { data: [ 58, 21, 22 ], label: 'Series A', backgroundColor: [
        'rgb(2 132 199)',
        'rgb(34 211 238)',
        'rgb(251 146 60)'
      ], },




    ];

  public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: false
  };


  constructor() { }

  ngOnInit(): void {
  }

}
