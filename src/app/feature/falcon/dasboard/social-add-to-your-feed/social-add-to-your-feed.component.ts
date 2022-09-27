import { Component, OnInit } from '@angular/core';
import { CodeService } from 'src/app/feature/code.service';

@Component({
  selector: 'app-social-add-to-your-feed',
  templateUrl: './social-add-to-your-feed.component.html',
})
export class SocialAddToYourFeedComponent implements OnInit {

  constructor(private codeService: CodeService) { }

  ngOnInit(): void {
    this.codeService.sendCode("https://raw.githubusercontent.com/sistemaagil/tailwindcss/falcon/ecommerce-Total-Sales/src/app/feature/falcon/dasboard/social-add-to-your-feed/social-add-to-your-feed.component.html?token=GHSAT0AAAAAABZH2SPD2QXENPJZ5654F4MMYZTQEQQ")
  }

}
