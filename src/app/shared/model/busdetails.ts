import { SeatDetail } from "./seatdetails";

export class BusDetail {
    id : number;
    name: string;
    time: string;
    rid : number;
    seats : SeatDetail[]=[];

    constructor(id, name, time, rid,seats : SeatDetail[])
    {
        this.id=id;
        this.name=name;
        this.time=time;
        this.rid=rid; 
        this.seats=seats;       
    }
}
