import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions } from "chart.js";

@Component({
  selector: 'app-total-order',
  templateUrl: './total-order.component.html',
  styleUrls: ['./total-order.component.css']
})
export class TotalOrderComponent implements OnInit {
  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      'Week 4',
      'Week 5',
      'Week 6',
      'Week 7'
    ],
    datasets: [
      {
        data: [ 20, 40, 100, 120 ],
        label: 'Series A',
        fill: true,
        tension: 0.5,
        borderColor: 'rgb(0, 100, 0)',
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
