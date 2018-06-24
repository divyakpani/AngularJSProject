import { Component, OnInit } from '@angular/core';
import { AlertService } from '../alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  errorMessage
  constructor(private alertServ: AlertService) {
    this.alertServ.setAlert("Alert");
   }

  ngOnInit() {
    this.alertServ.getAlert().subscribe(resp=>{
      this.errorMessage=resp
      setTimeout(()=>{
        this.errorMessage=""
      },2000)
    })
  }

}
