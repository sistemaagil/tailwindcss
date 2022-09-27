import { Component, OnInit } from '@angular/core';
import { CodeService } from '../../code.service';

@Component({
  selector: 'app-me02',
  templateUrl: './me02.component.html',
  styleUrls: ['./me02.component.css']
})
export class Me02Component implements OnInit {

  constructor(private codeService: CodeService) { }

  ngOnInit(): void {
    //this.codeService.sendCode("app/feature/helpdesk/me02/me02.component.html");
    this.codeService.sendCode("assets/../environments/test.html");
  }

}
