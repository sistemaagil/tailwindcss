import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-distributivo-cursos',
  templateUrl: './distributivo-cursos.component.html',
  styleUrls: ['./distributivo-cursos.component.css']
})
export class DistributivoCursosComponent implements OnInit {

  activeCourseActive : number = 0;

  constructor() { }

  ngOnInit(): void {
  }
  setActiveClass(id :number):void{
    this.activeCourseActive= id;
  }

}
