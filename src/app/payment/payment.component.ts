import { Component, OnInit, Output } from '@angular/core';
import{FormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import { EventEmitter } from 'events';
import { BusDetail } from '../shared/model/busdetails';
import { SeatDetail } from '../shared/model/seatdetails';
import { BusServiceService } from '../shared/service/bus-service.service';
import { AlertService } from '../alert.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  paymentDetails : BusDetail
  seatInfo : SeatDetail
  SeatCount=0
  SeatCharge=0
  TotalAmount
  TotalWithGst
  GST
  PaymentOpt=1
  GSTPercentage=0

  constructor(private router : Router, private dataser : BusServiceService, private alertSer: AlertService) { 
    this.SeatCharge=dataser.SeatCharge;
    this.GSTPercentage=dataser.GST;
    this.paymentDetails=dataser.userBookedDetail;    
    this.paymentDetails.seats.forEach(x => {
      if(x.bookStatus==1 && x.userId==dataser.loginUserId)
      {
        this.SeatCount=this.SeatCount+1;
      }
    });
    this.TotalAmount=this.SeatCount * dataser.SeatCharge;
    this.TotalWithGst=this.TotalAmount * dataser.GST / 100;
    this.TotalWithGst=this.TotalWithGst + this.TotalAmount;
    this.GST=dataser.GST;
  }

  ngOnInit() {
  }

  GoToLogin()
  {
    this.alertSer.setAlert("Seat Reserved successfully");
    this.router.navigate(['login'])
  }

}
