import { Component, OnInit } from '@angular/core';

import { CodeService } from '../../code.service';
@Component({
  selector: 'app-me01',
  templateUrl: './me01.component.html',
  styleUrls: ['./me01.component.css']
})
export class Me01Component implements OnInit {
  selectedMenu: number = 0;
  constructor(private codeService: CodeService) { }

  ngOnInit(): void {

    this.codeService.sendCode("https://gitea.sistemaagil.net/Tailwindcss/tailwindcss-frontend/raw/branch/develop/src/app/feature/helpdesk/me01/me01.component.html");
  }

  setActive(index: number){
    console.log(index);
    this.selectedMenu = index;
  }

}
