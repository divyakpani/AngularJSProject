import { Component, OnInit } from '@angular/core';
import{ActivatedRoute, Router} from '@angular/router'
import { BusDetail } from '../shared/model/busdetails';
import { BusServiceService } from '../shared/service/bus-service.service';

@Component({
  selector: 'app-bus-details',
  templateUrl: './bus-details.component.html',
  styleUrls: ['./bus-details.component.css']
})
export class BusDetailsComponent implements OnInit {

  fromRoute
  toRoute
  businfo : BusDetail[]
  panelOpenState: boolean = false;
  constructor(private actRoute : ActivatedRoute, private dataser : BusServiceService, private router:Router) {
    console.log(this.actRoute.snapshot.params['from'])
    this.fromRoute=this.actRoute.snapshot.params['from']
    this.toRoute=this.actRoute.snapshot.params['to']
    debugger;
    this.businfo= this.dataser.GetBus(this.fromRoute,this.toRoute)
    console.log("From BusDetail Constructor : ");
    console.log(this.businfo);
   }

  ngOnInit() {
  }
  divSeats=false;
  ShowSeats()
  {
    this.divSeats=true;
  }
  SeatBook(busId,seatId)
  {
     this.dataser.BookSeatForACustomer(busId,seatId);
  }
  CancelBook(busId, seatId, userId)
  {
    this.dataser.CancelSeatForLoginCustomer(busId,seatId);
  }
  GoPayment()
  {    
    this.router.navigate(['search/payment']);
  }

}
