import { Component, OnInit } from '@angular/core';
import { CodeService } from 'src/app/feature/code.service';

@Component({
  selector: 'app-falcon-app-eemail-eemail-detail',
  templateUrl: './falcon-app-eemail-eemail-detail.component.html',
  styleUrls: ['./falcon-app-eemail-eemail-detail.component.css']
})
export class FalconAPPEemailEemailDetailComponent implements OnInit {

  constructor(private codeService: CodeService) { }
  

  ngOnInit(): void {
    this.codeService.sendCode("https://raw.githubusercontent.com/sistemaagil/tailwindcss/develop/src/app/feature/falcon/eemail/falcon-app-eemail-eemail-detail/falcon-app-eemail-eemail-detail.component.html");

  }

}
