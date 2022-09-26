import { Component, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { CodeService } from 'src/app/feature/code.service';

@Component({
  selector: 'app-falcon-dashboard-traffic-source',
  templateUrl: './falcon-dashboard-traffic-source.component.html',
  styleUrls: ['./falcon-dashboard-traffic-source.component.css']
})
export class FalconDashboardTrafficSourceComponent implements OnInit {

  title = 'ng2-charts-demo';

  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Display',backgroundColor: 'rgba(37 99 235)'},
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Direct',backgroundColor: 'rgba(59 130 246)'},
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Organic Search',backgroundColor: 'rgba(96 165 250)'},
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Paid Search',backgroundColor: 'rgba(147 197 253)'},
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Other',backgroundColor: 'rgba(191 219 254)',borderWidth: 1,},
    ]
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
  };


  constructor(private codeService: CodeService) { }


  ngOnInit(): void {
    this.codeService.sendCode("https://gitea.sistemaagil.net/Tailwindcss/tailwindcss-frontend/raw/branch/develop/src/app/feature/falcon/dashboard/falcon-dashboard-traffic-source/falcon-dashboard-traffic-source.component.html");
  }

}
