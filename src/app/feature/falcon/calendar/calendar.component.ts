import { Component, OnInit } from '@angular/core';
import { CodeService } from '../../code.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  constructor(private codeService: CodeService) { }

  ngOnInit(): void {
    this.codeService.sendCode("");
  }

}
