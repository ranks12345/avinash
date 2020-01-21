import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  // mail: any;
  // pwd: any;

  constructor() { }
  login(data)
  {
    if(data.email == "xyz@gmail.com" && data.pwd == "tiwari")
    {
      console.log("Login Succesful");
    }
    else{
      console.log("Invalid Credentials");
    }
  }
  
}
