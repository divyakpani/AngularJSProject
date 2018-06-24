import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-creditcard',
  templateUrl: './creditcard.component.html',
  styleUrls: ['./creditcard.component.css']
})
export class CreditcardComponent implements OnInit {

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
