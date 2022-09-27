import { Component, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-falcon-analytics-completed',
  templateUrl: './falcon-analytics-completed.component.html',
  styleUrls: ['./falcon-analytics-completed.component.css'],
})
export class FalconAnalyticsCompletedComponent implements OnInit {
  title = 'ng2-charts-demo';

  public barChartLegend = false;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['', '', '', '', '', '', '', '', '', '', '', '', ''],
    datasets: [{ data: [80, 59, 80, 81, 56, 55, 40, 59, 80, 81, 56, 55, 40],
      backgroundColor: [
        'rgba(15, 108, 238, 1)',
      ],
      borderColor: [
        'rgb(255, 99, 132)',
      ],
    }],
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
    scales: {
      y: {
        ticks: {
          display: false,
        },
        grid: {
          drawTicks: false,
          display: false,
        },
      },
      x: {
        ticks: {
          display: false,
        },
        grid: {
          drawTicks: false,
          display: false,
        },
      },
    },
  };

  constructor() {}

  ngOnInit(): void {}
}
