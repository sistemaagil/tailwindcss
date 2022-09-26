import { Component, OnInit } from '@angular/core';
import { CodeService } from 'src/app/feature/code.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  
  private inputPreview: HTMLInputElement = document.getElementById("previewinput") as HTMLInputElement;
  private inputHtml: HTMLInputElement = document.getElementById("htmlinput") as HTMLInputElement;
  private tabPreview: HTMLDivElement = document.getElementById("previewtab") as HTMLDivElement;
  private tabHtml: HTMLDivElement = document.getElementById("htmltab") as HTMLDivElement;

  public code: string = "<h1 class='bg-sky-300'>Titulo</h1>";

  sidebarClosed: boolean = false;

  constructor(private codeService: CodeService) { }

  close():void {
    this.sidebarClosed = false;
  }

  ngOnInit(): void {
    this.inputPreview = document.getElementById("previewinput") as HTMLInputElement;
    this.inputHtml = document.getElementById("htmlinput") as HTMLInputElement;
    this.tabPreview = document.getElementById("previewtab") as HTMLDivElement;
    this.tabHtml = document.getElementById("htmltab") as HTMLDivElement;

    this.codeService.getCode().subscribe(
      (componentName: string) => this.code = componentName
    );
  }

  onTab(idTab: string):void {

    if (idTab === "preview" ){
      if (this.inputPreview.checked){

      }else{
        this.tabPreview.className += " tab-active";
        this.tabHtml.className = this.tabHtml.className.replace(" tab-active","");
        this.inputHtml.click();
        this.inputPreview.click();
      }
    }

    if (idTab === "html" ){
      if (this.inputHtml.checked){

      }else{
        this.tabHtml.className += " tab-active";
        this.tabPreview.className = this.tabPreview.className.replace(" tab-active","");
        this.inputHtml.click();
        this.inputPreview.click();

      }
    }
  }


}
