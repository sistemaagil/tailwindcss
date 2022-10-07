import { Component, OnInit } from '@angular/core';
import { CodeService } from 'src/app/feature/code.service';

@Component({
  selector: 'app-falcon-social-activity-log',
  templateUrl: './falcon-social-activity-log.component.html'
})
export class FalconSocialActivityLogComponent implements OnInit {

  constructor(private codeService: CodeService) { }
  ngOnInit(): void {
    this.codeService.sendCode("https://raw.githubusercontent.com/sistemaagil/tailwindcss/develop/src/app/feature/falcon/social/activity-log/falcon-social-activity-log/falcon-social-activity-log.component.html");
  }

}
