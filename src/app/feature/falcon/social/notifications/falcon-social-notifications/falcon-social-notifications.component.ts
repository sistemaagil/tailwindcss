import { Component, OnInit } from '@angular/core';
import { CodeService } from 'src/app/feature/code.service';

@Component({
  selector: 'app-falcon-social-notifications',
  templateUrl: './falcon-social-notifications.component.html'
})
export class FalconSocialNotificationsComponent implements OnInit {

  constructor(private codeService: CodeService) { }
  ngOnInit(): void {
    this.codeService.sendCode("https://raw.githubusercontent.com/sistemaagil/tailwindcss/develop/src/app/feature/falcon/social/notifications/falcon-social-notifications/falcon-social-notifications.component.html");
  }

}
