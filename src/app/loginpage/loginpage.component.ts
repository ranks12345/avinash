import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validators,AbstractControl } from '@angular/forms';
import { DataserviceService } from '../dataservice.service';
DataserviceService

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
loginform:FormGroup;
email:AbstractControl;
pwd:AbstractControl;

  constructor(private formbuilder:FormBuilder,private dataservice:DataserviceService) { 
    this.loginform=formbuilder.group({
      email: ['', [Validators.required, Validators.pattern(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)]],
      pwd:['',[Validators.required,Validators.minLength(5),Validators.maxLength(10)]]
    });
    this.email=this.loginform.controls['email'];
    this.pwd=this.loginform.controls['pwd'];
  }

  ngOnInit() {
  }
  login(){
    if(this.loginform.value.email && this.loginform.value.pwd){
    console.log(" This is Login Method");
    
    let sendData={
      email:this.loginform.value.email,
      pwd:this.loginform.value.pwd

    }
    console.log(sendData);
    let data=this.dataservice.login(sendData);
  }else
  {
    console.log("Empty File");
  }
  }
}
