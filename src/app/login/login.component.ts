import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  myPass!: string;

  constructor(private router:Router) { }

  ngOnInit(): void {


    this.loginForm = new FormGroup({
      'username': new FormControl(null, [Validators.required, Validators.email, Validators.pattern('^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$')]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)])
    })
  }

  loginBtn(){

    if(this.myPass==="SmartServTest@123"){
      //redirect to dashboard
      this.router.navigate(['dashboard'])

    }
    else{
      window.confirm("Wrong password")
    }
  }
  
}

