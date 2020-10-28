import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators  } from "@angular/forms";
import {AuthService  } from "./../auth.service";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form;
  constructor(private fb:FormBuilder , private auth : 
    AuthService) { 
    this.form = fb.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required],
      confirmPassword:['',Validators.required]
    } ,{validators:matchingFields('password','confirmPassword')})
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.form.errors);
    this.auth.register(this.form.value);
  }

}

function matchingFields(field1,field2) {
  console.log(field1 , field2);
  return form =>{
    console.log(form.controls[field1].value);
    console.log(form.controls[field2].value);
    if(form.controls[field1].value !== form.controls[field2].value)
        return {mismatchedFields:true}
  }
  
}
