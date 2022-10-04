import { Component, OnInit } from '@angular/core';
import { CodeService } from 'src/app/feature/code.service';

@Component({
  selector: 'app-falcon-app-eemail-composee',
  templateUrl: './falcon-app-eemail-composee.component.html',
  styleUrls: ['./falcon-app-eemail-composee.component.css']
})
export class FalconAPPEemailComposeeComponent implements OnInit {

  constructor(private codeService: CodeService) { }
  

  ngOnInit(): void {
    this.codeService.sendCode("https://raw.githubusercontent.com/sistemaagil/tailwindcss/feature/falcon/app/eemail/Composee/src/app/feature/falcon/eemail/falcon-app-eemail-composee/falcon-app-eemail-composee.component.html");

  }

}
