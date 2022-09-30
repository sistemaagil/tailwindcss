import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ChartConfiguration, ChartOptions, ChartType } from "chart.js";

@Component({
  selector: 'app-saas-today',
  templateUrl: './saas-today.component.html',
  styleUrls: ['./saas-today.component.css']
})
export class SaasTodayComponent implements OnInit {
  title = 'ng2-charts-demo';

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      '9:00',
      '10:00',
      '11:00',
      '12:00',
      '1:00',
      '2:00',
      '3:00',
      '4:00',
      '5:00',
      '6:00',
      '7:00',
      '8:00'
    ],
    datasets: [
      {
        data: [ 65, 59, 80, 81, 56, 60, 90, 70, 65, 90, 60, 90 ],
        label: 'Series A',
        fill: true,
        tension: 0.5,
        borderColor: 'white',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        pointBackgroundColor: 'rgba(255, 255, 255, 9)',
        borderCapStyle: 'butt',

      }
    ]
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false
  };
  public lineChartLegend = false;

  constructor() { }

  ngOnInit(): void {
  }

}
