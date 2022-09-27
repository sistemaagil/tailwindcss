import { Component, OnInit } from '@angular/core';
import { CodeService } from 'src/app/feature/code.service';

@Component({
  selector: 'app-social-create-post',
  templateUrl: './social-create-post.component.html',
})
export class SocialCreatePostComponent implements OnInit {

  constructor( private codeService: CodeService) { }

  ngOnInit(): void {
    this.codeService.sendCode("")
  }

}
