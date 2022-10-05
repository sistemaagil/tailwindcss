import { Component, OnInit } from '@angular/core';
import { CodeService } from 'src/app/feature/code.service';


@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.css']
})
export class StorageComponent implements OnInit {

  constructor(private codeService: CodeService) { }

  ngOnInit(): void {
    this.codeService.sendCode("https://raw.githubusercontent.com/sistemaagil/tailwindcss/develop/src/app/feature/falcon/dasboard/storage/storage.component.html");
  }

}
