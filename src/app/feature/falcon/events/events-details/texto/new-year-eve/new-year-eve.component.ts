import { Component, OnInit } from '@angular/core';
import { CodeService } from 'src/app/feature/code.service';

@Component({
  selector: 'app-new-year-eve',
  templateUrl: './new-year-eve.component.html',
  styleUrls: ['./new-year-eve.component.css']
})
export class NewYearEveComponent implements OnInit {

  constructor(private codeService: CodeService) { }

  ngOnInit(): void {
    
    this.codeService.sendCode("https://raw.githubusercontent.com/sistemaagil/tailwindcss/falcon/events/texto-new-year/src/app/feature/falcon/events/events-details/texto/new-year-eve/new-year-eve.component.html");
  }

}
