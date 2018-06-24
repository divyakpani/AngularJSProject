import { Component, OnInit, OnChanges, OnDestroy, AfterContentChecked } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnChanges,OnDestroy, AfterContentChecked {
  title = 'app';
  routeLinks: any[];
    activeLinkIndex = -1;
constructor(private router: Router) {
        this.routeLinks = [
            {
                label: 'Reactive Form Validation',
                link: './reactive',
                index: 0
            }, {
                label: 'Template Form Validation',
                link: './template',
                index: 1
            },{
              label: 'Observable',
              link: './observable',
              index: 1
          }
        ];
    }
    ngOnInit(): void {
      this.router.events.subscribe((res) => {
          this.activeLinkIndex = this.routeLinks.indexOf(this.routeLinks.find(tab => tab.link === '.' + this.router.url));
      });
  }
  ngOnChanges(){
    console.log("ngOnChanges invoked parent")

  }

  ngOnDestroy(){
    console.log("ngOnDestroy invoked parent")

  }

  ngAfterContentChecked(){
    console.log("AfterContentChecked invoked parent")
  }
}
