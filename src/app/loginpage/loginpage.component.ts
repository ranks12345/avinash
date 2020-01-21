import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validators,AbstractControl } from '@angular/forms';
import { DataserviceService } from '../dataservice.service';
import { Router, RouterModule } from '@angular/router';
DataserviceService
Router

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
loginform:FormGroup;
email:AbstractControl;
pwd:AbstractControl;

  constructor(private formbuilder:FormBuilder,private dataservice:DataserviceService,private router:Router) { 
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
    //console.log(sendData);
    let data=this.dataservice.login(sendData);
    if(data==true)
    {
      this.dataservice.alertForSuccess("Login","Login Status");
      this.router.navigate(['about']);
    }
  else
  {
    this.dataservice.alertForWarning("Login Not allowed","Login Warning");
  }
  }
 else
  {
    this.dataservice.alertfordanger("Danger Login","Danger");
    console.log("Empty File");
  }
}
}

