import { Component, OnInit } from '@angular/core';
import { CodeService } from 'src/app/feature/code.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  constructor(private codeService: CodeService) { }

  ngOnInit(): void {
    
    this.codeService.sendCode("https://raw.githubusercontent.com/sistemaagil/tailwindcss/falcon/events/texto-new-year/src/app/feature/falcon/events/events-list/event-list/event-list.component.html");
  }

}
