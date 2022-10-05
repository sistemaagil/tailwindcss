import { Component, OnInit } from '@angular/core';
import { CodeService } from '../code.service';


@Component({
  selector: 'app-volumen-chat-filtro-fecha',
  templateUrl: './volumen-chat-filtro-fecha.component.html',
  styleUrls: ['./volumen-chat-filtro-fecha.component.css']
})
export class VolumenChatFiltroFechaComponent implements OnInit {

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
