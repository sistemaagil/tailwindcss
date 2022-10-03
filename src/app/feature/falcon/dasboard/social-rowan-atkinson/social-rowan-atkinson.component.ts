import { Component, OnInit } from '@angular/core';
import { CodeService } from 'src/app/feature/code.service';

@Component({
  selector: 'app-social-rowan-atkinson',
  templateUrl: './social-rowan-atkinson.component.html',

})
export class SocialRowanAtkinsonComponent implements OnInit {

  constructor(private codeService: CodeService) { }

  ngOnInit(): void {
    this.codeService.sendCode("https://raw.githubusercontent.com/sistemaagil/tailwindcss/falcon/ecommerce-Total-Sales/src/app/feature/falcon/dasboard/social-rowan-atkinson/social-rowan-atkinson.component.html?token=GHSAT0AAAAAABZH2SPCKB5XQ6IVKRFCZKBEYZT2NGQ")
  }

}
