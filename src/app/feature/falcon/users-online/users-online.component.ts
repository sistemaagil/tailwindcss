import { Component, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { CodeService } from '../../code.service';

@Component({
  selector: 'app-users-online',
  templateUrl: './users-online.component.html',
  styleUrls: ['./users-online.component.css']
})
export class UsersOnlineComponent implements OnInit {


  title = 'ng2-charts-demo';

  public barChartLegend = false;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [ '2006', '2007', '2008', '2009', '2010', '2011', '2012','2013','2014','2015','2016','2017','2018' ],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40,100,20,54,92,95,90,89,80 ],
        label: 'Series A',
        backgroundColor: 'rgb(245 245 244)',
        minBarLength:1,
        borderSkipped:'middle',
      },

    ]
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
    scales:{
      x:{
        ticks:{
          display: false
        }
      },
      y:{
        ticks:{
          display: false
        }
      }
    }
  };


  constructor(private codeService: CodeService) { }

  ngOnInit(): void {
    this.codeService.sendCode("https://gitea.sistemaagil.net/Tailwindcss/tailwindcss-frontend/raw/branch/feature/falcon/usersOnline/src/app/feature/falcon/users-online/users-online.component.html");
  }

}
