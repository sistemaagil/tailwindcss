import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CodeService {

  private componentName = new Subject<string>();

  constructor() { }

  getCode(): Observable<string>{
    return this.componentName;
   }

  sendCode(name:string){
   this.componentName.next(name);   
  }

}
