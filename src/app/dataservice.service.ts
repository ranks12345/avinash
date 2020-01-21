import { Injectable } from '@angular/core';
import {v4 as uuid} from 'uuid';
import{ToastrService} from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  // mail: any;
  // pwd: any;

  constructor(private toastrservice:ToastrService) { }
  login(data)
  {
    if(data.email == "xyz@gmail.com" && data.pwd == "tiwari")
    {
      console.log("Login Succesful");
      let id=uuid();
      console.log("My id=",id);
      localStorage.setItem("ID",id);
      return true;
    }
    else{
      console.log("Invalid Credentials");
      return false;
    }
  }
  alertForSuccess(message,title)
  {
   this.toastrservice.success(message,title);

  }
  alertForWarning(message,title)
  {

    this.toastrservice.warning(message,title);
  }
  alertfordanger(message,title)
  {
    this.toastrservice.error(message,title);
  }
}
