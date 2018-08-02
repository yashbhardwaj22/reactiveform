import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import{ Router } from '@angular/router';
import {RegisterServiceService} from '../register-service.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup;
  title = 'signup-app';
   test:boolean
   type:string="password"
   

    store()
    {
      this.RegisterServiceService.setdata(this.registerForm.value);
      //localStorage.setItem("Data",JSON.stringify(this.registerForm.value));
      this.newpage();
    }
    show() {
      this.type="text";
    }
    hide() {
      this.type="password";
    }
    toggle()
    {
      if(this.type === "password")
     this.type="Text";
     else
     this.type="password";
    }
    
    pass1()
    {
      if(this.registerForm.value.pass!==this.registerForm.value.passcon)
      {
        this.test= false;
      }
      else{
        this.test=true;
      }
    }
  constructor(private router:Router, private RegisterServiceService:RegisterServiceService) {
    this.registerForm = new FormGroup({
      firstname: new FormControl('', [
        Validators.required, Validators.pattern("^[a-zA-Z]+$")
  
      ]),
      lastname: new FormControl('', [
        Validators.required, Validators.pattern("^[a-zA-Z]+$")
      ]),
  
      email: new FormControl('', [
        Validators.required,Validators.email,
      ]),
      number: new FormControl('', [
        Validators.required,
        Validators.maxLength(10), Validators.minLength(10), Validators.pattern("^(([0-9]*)|(([0-9]*)\.([0-9]*)))$"),
  
      ]),
      pass: new FormControl('', [
        Validators.required,
      ]),
      passcon: new FormControl('', [
        Validators.required,
      ]),
      empid: new FormControl('', [
        Validators.required,
        Validators.maxLength(4),Validators.minLength(4),Validators.pattern("^(([0-9]*)|(([0-9]*)\.([0-9]*)))$"),
      ]),
      gen: new FormControl('', [
        Validators.required,
        Validators.maxLength(6), Validators.minLength(1), Validators.pattern("^[a-zA-Z]+$"),
      ]),
    })
    
     
  }
  
  newpage()
  {
    this.router.navigate(['/newpage'])
  }

  ngOnInit() {
    if(this.router.url==='/register')
    
    {
      var data=this.RegisterServiceService.getdata();
      
      // var data=JSON.parse(localStorage.getItem("Data"));
      console.log(data);
      console.log("yes");
      this.registerForm.patchValue({
        firstname: data.firstname,
        lastname: data.lastname,
        number:data.number,
        gen:data.gen,
        empid:data.empid,
      email:data.email,
        pass:data.pass,
        passcon:data.passcon
      });
    }
    else
    {
      console.log("No");
    }

  }
  
}