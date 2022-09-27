import { Component, OnInit } from '@angular/core';
import { CodeService } from 'src/app/feature/code.service';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private codeService: CodeService) { }

  ngOnInit(): void {

    this.codeService.sendCode("https://gitea.sistemaagil.net/Tailwindcss/tailwindcss-frontend/raw/branch/feature/falcon/intelligence/src/app/feature/falcon/dasboard/products/products.component.html");
  }

}
