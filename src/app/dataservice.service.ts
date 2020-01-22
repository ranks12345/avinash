import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import {ToastrService} from 'ngx-toastr';
import { BehaviorSubject, Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
 // mail: any;
 // pswrd: any;
 private source = new BehaviorSubject("");
 currentmessage= this.source.asObservable();

  constructor(private toasterservice: ToastrService) { }

  changeMessage(message:string)
  {
    this.source.next(message);
  }


  login(data)
  {
   let mail = data.email;
   let pswrd = data.password;

   if(mail=="xyz@gmail.com" && pswrd=="tiwari")
  {
      console.log("Login successfull");
      let id = uuid();
      console.log("my id :==: ",id);
      localStorage.setItem("ID",id);
      return true;
  }
  else{
    console.log("Invalid Entry");
    return false;
  }

  }

alertForSuccess(message,title)
{
  this.toasterservice.success(message,title);
}
alertforwarning(message,title)
{
  this.toasterservice.warning(message,title);
}
alertfordanger(message,title)
{
  this.toasterservice.error(message,title);
}


}