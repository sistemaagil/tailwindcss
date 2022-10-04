import { Component, OnInit } from '@angular/core';
import { CodeService } from 'src/app/feature/code.service';

@Component({
  selector: 'app-members-activity',
  templateUrl: './members-activity.component.html',
  styleUrls: ['./members-activity.component.css']
})
export class MembersActivityComponent implements OnInit {

  constructor(private codeService: CodeService) { }

  ngOnInit(): void {
    
    this.codeService.sendCode("https://raw.githubusercontent.com/sistemaagil/tailwindcss/falcon/events/texto-new-year/src/app/feature/falcon/management/members/members-activity/members-activity.component.html");
  }

}
