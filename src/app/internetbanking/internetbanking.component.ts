import { Component, OnInit,  Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-internetbanking',
  templateUrl: './internetbanking.component.html',
  styleUrls: ['./internetbanking.component.css']
})
export class InternetbankingComponent implements OnInit {

  @Input() PayableAmount;

  constructor() { }

  ngOnInit() {
  }

  @Output() eve=new EventEmitter();

  GoToLogin()
  {
    this.eve.emit();
  }

}
