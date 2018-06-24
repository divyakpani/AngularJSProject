import { Component, OnInit } from '@angular/core';
import { Observable,observable } from 'rxjs';
import { AlertService } from '../alert.service';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {
  data:Observable<string>
  fruitArray=[]

  constructor(private alertSer: AlertService) { }

  ngOnInit() {
    this.data=new Observable(obser=>{
  
     setTimeout(()=>{
       obser.next("apple")
     }, 1000);

     setTimeout(()=>{
      obser.next("orange")
      obser.unsubscribe();
    }, 2000);

    setTimeout(()=>{
      obser.next("mango")
    }, 3000);

    })

    this.data.subscribe(fruit=>{
      this.fruitArray.push(fruit)
    })

    
  
  }

  setData(){
    return this.alertSer.setAlert("Successfully inserted data");
  }

}
