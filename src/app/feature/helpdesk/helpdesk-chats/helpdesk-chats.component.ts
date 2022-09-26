import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-helpdesk-chats',
  templateUrl: './helpdesk-chats.component.html',
  styleUrls: ['./helpdesk-chats.component.css']
})
export class HelpdeskChatsComponent implements OnInit {

  activeTabNumber: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  setActiveClass (id:number ):void {
    this.activeTabNumber = id;
  }

}
