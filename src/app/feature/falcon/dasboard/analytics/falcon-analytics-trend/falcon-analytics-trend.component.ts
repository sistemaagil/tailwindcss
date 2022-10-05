import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { CodeService } from 'src/app/feature/code.service';

@Component({
  selector: 'app-falcon-analytics-trend',
  templateUrl: './falcon-analytics-trend.component.html'
})
export class FalconAnalyticsTrendComponent implements OnInit {
  title = 'ng2-charts-demo';

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      'Sep 05',
      '',
      '',
      '',
      '',
      '',
      'Sep 11',
      '',
      '',
      '',
      '',
      '',
      'Sep 17',
      '',
      '',
      '',
      '',
      '',
      'Sep 23',
      '',
      '',
      '',
      '',
      '',
      'Sep 29'
    ],
    datasets: [
      {
        data: [ 40, 37, 42, 44, 36, 39, 37, 43, 35, 43, 39, 42, 36, 37, 36, 44, 34, 41, 37, 41, 40, 43, 34, 41, 35, 44, 41 ],
        label: 'Rate',
        fill: false,
        tension: 0.1,
        pointRadius: 0,
        borderColor: 'rgb(29 78 216)'
      }
    ]
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false,
    scales: {
      y: {
        beginAtZero: true,
        min: 0,
        max: 50,
        ticks: {
          display: true, //this will remove only the label
          stepSize: 10
        },
        grid: {
          drawTicks: false,
          display: true
        }
      },
      x: {
        ticks: {
          display: true //this will remove only the label
        },
        grid: {
          drawTicks: false,
          display: false
        }
      }
    }
  };
  public lineChartLegend = false;

  constructor(private codeService: CodeService) { }

  ngOnInit(): void {
    this.codeService.sendCode("https://raw.githubusercontent.com/sistemaagil/tailwindcss/develop/src/app/feature/falcon/dasboard/analytics/falcon-analytics-trend/falcon-analytics-trend.component.html");
  }

}
