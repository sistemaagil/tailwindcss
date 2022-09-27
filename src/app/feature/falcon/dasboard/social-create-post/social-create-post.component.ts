import { Component, OnInit } from '@angular/core';
import { CodeService } from 'src/app/feature/code.service';

@Component({
  selector: 'app-social-create-post',
  templateUrl: './social-create-post.component.html',
})
export class SocialCreatePostComponent implements OnInit {

  constructor( private codeService: CodeService) { }

  ngOnInit(): void {
    this.codeService.sendCode("https://raw.githubusercontent.com/sistemaagil/tailwindcss/falcon/ecommerce-Total-Sales/src/app/feature/falcon/dasboard/social-create-post/social-create-post.component.html?token=GHSAT0AAAAAABZH2SPD5GC2U5TC4BJ2YF64YZTJ5JQ")
  }

}
