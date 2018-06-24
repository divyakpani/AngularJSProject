import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cod',
  templateUrl: './cod.component.html',
  styleUrls: ['./cod.component.css']
})
export class CodComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() PayableAmount;

  @Output() eve=new EventEmitter();

  GoToLogin()
  {
    this.eve.emit();
  }

}
