import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { CodeService } from 'src/app/feature/code.service';

@Component({
  selector: 'app-revenue',
  templateUrl: './revenue.component.html',
  styleUrls: ['./revenue.component.css']
})
export class RevenueComponent implements OnInit {

  title = 'ng2-charts-demo';

  public ChartData: ChartConfiguration['data'] = {
    labels: [
      'Aug 23',
      'Aug 24',
      'Aug 25',
      'Aug 26',
      'Aug 27',
      'Aug 28',
      'Aug 29',
      'Aug 30',
      'Aug 31',
      'Sep 01',
      'Sep 02',
      'Sep 03',
      'Sep 04',
      'Sep 05',
      'Sep 06',
      'Sep 07',
      'Sep 08',
      'Sep 09',
      'Sep 10',
      'Sep 11',
      'Sep 12',
      'Sep 13',
      'Sep 14',
      'Sep 15',
      'Sep 16',


    ],
    datasets: [
      {
        data: [ 340, 360, 230, 250, 410, 430, 450, 200,220,540,500,250,355,320,500,630,680,500,520,550,750,720,700,780,750],
        label: '',
        fill: true,
        tension: 0,
        borderColor: 'rgb(249 115 22)',
        backgroundColor: 'transparent',
        type: 'line'
      },{
        data: [ 545, 500, 650, 727, 773, 705, 686, 501,643 ,580,604,615,755,722,727,816,836,952,719,758,937,785,872,850,800],
        label: '',
        borderColor: 'rgb(37 99 235)',
        backgroundColor: 'transparent',
        borderRadius: 3,
        type: 'bar',
        hoverBackgroundColor:  'rgb(29 78 216)'
      }
    ]
  };
  public lineChartOptions: ChartOptions = {
    responsive: false,
  };
  public lineChartLegend = false;


  public ChartData1: ChartConfiguration['data'] = {
    labels: [
      'Aug 23',
      'Aug 24',
      'Aug 25',
      'Aug 26',
      'Aug 27',
      'Aug 28',
      'Aug 29',
      'Aug 30',
      'Aug 31',
      'Sep 01',
      'Sep 02',
      'Sep 03',
      'Sep 04',
      'Sep 05',
      'Sep 06',
      'Sep 07',
      'Sep 08',
      'Sep 09',
      'Sep 10',
      'Sep 11',
      'Sep 12',
      'Sep 13',
      'Sep 14',
      'Sep 15',
      'Sep 16',


    ],
    datasets: [
      {
        data: [440, 250, 270, 400, 175, 180, 200, 400,600,380,340,550,650,450,400,688,650,721,500,300,445,680,568,400,371],
        label: '',
        fill: true,
        tension: 0,
        borderColor: 'rgb(249 115 22)',
        backgroundColor: 'transparent',
        type: 'line'
      },{
        data: [ 645, 500, 550, 550, 473, 405, 286, 601,743 ,450,604,815,855,722,700,896,866,952,719,558,737,885,972,650,600],
        label: '',
        borderColor: 'rgb(37 99 235)',
        backgroundColor: 'transparent',
        borderRadius: 3,
        type: 'bar',
        hoverBackgroundColor:  'rgb(29 78 216)'
      }
    ]
  };
  public lineChartOptions1: ChartOptions = {
    responsive: false
  };
  public lineChartLegend1 = false;


  public ChartData2: ChartConfiguration['data'] = {
    labels: [
      'Aug 23',
      'Aug 24',
      'Aug 25',
      'Aug 26',
      'Aug 27',
      'Aug 28',
      'Aug 29',
      'Aug 30',
      'Aug 31',
      'Sep 01',
      'Sep 02',
      'Sep 03',
      'Sep 04',
      'Sep 05',
      'Sep 06',
      'Sep 07',
      'Sep 08',
      'Sep 09',
      'Sep 10',
      'Sep 11',
      'Sep 12',
      'Sep 13',
      'Sep 14',
      'Sep 15',
      'Sep 16',


    ],
    datasets: [
      {
        data: [245, 300, 450, 427,273, 250,260, 580,570,500,402,450,400,330,527,516,536,620,519,558,537,483,472,250,300],
        label: '',
        fill: true,
        tension: 0,
        borderColor: 'rgb(249 115 22)',
        backgroundColor: 'transparent',
        type: 'line'
      },{
        data: [ 545, 400, 450, 627, 473, 450, 460,780,770,800,504,550,500,530,727,716,736,820,719,758,737,885,872,850,800],
        label: '',
        borderColor: 'rgb(37 99 235)',
        backgroundColor: 'transparent',
        borderRadius: 3,
        type: 'bar',
        hoverBackgroundColor:  'rgb(29 78 216)'
      }
    ]
  };
  public lineChartOptions2: ChartOptions = {
    responsive: false
  };
  public lineChartLegend2 = false;



  public ChartData3: ChartConfiguration['data'] = {
    labels: [
      'Aug 23',
      'Aug 24',
      'Aug 25',
      'Aug 26',
      'Aug 27',
      'Aug 28',
      'Aug 29',
      'Aug 30',
      'Aug 31',
      'Sep 01',
      'Sep 02',
      'Sep 03',
      'Sep 04',
      'Sep 05',
      'Sep 06',
      'Sep 07',
      'Sep 08',
      'Sep 09',
      'Sep 10',
      'Sep 11',
      'Sep 12',
      'Sep 13',
      'Sep 14',
      'Sep 15',
      'Sep 16',


    ],
    datasets: [
      {
        data: [340, 360, 330,300,410, 380,450, 400,420,240,200,250,355,320,500,630,680,400,420,450,650,620,700,450,340],
        label: '',
        fill: true,
        tension: 0,
        borderColor: 'rgb(249 115 22)',
        backgroundColor: 'transparent',
        type: 'line',
      },{
        data: [ 545, 400, 450, 627, 673, 605, 686, 501,843 ,518,504,715,955,622,627,716,736,952,619,558,937,785,872,550,400],
        label: '',
        borderColor: 'rgb(37 99 235)',
        backgroundColor: 'transparent',
        borderRadius: 3,
        type: 'bar',
        hoverBackgroundColor:  'rgb(29 78 216)'
      }
    ]
  };
  public lineChartOptions3: ChartOptions = {
    responsive: false
  };
  public lineChartLegend3 = false;







  activeClickActive : number = 0;

  constructor(private codeService: CodeService) { }

  ngOnInit(): void {
    this.codeService.sendCode("https://gitea.sistemaagil.net/Tailwindcss/tailwindcss-frontend/raw/branch/feature/falcon-CRM/Revenue/src/app/feature/falcon/dasboard/falcon-CRM/revenue/revenue.component.html");
  }
  setClickClass(id :number):void{
    this.activeClickActive= id;
  }

}
