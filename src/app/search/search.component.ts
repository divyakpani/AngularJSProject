import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{FormsModule} from '@angular/forms'
import { BusDetail } from '../shared/model/busdetails';
import { BusServiceService } from '../shared/service/bus-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public from;
  public to;
  public date;
  businfo : BusDetail[]
  userId;
  constructor(private router:Router, private dataser : BusServiceService) {
    this.userId=dataser.loginUserId;
    this.businfo=dataser.GetUserBookedBus();
   }

  ngOnInit() {
  }

  SearchResult()
  {
    this.router.navigate(['search/busdetails', {from:this.from, to: this.to, date:this.date}])
  }

  CancelBook(busId, seatId, userId)
  {
    if(confirm("Do you want to cancel this ticket?"))
    {
      this.dataser.CancelSeatForLoginCustomer(busId,seatId);
    }
  }

}
