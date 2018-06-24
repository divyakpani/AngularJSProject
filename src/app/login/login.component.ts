import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BusServiceService } from '../shared/service/bus-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  

  public userName;
  public password;

  constructor(private router:Router, private dataser: BusServiceService) {
    this.dataser.setBusDetails();
   }

  ngOnInit() {
  }

  validate(){
    debugger;
    this.dataser.validateLogin(this.userName, this.password);
    if(this.dataser.loginStatus==true)
    {
      this.router.navigate(['search'])
    }
  }

  SignOut(){
    this.dataser.LogOut();
  }

}