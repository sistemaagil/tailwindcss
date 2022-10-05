import { Component, OnInit } from '@angular/core';
import { CodeService } from 'src/app/feature/code.service';

@Component({
  selector: 'app-falcon-management-new-schedule',
  templateUrl: './falcon-management-new-schedule.component.html'
})
export class FalconManagementNewScheduleComponent implements OnInit {

  constructor(private codeService: CodeService) { }
  ngOnInit(): void {
    this.codeService.sendCode("https://raw.githubusercontent.com/sistemaagil/tailwindcss/develop/src/app/feature/falcon/dasboard/management/falcon-management-new-schedule/falcon-management-new-schedule.component.html");
  }

}
