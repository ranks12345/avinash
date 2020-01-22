import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder, Validators, AbstractControl} from '@angular/forms';
import { DataserviceService } from '../dataservice.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerform: FormGroup
  fname: AbstractControl;
  mail: AbstractControl;
  pass: AbstractControl;
  

  constructor(private formbuilder: FormBuilder,private dataservice:DataserviceService, private router: Router) { 

    this.registerform=this.formbuilder.group({

      fname: ['',[Validators.required]],
      mail: ['',[Validators.required]],
      pass:['',[Validators.required]],
      gender: ['',[Validators.required]]

    });
    this.fname=this.registerform.controls['fname'];
    this.mail=this.registerform.controls['mail'];
    this.pass=this.registerform.controls['pass'];
    

  }

  ngOnInit() {
    

  }

  registered()
  {
    let send=[{
      name:this.registerform.value.fname,
      mail:this.registerform.value.mail,
      pass:this.registerform.value.pass
    }]
    this.dataservice.changeMessage(JSON.stringify(send));
    

    //  console.log(" ",this.registerform.value.fname);
    //  console.log(" ",this.registerform.value.mail);
    //  console.log(" ",this.registerform.value.pass);
    //  if(this.registerform.value.gender==0)
    //  console.log(" Male");
    //  else
    //  console.log(" Female");

    this.router.navigate(['home']);

  }

}