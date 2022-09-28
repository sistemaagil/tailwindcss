import { Component, OnInit } from '@angular/core';
import { CodeService } from 'src/app/feature/code.service';

@Component({
  selector: 'app-you-may-interested',
  templateUrl: './you-may-interested.component.html',
})
export class YouMayInterestedComponent implements OnInit {

  constructor(private codeService: CodeService) { }

  ngOnInit(): void {
    this.codeService.sendCode("https://raw.githubusercontent.com/sistemaagil/tailwindcss/falcon/ecommerce-Total-Sales/src/app/feature/falcon/dasboard/social/you-may-interested/you-may-interested.component.html?token=GHSAT0AAAAAABZH2SPCQBK5NDXPEVKR7VMEYZTT5QQ")
  }

}
