import { Component, OnInit } from '@angular/core';
import { CodeService } from 'src/app/feature/code.service';

@Component({
  selector: 'app-falcon-using-storage',
  templateUrl: './falcon-using-storage.component.html',
  styleUrls: ['./falcon-using-storage.component.css']
})
export class FalconUsingStorageComponent implements OnInit {

  constructor(private codeService: CodeService) { }


  ngOnInit(): void {
    this.codeService.sendCode("https://gitea.sistemaagil.net/Tailwindcss/tailwindcss-frontend/raw/branch/develop/src/app/feature/falcon/dashboard/falcon-using-storage/falcon-using-storage.component.html");

  }

}
