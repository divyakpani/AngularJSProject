import { Component, OnInit } from '@angular/core';
import { AjaxService } from '../../shared/service/ajax.service';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {

  constructor(private dataser: AjaxService) { }

  ngOnInit() {
    this.getData();
  }

  dataFromServer
  getData()
  {
    this.dataser.getData().subscribe(resp=>{
      this.dataFromServer=resp
      console.log(resp)
    })
  }

  postData()
  {
    this.dataser.postData().subscribe(resp=>{
      console.log(resp)
    })
  }

}
