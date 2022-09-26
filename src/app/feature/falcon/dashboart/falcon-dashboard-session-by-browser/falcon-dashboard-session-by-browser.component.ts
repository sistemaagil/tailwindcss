import { Component, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-falcon-dashboard-session-by-browser',
  templateUrl: './falcon-dashboard-session-by-browser.component.html',
  styleUrls: ['./falcon-dashboard-session-by-browser.component.css']
})
export class FalconDashboardSessionByBrowserComponent implements OnInit {
  title = 'ng2-charts-demo';
  public doughnutChartLabels: string[] = [ 'Chorme', 'Safari', 'Mozilla' ];
  public doughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] = [
      { data: [ 50.3, 30.1, 20.6 ], label: 'Series A', backgroundColor: [
        'rgb(30 64 175)',
        'rgb(22 163 74)',
        'rgb(94 234 212)'
      ], },




    ];

  public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: false
  };

  constructor() { }

  ngOnInit(): void {
  }

}
