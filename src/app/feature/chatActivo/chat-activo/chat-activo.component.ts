import { Component, OnInit } from '@angular/core';
import { CodeService } from '../../code.service';

@Component({
  selector: 'app-chat-activo',
  templateUrl: './chat-activo.component.html',
 
})
export class ChatActivoComponent implements OnInit {

  activeTabNumber: number = 0;

  constructor(private codeService: CodeService) { }


  ngOnInit(): void {    this.codeService.sendCode("https://gitea.sistemaagil.net/Tailwindcss/tailwindcss-frontend/raw/branch/develop/src/app/feature/chatActivo/chat-activo/chat-activo.component.html");

  }

  setActiveClass (id:number ):void {
    this.activeTabNumber = id;
  }

}
