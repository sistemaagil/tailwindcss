import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  activeClickActive : number = 0;


  constructor() { }

  ngOnInit(): void {
  }
  setClickClass(id :number):void{
    this.activeClickActive= id;
  }

}
