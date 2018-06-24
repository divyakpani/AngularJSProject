import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  name
  email 
  constructor() { }

  ngOnInit() {
  }
  savedata(dta){
    console.log(dta.value)
    }
}
