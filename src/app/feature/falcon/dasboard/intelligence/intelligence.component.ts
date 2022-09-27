import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intelligence',
  templateUrl: './intelligence.component.html',
  styleUrls: ['./intelligence.component.css']
})
export class IntelligenceComponent implements OnInit {
  activeTabNumber: number = 0;
  constructor() { }

  ngOnInit(): void {
  }
  setActiveClass (id:number ):void {
    this.activeTabNumber = id;
  }
}
