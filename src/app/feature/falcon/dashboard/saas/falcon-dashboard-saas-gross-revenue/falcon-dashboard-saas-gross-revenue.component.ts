import { Component, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { CodeService } from 'src/app/feature/code.service';

@Component({
  selector: 'app-falcon-dashboard-saas-gross-revenue',
  templateUrl: './falcon-dashboard-saas-gross-revenue.component.html',
  styleUrls: ['./falcon-dashboard-saas-gross-revenue.component.css']
})
export class FalconDashboardSaasGrossRevenueComponent implements OnInit {
  title = 'ng2-charts-demo';

  public lineChartLegend = true;
  public lineChartPlugins = [];

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
    'Feb 01',
    'Feb 04',
    'Feb 07',
    'Feb 10',
    'Feb 13',
    'Feb 16',
    'Feb 19',
    'Feb 22',
    'Feb 25',
    'Feb 28',

  ],

    datasets: [
      { data: [ 60, 80, 60, 80, 65, 130, 120, 100, 30, 40,  ],
        label: 'Feb:' ,
        fill: false,
        backgroundColor: 'rgba(59 130 246)',
        borderWidth: 2,
        tension: 0,
        borderColor: 'rgb(59 130 246)',
        pointBackgroundColor: '',
        pointBorderWidth:0,
        pointRadius:0,
        pointHoverRadius:7,
      },
      { data: [ 20, 40, 20, 80, 50, 80, 120, 80, 50, 120, ],
      label: 'Jan: ' ,
      fill: true,
      backgroundColor:'rgba(250 250 250)',
      borderWidth: 2,
      tension: 0,
      borderColor: 'rgb(168 162 158)',
      pointBorderColor: '',
      pointBackgroundColor: '',
      pointBorderWidth:2,
      pointRadius:0,
      pointHoverRadius:7,
    }


    ]
  };


  public lineChartOptions: ChartConfiguration<'line'>['options'] = {
    responsive: false,
  };

  constructor(private codeService: CodeService) { }

  ngOnInit(): void {
    this.codeService.sendCode("url del html de su componente pero en original");
  }

}
