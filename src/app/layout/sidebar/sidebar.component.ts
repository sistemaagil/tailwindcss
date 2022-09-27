import { Component, EventEmitter, OnInit, Output  } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {

  @Output() sidebar = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  close(): void {
    this.sidebar.emit(false);
  }

}
