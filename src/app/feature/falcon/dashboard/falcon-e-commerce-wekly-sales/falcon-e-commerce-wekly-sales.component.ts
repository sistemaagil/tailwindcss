import { Component, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { CodeService } from 'src/app/feature/code.service';

@Component({
  selector: 'app-falcon-e-commerce-wekly-sales',
  templateUrl: './falcon-e-commerce-wekly-sales.component.html',
  styleUrls: ['./falcon-e-commerce-wekly-sales.component.css']
})
export class FalconECommerceWeklySalesComponent implements OnInit {
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
    this.codeService.sendCode("https://raw.githubusercontent.com/sistemaagil/tailwindcss/feature/falcon/e-commerce/weekly-Sales/src/app/feature/falcon/dashboard/falcon-e-commerce-wekly-sales/falcon-e-commerce-wekly-sales.component.html?token=GHSAT0AAAAAABZHVAWSI7IGG7ASY75VPL3CYZTPZHA");
  }

}
