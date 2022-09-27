import { Component, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { CodeService } from 'src/app/feature/code.service';

@Component({
  selector: 'app-falcon-dashboard-default-wekly-sales',
  templateUrl: './falcon-dashboard-default-wekly-sales.component.html',
  styleUrls: ['./falcon-dashboard-default-wekly-sales.component.css']
})
export class FalconDashboardDefaultWeklySalesComponent implements OnInit {
  title = 'ng2-charts-demo';

  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [ 'Sun', 'Mon', 'Tue', 'wed', 'thu', 'fri', 'sat' ],

    datasets: [
      { data: [ 6000, 9000, 8500, 4000, 4500, 6500, 7000 ], label: '',
      borderColor: 'rgb(37 99 235)',
      backgroundColor: 'rgba(37 99 235)' }
    ]
  };

  public barChartOptions: ChartConfiguration <'bar'>['options'] = {
    responsive: false,
  };


  constructor(private codeService: CodeService) { }
  ngOnInit(): void {
    this.codeService.sendCode("https://raw.githubusercontent.com/sistemaagil/tailwindcss/feature/falcon/default/weeklySales/src/app/feature/falcon/dashboard/falcon-dashboard-default-wekly-sales/falcon-dashboard-default-wekly-sales.component.html?token=GHSAT0AAAAAABZHVAWSRRNW75ZLPRB6UTIAYZTRKXA");
  }

}
