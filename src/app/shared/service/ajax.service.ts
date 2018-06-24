import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AjaxService {
  constructor(private http:HttpClient) { }

  baseUrl="https://jsonplaceholder.typicode.com/";
  busUrl="http://localhost:8081/";
  getData()
  {
     return this.http.get(this.baseUrl+"posts")
  }
  getAjaxBusDetails()
  {
    return this.http.get(this.busUrl+"bus")
  }

  postData(){
    let obj={title: 'tempPost'}
    return this.http.post(this.baseUrl+"posts", obj)

  }

}
