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

    this.codeService.sendCode("https://raw.githubusercontent.com/sistemaagil/tailwindcss/develop/src/app/feature/sidebar/sidebar-chat/sidebar-chat.component.html");
  }

  setActive(index: number){
    console.log(index);
    this.selectedMenu = index;
  }

}
