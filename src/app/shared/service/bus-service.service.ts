import { Injectable } from '@angular/core';
import { BusRoute } from '../model/busroute';
import { BusDetail } from '../model/busdetails';
import { User } from '../model/user';
import { SeatDetail } from '../model/seatdetails';
import { AjaxService } from './ajax.service';

@Injectable({
  providedIn: 'root'
})
export class BusServiceService {
  BusRoutes: BusRoute[] = [{ id: 1, from: 'tvm', to: 'ktym', date: '01/06/2018' }, { id: 2, from: 'tcr', to: 'ekm', date: '01/06/2018' }];

  // bus: BusDetail[] = [{ id: 1, name: 'TVM-KTYM1', time: '10.00 AM', rid: 1, seats: [{ id: 1, userId: 0, bookStatus: 0 }, { id: 2, userId: 0, bookStatus: 0 }, { id: 3, userId: 0, bookStatus: 0 }, { id: 4, userId: 0, bookStatus: 0 }, { id: 5, userId: 0, bookStatus: 0 }] },
  // { id: 2, name: 'TVM-KTYM1', time: '11.00 AM', rid: 1, seats: [{ id: 1, userId: 0, bookStatus: 0 }, { id: 2, userId: 0, bookStatus: 0 }, { id: 3, userId: 0, bookStatus: 0 }, { id: 4, userId: 0, bookStatus: 0 }, { id: 5, userId: 0, bookStatus: 0 }] },
  // { id: 3, name: 'TCR-EKM1', time: '10.00 AM', rid: 2, seats: [{ id: 1, userId: 0, bookStatus: 0 }, { id: 2, userId: 0, bookStatus: 0 }, { id: 3, userId: 0, bookStatus: 0 }, { id: 4, userId: 0, bookStatus: 0 }, { id: 5, userId: 0, bookStatus: 0 }] },
  // { id: 4, name: 'TCR-EKM2', time: '11.00 AM', rid: 2, seats: [{ id: 1, userId: 0, bookStatus: 0 }, { id: 2, userId: 0, bookStatus: 0 }, { id: 3, userId: 0, bookStatus: 0 }, { id: 4, userId: 0, bookStatus: 0 }, { id: 5, userId: 0, bookStatus: 0 }] }];

  bus: BusDetail[] = [];


  Users: User[] = [{ userId: 1, userName: 'divya', password: '123' }, { userId: 2, userName: 'deepu', password: '123' }]

  loginStatus = false;
  loginUserId
  GST = 18;
  SeatCharge = 500;
  busSeatList: SeatDetail[] = [];
  userBookedDetail: BusDetail = new BusDetail(0, '', '', '', this.busSeatList);

  GetBusRoute(routefrom, routeTo): BusRoute {
    return this.BusRoutes.find(x => x.from == routefrom && x.to == routeTo);
  }

  GetBus(routefrom, routeTo): BusDetail[] {

    console.log('GetBus start');
    debugger;
    var routeid = this.GetBusRoute(routefrom, routeTo).id;
    // this.bus = this.bus.splice(0, this.bus.length)
    // this.bus =this.setBusDetails();

    console.log('GetBus before filter');
    debugger;
    return this.bus.filter(x => x.rid == routeid);

    
    // this.dataser.getData().subscribe(resp=>{
    //   this.dataFromServer=resp
  }

  GetUserBookedBus(): BusDetail[] {    
      //return this.bus.filter(x => x.rid == routeid); 
      debugger;   
      return this.bus.filter(x=>x.seats.find(y=>y.userId==this.loginUserId));
  }

  busData
  setBusDetails(): BusDetail[] {
    this.bus = this.bus.splice(0, this.bus.length)
    this.ajaxData.getAjaxBusDetails().subscribe(resp => {
     debugger;    
     console.log('getAjaxBusDetails start');
      this.busData = resp
      for (let i = 0; i < resp['length']; i++) {
        this.busSeatList = [];
        let busobj = new BusDetail(resp[i].id, resp[i].name, resp[i].time, resp[i].rid,this.busSeatList)
        //  busobj.id=resp[i].id;
        //  busobj.name=resp[i].name;
        //  busobj.rid=resp[i].rid;
        //  busobj.time=resp[i].time;
        busobj.seats = [];

        for (let j = 0; j < resp[i].seats['length']; j++) {
          let seatObj = new SeatDetail(resp[i].seats[j].id,resp[i].seats[j].userId,resp[i].seats[j].bookStatus)
          // seatObj.bookStatus = resp[i].seats[j].bookStatus;
          // seatObj.id = resp[i].seats[j].id;
          // seatObj.userId = resp[i].seats[j].userId;

          busobj.seats.push(seatObj);
        }
        this.bus.push(busobj)
        console.log(this.bus)
      }
    })
    console.log('getAjaxBusDetails stop');
    return this.bus;
  }

  BookSeatForACustomer(busId, seatId) {

    this.userBookedDetail.id = busId;

    var selectedSeat = this.bus.find(x => x.id == busId).seats.find(y => y.id == seatId);
    selectedSeat.bookStatus = 1;
    selectedSeat.userId = this.loginUserId;
    this.userBookedDetail.seats.push(selectedSeat);
  }

  CancelSeatForACustomer(busId, seatId, userId) {
    if (userId == 0) {
      var cancelledSeat = this.bus.find(x => x.id == busId).seats.find(y => y.id == seatId);
      cancelledSeat.bookStatus = 0;
      var cancelledIndex = this.userBookedDetail.seats.findIndex(x => x.id == seatId);
      this.userBookedDetail.seats.splice(cancelledIndex, 1);
    }
  }

  CancelSeatForLoginCustomer(busId, seatId) {
    var cancelledSeat = this.bus.find(x => x.id == busId).seats.find(y => y.id == seatId);
    if (cancelledSeat.userId == this.loginUserId) {
      cancelledSeat.bookStatus = 0;
      cancelledSeat.userId = 0;
      var cancelledIndex = this.userBookedDetail.seats.findIndex(x => x.id == seatId);
      this.userBookedDetail.seats.splice(cancelledIndex, 1);
    }
  }



  validateLogin(username, password) {
    var usr = this.Users.find(x => x.userName == username && x.password == password);
    if (null != usr && usr != undefined) {
      this.loginStatus = true;
      this.loginUserId = usr.userId;
    }
    else {
      this.loginStatus = false;
      this.loginUserId = 0;
    }
  }

  LogOut() {
    this.loginStatus = false;
    this.loginUserId = 0;
  }
  constructor(private ajaxData: AjaxService) { }
}
