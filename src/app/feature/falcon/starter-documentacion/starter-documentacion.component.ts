import { Component, OnInit } from '@angular/core';
import { CodeService } from 'src/app/feature/code.service';


@Component({
  selector: 'app-starter-documentacion',
  templateUrl: './starter-documentacion.component.html',
  styleUrls: ['./starter-documentacion.component.css']
})
export class StarterDocumentacionComponent implements OnInit {

  constructor(private codeService: CodeService) { }

  ngOnInit(): void {
    this.codeService.sendCode("https://raw.githubusercontent.com/sistemaagil/tailwindcss/develop/src/app/feature/falcon/starter-documentacion/starter-documentacion.component.html");
  }

}
