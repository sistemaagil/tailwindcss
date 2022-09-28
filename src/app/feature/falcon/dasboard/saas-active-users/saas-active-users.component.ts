import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions } from "chart.js";

@Component({
  selector: 'app-saas-active-users',
  templateUrl: './saas-active-users.component.html',
  styleUrls: ['./saas-active-users.component.css']
})
export class SaasActiveUsersComponent implements OnInit {
  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
    ],
    datasets: [
      {
        data: [ 10, 70, 20, 150, 120 ],
        label: 'Series A',
        fill: true,
        tension: 0.1,
        borderColor: 'rgb(0, 0, 255)',
        backgroundColor: 'rgba(191, 219, 254, 0.3)'
      }
    ]
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false,
    scales: {
      y: {
        ticks: {
          display: false //this will remove only the label
        },
        grid: {
          drawTicks: false,
          display: false
        }
      },
      x: {
        ticks: {
          display: false //this will remove only the label
        },
        grid: {
          drawTicks: false,
          display: false
        }
      }
    }
  };
  public lineChartLegend = false;

  constructor() { }

  ngOnInit(): void {
  }

}
