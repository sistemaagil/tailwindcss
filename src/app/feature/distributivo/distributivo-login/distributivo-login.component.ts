import { Component, OnInit } from '@angular/core';
import { CodeService } from 'src/app/feature/code.service';


@Component({
  selector: 'app-distributivo-login',
  templateUrl: './distributivo-login.component.html',
  styleUrls: ['./distributivo-login.component.css']
})
export class DistributivoLoginComponent implements OnInit {

  constructor(private codeService: CodeService) { }

  ngOnInit(): void {
    this.codeService.sendCode("https://raw.githubusercontent.com/sistemaagil/tailwindcss/develop/src/app/feature/distributivo/distributivo-login/distributivo-login.component.html");
  }

}
