import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions, Scale, Ticks } from "chart.js";
@Component({
  selector: 'app-falcon-users',
  templateUrl: './falcon-users.component.html',
  styleUrls: ['./falcon-users.component.css']
})
export class FalconUsersComponent implements OnInit {
  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      'Aug18',
      'Aug24',
      'Aug30',
      'Sep05',
      'Sep11'
    ],
    datasets: [
      {
        label: 'Tablet',
        data: [ 5, 6, 7, 10,14 ],
        fill: false,
        tension: 0,
        borderColor: 'rgb(151, 210, 236)',

      },
      {
        label: 'Desktop',
        data:[11,12,13,14,17],
        fill:false,
        tension: 0,
        borderColor:'rgb(23, 215, 160)',

      },
      {
        label: 'Movile',
        data:[16,20,21,22,23,],
        fill:false,
        tension: 0,
        borderColor:'rgb(37, 49, 109)',
      }
    ]

  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false,
    scales: {
      y: {
        ticks: {
          display: false,
        },
        grid: {
          drawTicks: false,
          display: false
        }
      },
      y1: {
        display: true,
        position: 'right',
      },
      x: {
        ticks: {
          display: true //this will remove only the label
        },
        grid: {
          drawTicks: true,
          display: false
        }
      }
    },
  };
  public lineChartLegend = false;

  constructor() { }

  ngOnInit(): void {
  }

}
