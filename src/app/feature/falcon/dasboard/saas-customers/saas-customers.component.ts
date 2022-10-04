import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saas-customers',
  templateUrl: './saas-customers.component.html',
  styleUrls: ['./saas-customers.component.css']
})
export class SaasCustomersComponent implements OnInit {
  activeClickActive : number = 0;


  constructor() { }

  ngOnInit(): void {
  }
  setClickClass(id :number):void{
    this.activeClickActive= id;
  }

}

