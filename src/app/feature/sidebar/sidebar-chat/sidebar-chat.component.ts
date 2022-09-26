import { Component, OnInit } from '@angular/core';
import { CodeService } from '../../code.service';

@Component({
  selector: 'app-sidebar-chat',
  templateUrl: './sidebar-chat.component.html',
})
export class SidebarChatComponent implements OnInit {

  selectedMenu: number = 0;
  constructor(private codeService: CodeService) { }

  ngOnInit(): void {

    this.codeService.sendCode("https://gitea.sistemaagil.net/Tailwindcss/tailwindcss-frontend/raw/branch/develop/src/app/feature/helpdesk/sidebar-chart/sidebar-chart.component.html");
  }

  setActive(index: number){
    console.log(index);
    this.selectedMenu = index;
  }

}
