import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions} from "chart.js";
import { CodeService } from 'src/app/feature/code.service';

@Component({
  selector: 'app-falcon-dashboard-campaigns',
  templateUrl: './falcon-dashboard-campaigns.component.html',
  styleUrls: ['./falcon-dashboard-campaigns.component.css']
})
export class FalconDashboardCampaignsComponent implements OnInit {

  title = 'ng2-charts-demo';

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      '',
      '',
      '',
      '',
      '',
      ''
    ],
    datasets: [
      {
        data: [20, 40, 32, 39, 30, 32 ],
        label: '',
        fill: true,
        tension: 0,
        borderColor: 'rgb(249 115 22)',
        backgroundColor: 'rgba(254, 215, 170)'
      }
    ]
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false,
    scales:{
      y: {
        ticks: {
          display: false
        },
        grid: {
          display: false
        }
      },
      
      x: {
        grid:{
          display: false
        }
      }
    } 
  };
  public lineChartLegend = false;
  constructor(private codeService: CodeService) { }


  ngOnInit(): void {     this.codeService.sendCode("https://gitea.sistemaagil.net/Tailwindcss/tailwindcss-frontend/raw/branch/feature/falcon/dashboard/campaigns-perfomance/src/app/feature/falcon/dashboard/falcon-dashboard-campaigns/falcon-dashboard-campaigns.component.html");

  }

}

