import { Component, OnInit } from '@angular/core';
import { CodeService } from 'src/app/feature/code.service';

@Component({
  selector: 'app-falcon-app-eemail-inbox',
  templateUrl: './falcon-app-eemail-inbox.component.html',
  styleUrls: ['./falcon-app-eemail-inbox.component.css']
})
export class FalconAPPEemailInboxComponent implements OnInit {

  constructor(private codeService: CodeService) { }
  

  ngOnInit(): void {
    this.codeService.sendCode("https://raw.githubusercontent.com/sistemaagil/tailwindcss/develop/src/app/feature/falcon/eemail/falcon-app-eemail-inbox/falcon-app-eemail-inbox.component.html");

  }

}
