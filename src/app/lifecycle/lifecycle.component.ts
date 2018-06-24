import { Component, OnInit, AfterContentInit, OnChanges, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit, OnChanges, OnDestroy, AfterContentInit {

  @Input() title;
  title2
  constructor() {
    console.log("Constructor invoked")  
    
   }

  ngOnInit() {
    this.title2=this.title+"Hi"
    console.log("ngOnInit invoked child")
  }

  ngOnChanges(){
    console.log("ngOnChanges invoked child")

  }

  ngAfterContentInit(){
    console.log("ngAfterContentInit invoked child")
  }

  ngOnDestroy(){
    console.log("ngOnDestroy invoked child")

  }

}

