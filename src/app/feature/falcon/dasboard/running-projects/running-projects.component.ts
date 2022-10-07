import { Component, OnInit } from '@angular/core';
import { CodeService } from 'src/app/feature/code.service';

@Component({
  selector: 'app-running-projects',
  templateUrl: './running-projects.component.html',
  styleUrls: ['./running-projects.component.css']
})
export class RunningProjectsComponent implements OnInit {

  selectedMenu: number = 0;
  constructor(private codeService: CodeService) { }

  ngOnInit(): void {

    this.codeService.sendCode("https://raw.githubusercontent.com/sistemaagil/tailwindcss/develop/src/app/feature/falcon/dasboard/running-projects/running-projects.component.html");
  }

  setActive(index: number){
    console.log(index);
    this.selectedMenu = index;
  }

}
