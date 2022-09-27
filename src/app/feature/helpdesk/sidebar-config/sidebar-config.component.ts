import { Component, OnInit } from '@angular/core';
import { CodeService } from '../../code.service';

@Component({
  selector: 'app-sidebar-config',
  templateUrl: './sidebar-config.component.html',
  styleUrls: ['./sidebar-config.component.css']
})
export class SidebarConfigComponent implements OnInit {

  activeCourseActive : number = 0;
  constructor(private codeService: CodeService) { }

  ngOnInit(): void {
    this.codeService.sendCode("https://gitea.sistemaagil.net/Tailwindcss/tailwindcss-frontend/raw/branch/feature/sidebar-config/src/app/feature/helpdesk/sidebar-config/sidebar-config.component.html");
  }
  setActiveClass(id :number):void{
    this.activeCourseActive= id;
    console.log("EL " + id)
  }
}



