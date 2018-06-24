import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatTabsModule} from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  GetAjaxData()
  {
    this.router.navigate(['getAjax'])
  }

  GoToLogin()
  {
    this.router.navigate(['login'])
  }

}
