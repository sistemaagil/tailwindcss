import { Component, OnInit } from '@angular/core';
import { CodeService } from '../../code.service';

@Component({
  selector: 'app-sidebar-chart',
  templateUrl: './sidebar-chart.component.html',
})
export class SidebarChartComponent implements OnInit {

  constructor(private codeService:CodeService){};
  activeCourseActive : number = 0;

  ngOnInit(): void {
  this.codeService.sendCode("https://gitea.sistemaagil.net/Tailwindcss/tailwindcss-frontend/raw/branch/falcon/Good-afternon/src/app/feature/helpdesk/sidebar-chart/sidebar-chart.component.html");
  }

  setActiveClass(id :number):void{
    this.activeCourseActive= id;
  
  }

}



