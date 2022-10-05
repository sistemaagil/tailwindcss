import { Component, OnInit } from '@angular/core';
import { CodeService } from 'src/app/feature/code.service';

@Component({
  selector: 'app-falcon-social-followers',
  templateUrl: './falcon-social-followers.component.html'
})
export class FalconSocialFollowersComponent implements OnInit {

  constructor(private codeService: CodeService) { }
  ngOnInit(): void {
    this.codeService.sendCode("https://raw.githubusercontent.com/sistemaagil/tailwindcss/develop/src/app/feature/falcon/social/followers/falcon-social-followers/falcon-social-followers.component.html");
  }

}
