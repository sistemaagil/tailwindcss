import { Component, OnInit } from '@angular/core';
import { CodeService } from 'src/app/feature/code.service';

@Component({
  selector: 'app-free-new-years',
  templateUrl: './free-new-years.component.html',
  styleUrls: ['./free-new-years.component.css']
})
export class FREENewYearsComponent implements OnInit {

  constructor(private codeService: CodeService) { }

  ngOnInit(): void {
    
    this.codeService.sendCode("https://raw.githubusercontent.com/sistemaagil/tailwindcss/falcon/events/texto-new-year/src/app/feature/falcon/events/events-details/Free/free-new-years/free-new-years.component.html");
  }

}
