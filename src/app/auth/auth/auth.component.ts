import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService,authReturnData } from '../auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isLoginMode=true;
  isLoading=false;
  error:string =null;

  constructor(private authService:AuthService,private route:Router) { }

  ngOnInit() {
  }

  onSwithMode(){
    this.isLoginMode=!this.isLoginMode;
  }

  onSubmit(form:NgForm){
    if(!form.valid){
      return;
    }
    const email=form.value.email;
    const password=form.value.password;

    let authObs:Observable<authReturnData>;
    // console.log(form.value);
    this.isLoading=true;
    if(this.isLoginMode){
      authObs=this.authService.logIn(email,password)
    }
    else{
      authObs=this.authService.signUp(email,password)
    }

    authObs.subscribe(
      response=>{
        console.log(response);
        this.isLoading=false;
        this.route.navigate(['./recipes'])
      },
      errorMessage=>{
        this.error=errorMessage
        // console.log(errorRes)
        this.isLoading=false;
      }
    )

    form.reset();
  }

}
